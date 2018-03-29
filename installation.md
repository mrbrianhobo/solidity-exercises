# Installation Guide #

Before we start, make sure you know how to install programs via your machine's package manager ([Homebrew](https://brew.sh/) for MacOS, apt-get for Ubuntu, etc.). 

## Homebrew ##
Since I'm using macOS, I'll be installing things with [Homebrew](https://brew.sh/). If you don't have that installed, you can run this command to get started:
```
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
After that, you should be able to install packages using the `brew install [package name]` command. 

## Node.js and npm ##
A lot of the development tools we use to develop in Solidity will rely on Javascript libraries (specifically [Node.js](https://nodejs.org/en/)), so we want to make sure that we have the latest version of Node.js installed. By installing Node.js, you also get access to [npm](https://github.com/npm/npm) (a Javascript package manager) which we will use to install other development tools such as [Truffle](https://github.com/trufflesuite/truffle) and [Ganache](https://github.com/trufflesuite/ganache). 
```
$ brew install node
```

## Geth ##
[Geth](https://github.com/ethereum/go-ethereum) is the official Go implementation of the Ethereum protocol which you can use as a standalone Ethereum client. In our examples, we'll use Geth to connect to the [Rinkeby testnet](https://www.rinkeby.io/) and see what we can do!
```
$ brew tap ethereum/ethereum
$ brew install ethereum
```

## Truffle and Ganache ##
[Truffle](https://github.com/trufflesuite/truffle) is our main develement tool for deploying Solidity smart contracts. It helps us organize all our files into a neat little package and simplifies the smart contract deployment and testing process. [Ganache](https://github.com/trufflesuite/ganache) is visual development tool that will help us spin up a local Ethereum blockchain instance on our machine. In our examples, we'll be using the command line interface (ganache-cli) to help us manage our local blockchain instance. For more information about using the Ganache GUI (not the CLI), visit the Github repo [here](https://github.com/trufflesuite/ganache)). 
```
// Make sure to have npm v5.3.0 and node v8.3.0 installed
$ npm install -g truffle

// Command line interface, github.com/trufflesuite/ganache-cli/blob/master/README.md
$ npm install -g ganache-cli

// Ganache GUI installation: truffleframework.com/ganache/
```

## (Recommended) Metamask ##
[Metamask](https://metamask.io/) is a browser extension that enables you to connect to Ethereum dApps. It acts as a user interface to manage your identities on different sites and sign blockchain transactions. For instructions on how Metamask works and how to install it, visit their site [here](https://metamask.io/) and watch their intro video. 

## (Optional) solc ##
solc is the compiler developed for the Solidity Contract-Oriented Programming Language. Feel free to install it and try it out, but for quick testing and learning Solidity, it'll probably be easier to access the online [Remix compiler](https://remix.ethereum.org/). For more installation info, visit the documentation  [here](http://solidity.readthedocs.io/en/v0.4.21/installing-solidity.html).
```
$ brew install solidity
// or
$ npm install -g solc

// Solidity compiler installation: http://solidity.readthedocs.io/en/v0.4.21/installing-solidity.html
```