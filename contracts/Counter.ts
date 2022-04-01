export const contract = {
  networks: {
    "44787": {
      events: {},
      links: {},
      address: "0x285A14Ef973f4996f2AEa9D995d1689005Ec3752",
      transactionHash:
        "0x1e1f88e4ae0826ff6c8396d57ff408886ac93d5db34b31d4680ccfeea1713578",
    },
  },
  abi: [
    {
      inputs: [],
      name: "decrementCount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "incrementCount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
};
