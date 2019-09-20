Campaign.sol is the Solidity contract.

This Solidity contract is utilized for donations and requesting Ether.
Multipage frontend that allows creation of campaign, Ether requests,
Approvals, and Finalizing requests to send requested Ether to an address.

**Note** This is not a truffle project.
The project is built with Infura and interacts with Rinkeby Test Net.

CampaignFactory generates and lists campaigns.

MetaMask is utilized for transaction signatures.

The frontend Dapp utilizes web3, Next.js, React, Semantic UI React, and Node.js

Dapp can be accessed on localhost:3000

Mocha is the test framework utilized for Node.js. Used ganache-cli.
6 tests in total

Two main user stories for Campaign.sol

1.  Create a campaign in order to solicit Ether. The campaign creator becomes
    the contract manager and can request funds from contributors/approvers. Even
    as contributions are made, funds can't be withdrawn except for specifically
    approved requests. Campaign creator receives funds once the majority of
    approvers have approved each request.

2.  The contributors/approvers have more control of how Ether is "spent" because
    the contract address is tied to a request with a description for the use of
    the funds held in the contract. Also, all contributors/approvers have a say,
    leading to "consensus" by majority on whether to approve each request.

Interacting with the Dapp is intuitive with the frontend interface. Users can
launch a campaign to become the manager of the contract, contribute to a
campaign to become an approver, and finalize a request to send Ether to
destination contract address. Doing both on the test net as a single user just
requires utilizing two or more accounts in MetaMask on the Rinkeby Test Net.
