require("@nomicfoundation/hardhat-toolbox");
require("hardhat-cannon");
require("dotenv").config();
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.27",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: "cannon",
  networks: {
    local: {
      url: "http://localhost:8545",
      chainId: 31337,
      gas: 12000000, // Prevent gas estimation for better error results in tests
      accounts: process.env.DEPLOYER_PRIVATE_KEY
        ? [process.env.DEPLOYER_PRIVATE_KEY]
        : "remote",
    },
    hardhat: {
      gas: 12000000, // Prevent gas estimation for better error results in tests
    },
    mainnet: {
      url:
        process.env.NETWORK_ENDPOINT ||
        "https://eth-mainnet.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
      accounts: process.env.DEPLOYER_PRIVATE_KEY
        ? [process.env.DEPLOYER_PRIVATE_KEY]
        : [],
      chainId: 1,
    },
    ["optimistic-sepolia"]: {
      url:
        process.env.NETWORK_ENDPOINT ||
        `https://opt-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: process.env.DEPLOYER_PRIVATE_KEY
        ? [process.env.DEPLOYER_PRIVATE_KEY]
        : [],
      chainId: 11155420,
    },
    ["arbitrum-sepolia"]: {
      url:
        process.env.NETWORK_ENDPOINT ||
        `https://arb-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: process.env.DEPLOYER_PRIVATE_KEY
        ? [process.env.DEPLOYER_PRIVATE_KEY]
        : [],
      chainId: 421614,
    },
    ["optimistic-mainnet"]: {
      url:
        process.env.NETWORK_ENDPOINT ||
        `https://opt-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: process.env.DEPLOYER_PRIVATE_KEY
        ? [process.env.DEPLOYER_PRIVATE_KEY]
        : [],
      chainId: 10,
    },
    sepolia: {
      url:
        process.env.NETWORK_ENDPOINT ||
        `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: process.env.DEPLOYER_PRIVATE_KEY
        ? [process.env.DEPLOYER_PRIVATE_KEY]
        : [],
      chainId: 11155111,
    },
    ["base-mainnet"]: {
      url:
        process.env.NETWORK_ENDPOINT ||
        `https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: process.env.DEPLOYER_PRIVATE_KEY
        ? [process.env.DEPLOYER_PRIVATE_KEY]
        : [],
      chainId: 8453,
    },
    ["base-sepolia"]: {
      url:
        process.env.NETWORK_ENDPOINT ||
        `https://base-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: process.env.DEPLOYER_PRIVATE_KEY
        ? [process.env.DEPLOYER_PRIVATE_KEY]
        : [],
      chainId: 84532,
    },
  },
  gasReporter: {
    enabled: !!process.env.REPORT_GAS,
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY,
      optimisticEthereum: process.env.OVM_ETHERSCAN_API_KEY,
      optimisticSepolia: process.env.OVM_ETHERSCAN_API_KEY,
    },
  },
};
