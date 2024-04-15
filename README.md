# Etherlink Generator

This project is an ERC-721 NFT contract. Each NFT is an Etherlink logo with on-chain metadata. It allows users to create unique NFTs with different colours.

## Setup

First, install the dependencies:
```
npm install
```

Then, rename the file `.env.example` and complete the empty fields.

## Deploy

Just run:
```
npx hardhat run scripts/deploy.ts --network <your-network>
```