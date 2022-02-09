## Overview

This repository hosts a local hardhat mainnet fork testing environment and Chaos Labs hardhat pluign usage examples. Navigate to our [Quickstart](#quickstart) section to get the repo up and running.

For a full deep on Chaos Labs please visit the [Chaos Labs blog](https://chaoslabs.xyz/blog).

## <a name="quickstart"></a> Prerequisites

We assume you have npm installed, if not go to https://nodejs.org/en/download/ and follow the instructions.

Our command-line tool is written in Typescript. Typescript introduces type safety for Javascript. Let's install this with the following command.
- `npm i -g ts-node`
- Confirm `ts-node` installed correctly by running `ts-node -- help` and verify the help instructions are printed to your terminal.
- Alchemy API key for mainnet fork access: [Get one here](https://www.alchemy.com/).

## <a name="quickstart"></a> QuickStart

1. `git clone https://github.com/ChaosLabsInc/demo-plugins-repo.git`
2. `cd demo-plugins-repo`
3. `npm i` - Installing project libs.
4. **In a separate terminal window (spawn a new tab in your terminal, cmd+t on MacOS or ctrl+t on Windows)** run: `npx hardhat node --fork https://eth-mainnet.alchemyapi.io/v2/<YOUR_ALCHEMY_KEY>` - Bootstrapping a mainnet fork locally.
5. `npm run start`

After running the quickstart you should have the following: 2 terminals (each running from the `demo-plugins-repo` root).

- 1 running an alchemy mainnet fork
- Another running `npm run start` and it should look something (the important part here is that you have a hardhat mainnet fork up and running) like this:

![image](https://user-images.githubusercontent.com/8246234/153304987-19c0ac94-6b6b-4337-a5de-7d2c4e8934e5.png)

## Recommended Usage

This repo is meant to serve as an example of instantiating Chaos Labs hardhat-plugins and using their functionality. Check out the `scripts` dir for specific exmaples.

Get inspired! 🎊 🚀 ✨
