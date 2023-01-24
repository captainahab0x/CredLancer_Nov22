
# CredLancer
CredLancer aims to deliver tamper-proof credentials, showcase professional development and achievement, while maintaining data privacy and sovereignty. We aim to address three major problems:

1. The lack of trust and verifiability in professional credentials
2. Difficulty in demonstrating professional development and achievements
3. Lack of interoperability and portability of professional data

CredLancer enables organizations to issue tamper-proof credentials to employees and other members, and allows professionals to showcase these on-chain credentials along with their professional development certifications. With the integration of Zero-Knowledge Proofs, CredLancer ensures that personal data remains private while still allowing for verifiable validation of professional qualifications.

> "https://github.com/captainahab0x/CredQuest" is the repository for ¨CredQuest¨ the added feature of a gig marketplace built with IPFS & Filcoin Virtual Machine

## Built With

- FEVM, SOlidity, next.js, react.js hardhat-kit, Figma(mock ups)
- Git, Github and Visual Studio Code

## Getting Started

To get a local copy up and running follow these simple example steps.

- Choose a directory
- Open a Terminal
- write: git clone https://github.com/captainahab0x
- get into to directory "CredLancer_Nov22"
- write: npm install

# User Flow:
You can see our deck here: https://bit.ly/CredLancerSpaceWarp

## Workflow: Organization and freelancers

**Organisations**

- Let user apply as Organization
- Let Organization create a task/project/quest
    Task Name
    Task Hours (Amount)
- Let Organization  assign the task to the freelancer
- Let Organization mark task as completed and sign for release of funds to the freelancer
- Let Organization  assign freelancer to Organization
- Assign a roll / badge (SBT) to a freelancer (Only for freelancer organisationLandingLandingLanding).

**Freelancers**

- Can see / edit profile
- Can see /search tasks
- Have to option to apply for a task
- Can see his accepted task
- Can see badges


## The process
**Organization**
From the website, user can connect their wallet and register themselves as either freelancer or company(dao)

*Freelancer**
Upload credentials for verification 
As Employer, can post of projects, can deliver badges, can set up vault for project pay out

Come up with a rating model based on year of experience and skills
An abstract algo to assign points

Match the job to the person with highest ratings. 
Rating based on the number of interviews received

**Recruitment**
Multisign wallet with funds released on delivery by certain time.
When both parties sign, funds move from DAO to employee


##Using FEVM by Smart Contracts

- Contract to represent freelancers
- Contract to represent entities/ daos
- Contract for job listing which auto matches based on highest rating
- Terms of payment are defined in the job.
- Funds move to freelancer on expiry of that time. 


## Project scope

The project scope can be broadly classified into three categories

**Profile definition and Enrichment**

- Onboarding
- Verification
- Training: New Skills
- Hackathons
- Skill Badging
- erformance on assigned tasks based (Org authority)
- Contribution/hours & revenue 		

**Project postings**

Job posting by entities like Dao. At the time of posting, 25% is deposited and is locked in the smart contract to be release on approval of the candidate

**Skill based recruitment**

- Recruitment
- Tasks assignment
- Task matching logic
engagement
- Payouts - money movement

## How this was Made

-For the front end we use react with RainbowKit for a easy access to the smart contracts in the Wallaby network.

- For the smart contract development we user the FEVM-hardhat-kit as boilerplate for the development.

- For the design we use Figma.

## Show your support

Give a ⭐️ if you like this project!




