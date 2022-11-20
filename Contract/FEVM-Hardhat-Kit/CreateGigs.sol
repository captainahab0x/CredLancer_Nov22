pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

// We will add interfaces here

contract CredLancer is Ownable {
  /**
   * Interface for the GigMarkeplace
   */
  interface IGigMarketplace {
    // @dev getPrice() returns the price of a gig on the marketplace
    // @return Returns the price in wei for the gig
    function getPrice() external view returns (bool)

    // @dev available() returns whether or not the given _tokenId has already been purchased
    // @return Returns a boolean value - true if available, false if not
    function available(uint256 _tokenId) external view returns (bool);


    // @dev deposit() purchases an NFT from the FakeNFTMarketplace
    // @param _tokenId - the fake NFT tokenID to purchase
    function deposit(uint256 _tokenId) external payable;
  }
  /**
   * Interface for SBT
   */
  interface ICLT {
    
  }

  struct gigProposal {
    // nftTokenId - the tokenId of the Gig NFT, freelancer can apply for gig
    uint256 nftTokenId;
    // deadline - the UNIX timestamp until which this proposal is active. Money will be paid to the freelancer once the deadline has passed.
    uint256 deadline;
    // apply for gig
    uint256 apply;
    // accept application for gig
    uint256 accept;
    // executed - checks whether or not this gig has been executed
    bool executed;
    // voters - a mapping of SBT to booleans indicating whether that SBT has already been used to cast a vote or not
    mapping(uint256 => bool) voters
  }
  create a mapping of ID to gigProposal
  mapping(uint256 => gigProposal) public proposals
  // Number of gigProposals created
  uint256 public numGigs

  // Create a payable constructor which initializes the contract
  // instances for gigMarketplace and SBT
  // The payable allows this constructor to accept an ETH deposit when it is being deployed
  constructor(address _gigMarketplace, address _SBT) payable {
    gigMarketplace = IGigNFTMarketplace(_gigMarketplace);
    SBT = ISBT(_SBT);
  }

  modifier  sbtHolderOnly() {
    require(SBT.balanceOf(msg.sender) > 0, "NOT_A_DA0_MEMBER");    
    _;
  }

  // @dev createProposal allows a SBT holder to create a new proposal in the DAO
  // @param _nftTokenId - the tokenID of the NFT to be purchased from FakeNFTMarketplace if this proposal passes
  // @return Returns the proposal index for the newly created proposal
function createProposal(uint256 _nftTokenId)
    external
    sbtHolderOnly
    returns (uint256)
{
    require(gigMarketplace.available(_nftTokenId), "NFT_NOT_FOR_SALE");
    gigProposal storage proposal = proposals[numGigs];
    proposal.nftTokenId = _nftTokenId;
    // Set the proposal's voting deadline to be (current time + 5 minutes)
    proposal.deadline = block.timestamp + 5 minutes;

    numProposals++;

    return numProposals - 1;
}

// Create a modifier which only allows a function to be
// called if the given proposal's deadline has not been exceeded yet
modifier activeProposalOnly(uint256 proposalIndex) {
    require(
        proposals[proposalIndex].deadline > block.timestamp,
        "DEADLINE_EXCEEDED"
    );
    _;
}

// Create an enum named Vote containing possible options for a vote
enum Vote {
    YAY, // YAY = 0
    NAY // NAY = 1
}


/// @dev voteOnProposal allows a SBT holder to cast their vote on an active proposal
/// @param proposalIndex - the index of the proposal to vote on in the proposals array
/// @param vote - the type of vote they want to cast
function voteOnProposal(uint256 proposalIndex, Vote vote)
    external
    sbtHolderOnly
    activeProposalOnly(proposalIndex)
{
    Proposal storage proposal = proposals[proposalIndex];

    uint256 voterBalance = SBT.balanceOf(msg.sender);
    uint256 numVotes = 0;

    // Calculate if the vote has been passed
    for (uint256 i = 0; i < voterBalance; i++) {
        uint256 tokenId = SBT.tokenOfOwnerByIndex(msg.sender, i);
        if (proposal.voters[tokenId] == false) {
            numVotes++;
            proposal.voters[tokenId] = true;
        }
    }
    require(numVotes > 0, "ALREADY_VOTED");

    if (vote == Vote.YAY) {
        proposal.apply += numVotes;
    } else {
        proposal.accept += numVotes;
    }
}

// Create a modifier which only allows a function to be
// called if the given proposals' deadline HAS been exceeded
// and if the proposal has not yet been executed
modifier inactiveProposalOnly(uint256 proposalIndex) {
    require(
        proposals[proposalIndex].deadline <= block.timestamp,
        "DEADLINE_NOT_EXCEEDED"
    );
    require(
        proposals[proposalIndex].executed == false,
        "PROPOSAL_ALREADY_EXECUTED"
    );
    _;
}

/// @dev executeProposal allows any SBT holder to execute a proposal after it's deadline has been exceeded
/// @param proposalIndex - the index of the proposal to execute in the proposals array
function executeProposal(uint256 proposalIndex)
    external
    sbtHolderOnly
    inactiveProposalOnly(proposalIndex)
{
    Proposal storage proposal = proposals[proposalIndex];

    // If the proposal has more YAY votes than NAY votes
    // purchase the NFT from the FakeNFTMarketplace
    if (proposal.apply === proposal.accept) {
        uint256 gigRate = gigMarketplace.getPrice();
        require(address(this).balance >= nftPrice, "NOT_ENOUGH_FUNDS");
        gigMarketplace.purchase{value: gigRate}(proposal.nftTokenId);
    }
    proposal.executed = true;
}

/// @dev withdrawEther allows the contract owner (deployer) to withdraw the ETH from the contract
function withdrawEther() external onlyOwner {
    payable(owner()).transfer(address(this).balance);
}

// The following two functions allow the contract to accept ETH deposits
// directly from a wallet without calling a function
receive() external payable {}

fallback() external payable {}

}


