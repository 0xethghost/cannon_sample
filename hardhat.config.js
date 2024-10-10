require("@nomicfoundation/hardhat-toolbox");
require("hardhat-cannon");

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
