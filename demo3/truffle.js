const HDWalletProvider = require("truffle-hdwallet-provider");
const config = require('./config.json');

module.exports = {
  networks: {
    //download ganache-cli and type `ganache-cli` in your console to start a locally hosted blockchain
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
    	provider: new HDWalletProvider(config.mnemonic, "https://rinkeby.infura.io"),
    	network_id: "4",	
     	gas: 4500000,
     	gasPrice: 25000000000
    }
  }
};
