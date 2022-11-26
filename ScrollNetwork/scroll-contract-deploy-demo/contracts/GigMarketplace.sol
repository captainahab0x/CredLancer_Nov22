// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract GigsMarketplace {
  // @dev Maintain a mapping of Fake TokenID to Owner addresses
  mapping(uint256 => address) public tokens;
  // @dev Set the gig rate. the gig contract will be an nft listed on the marketplace
  uint256 gigRate = 0.1 ether;

  //  @dev deposit() accepts ETH and marks the owner of the given tokenId as the caller address 
  // param _tokenId - the Gigs NFT token Id to purchase
  function deposit(uint256 _tokenId) external payable {
    require(msg.value == gigRate, "This gig will cost 0.1 ether");
    tokens[_tokenId] = msg.sender;  
  }

  /// @dev getPrice() returns the price of one gig
  function getPrice() external view returns (uint256) {
    return gigRate;
  }

  /// @dev available() checks whether the given tokenId has already been sold or not
  /// @param _tokenId - the tokenId to check for 
  function available(uint256 _tokenId) external view returns (bool) {
    // address(0) = 0x00000
    if (tokens[_tokenId] == address(0)) {
      return true;
    }
    return false;
  }
}
