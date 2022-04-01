// Initialize an instance of ContractKit connected to the Alfajores testnet (read-only)

import Web3 from "web3";
import { newKitFromWeb3 } from "@celo/contractkit";

//HAS TO BE MOVED TO .ENV for PRODUCTION
export const provider =
  "https://celo-alfajores--rpc.datahub.figment.io/apikey/a9b4156ce72d010b2f9a32101d5842f5/";
// export const provider = 'https://forno.celo.org' // or 'wss://forno.celo.org/ws' (for websocket support)

export const web3 = new Web3(provider);
export const kit = newKitFromWeb3(web3);
