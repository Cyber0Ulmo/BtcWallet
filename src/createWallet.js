// import dependecy
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//NET testnet
const networkTestNet = bitcoin.networks.testnet

//derivação wallet 
const path = `m/49'/1'/0'/0`

//Mnemonic senha
let mnemonic = bip39.generateMnemonic()
const seedWords = bip39.mnemonicToSeedSync(mnemonic)

//raiz da caretira
let root = bip32.fromSeed(seedWords, networkTestNet)

//contas
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2wpkh({
    pubkey: node.publicKey,
    network: networkTestNet,
}).address

console.log("Wallet generated")
console.log("Address: ", btcAddress)
console.log("pvt key: ", node.toWIF())
console.log("seed: ", mnemonic)