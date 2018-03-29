How to get on the Rinkeby testnet in less than 10 minutes
=====================================================

## Step 1: Download Geth

First, install the latest version of `geth` (1.8.1) to your machine.

For Ubuntu, you can follow the instructions on the [official wiki](https://github.com/ethereum/go-ethereum/wiki/Installing-Geth):

```
sudo apt-get install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt-get update
sudo apt-get install ethereum
```

If you're just upgrading `geth` from a previous version, you can just run:

```
sudo apt install geth
```

If you're downloading this on your Mac, you can use [Homebrew](https://brew.sh/) to install from scratch:

```
brew install ethereum
```
and again if you are upgrading just `geth`:

```
brew upgrade geth
```

## Step 2: Run Geth in Rinkeby Mode

To start syncing your node up with the Rinkeby testnet (might take several minutes), open a terminal window and run:

```
geth --rinkeby --syncmode "fast"
```

And now you wait. You will see the INFO message "Block synchronisation started" then many INFO lines starting with "Imported new block receipts". Sync is in progress... 

Make sure you don't close this terminal tab while you're doing the rest of these steps!

SECURITY WARNINGS: We've enabled RPC and also loaded the `personal` module to allow testing and participating in smart contracts.

However, if you do these things on a mainnet node with your unlocked wallet exposed to the internet, you could get hacked and all your monies stolen. 

## Step 3: Create an account

In a separate terminal completely, we want to open up a `geth` console and attach it to an appropriate data directory.

After opening up the console, we want to create an Ethereum account and save the password somewhere safe.

On Linux it would be:
```
geth --datadir=$HOME/.rinkeby attach ipc:$HOME/.rinkeby/geth.ipc console
```

On Mac it would be:
```
geth --datadir=$HOME/.rinkeby attach ipc:$HOME/Library/Ethereum/rinkeby/geth.ipc console
```

and create an account (substituting a much better password than `notmyrealpassword`).

```
Welcome to the Geth JavaScript console!

instance: Geth/v1.8.1-stable/darwin-amd64/go1.10
 modules: admin:1.0 clique:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

> eth.accounts
[]
> personal.newAccount("notmyrealpassword")
"0x3dd474d2957843e6504169f7b299a9f53f281756"
> eth.coinbase
"0x3dd474d2957843e6504169f7b299a9f53f281756"
> eth.getBalance(eth.coinbase)
0
```
You'll see a different address than `0x3dd474d2957843e6504169f7b299a9f53f281756`. That one's mine, provided as an example. Save your password in a secret place, preferrably encrypted. 

Leave that terminal open for now.

## Step 4: Request ETH

Because Rinkeby both uses Proof-of-Authority (clique) to grant ETH, you'll need to request some to get started. 

However, unlike Kovan which requires you to bootstrap by requesting KETH from another human being, Rinkeby has a super-slick automated faucet, where you submit your address (copied from above) into one of three methods:

* A public tweet on Twitter
* A public Facebook post
* A public Google+ link

Since I never use Google+ for any reason, I might as well use it as a medium for requesting ETH.

You can go to `http://plus.google.com` and post publicly on any discussion board. [Here's mine.](https://plus.google.com/u/1/115939958206897664217/posts/SKBeH5RdaG4)

Copy your post URL (mine provided as an example):
```
https://plus.google.com/u/1/115939958206897664217/posts/SKBeH5RdaG4
```

Go to the [`Crypto Faucet` section of the rinkeby website](https://www.rinkeby.io/#faucet) and paste it into the blank.

Choose an option from the dropdown which corresponds to how much Ether you need and how frequently (requesting more Ether will take longer between requests). I requested 3 ETH in 8 hours. Don't worry, you'll get your ETH in seconds, but you can't request again for another 8 hours. This is to prevent spammers from swamping the network by overpowering it with mining power and then out-spending everyone else.

This is the transaction where I received my 3 ETH:
https://rinkeby.etherscan.io/tx/0xfcb8261e4544162aca1d4a4a428a2f50b282b2de37e4d8b7322a30615b8e351b

Now, back in your geth console, wait for at most 15 seconds for the next block to be found, and verify your balance again
```
> eth.getBalance(eth.coinbase)
3000000000000000000
```

Woohoo! You're rich now (in testnet wei)! :)

While you're at it, check out these [cool data visualizations](https://www.rinkeby.io/#stats) of the network stats!
