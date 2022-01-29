import hre from "hardhat";

export async function setPriceConfig() {
  const TICKER = "ETH/USD";
  const NETWORK = "Mainnet";
  console.log(`Initializing Chainlink plugin ${TICKER}, ${NETWORK}`);
  // @ts-ignore
  const chainlinkConfig = hre.chainlinkPriceFeedConfig;
  await chainlinkConfig.initChainlinkPriceFeedConfig(TICKER, NETWORK);
  const prevPrice = await chainlinkConfig.getPrice();
  console.log(`prev price is ${prevPrice}`);
  await chainlinkConfig.setPrice("555");
  const nextPrice = await chainlinkConfig.getPrice();
  console.log(`next price is ${nextPrice}`);
}
