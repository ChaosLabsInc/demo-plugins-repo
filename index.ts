import { setPriceConfig } from "./src/chainlink"

async function main(): Promise<void> {
  await setPriceConfig()
}

main()

