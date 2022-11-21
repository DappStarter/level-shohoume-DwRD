require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success strong reflect sad assume install hen equal giggle'; 
let testAccounts = [
"0xc6936f521fefcb09c588610eac0dc403a37ae7afc1f7cf29b042affdd1b42b18",
"0x5c77ec5dda1db37179e8ed9c91ecaf0a933d4600d30dbcc452124db625b3fb84",
"0x19f1a7543bc7a6c69188dc9b6b81ce78abbb03a2ed33b3fba1c38e39ccb3e8cf",
"0x1cf39154eba68ab1bc03020ff6b36e66f6f874965d76a44c35d8618bb29fe6c6",
"0x69865b2bd590424c9d81a172698262537cc0484f6c7032583787a0ddb25af0ed",
"0xcf123965a47e6c5544c863de441a0520f298be2d4ba76f5838112903d0916e5b",
"0x06e3789c93809a2e1ca08658f18a2fec4457bbe13965964e4b99c1fda1b9f082",
"0xda520a956bdf34494298aced391b204ab32c052847f7bbe4e212fe10abab3dce",
"0x3597b53642e9dd1825c8331a57e37261212d028fe94f053336d14319c37d9883",
"0x196aa50780091ebd85d2b8ec28c20c0c2d3d93ba5fa173096750757dce9ac07f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

