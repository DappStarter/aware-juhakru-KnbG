require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski stove deny pave coin include praise army gasp'; 
let testAccounts = [
"0x6a04c210c99fe125b46d668e9a349ee6899de24eea81c6973b7e5de45de795d5",
"0x07b508ba3b5f3919deb4feddc1d7b7653ddd47339287ee6a04b6b3a38421cc75",
"0x02785abd1685d5f3990ac52712ffc9bd31529f6cedd40bc5db9f0964d5f67bd6",
"0xe227c30f45f53598078dcd9c88d7671c5f3923968ecd9cca36ccdde61631c3d7",
"0xef30b0f83000826936a434733ed4e321f9b49158f9d7b600ab59859300682eaa",
"0xaf9e42bbe36664bb42480eff85d61da4cd6f5d6f8d1d8fca27fdf48134771401",
"0x6fe3cd2ecc727248187e85400694a59779a90f9e1aa19704577f31d60e80dd88",
"0x94fefdbcbdbaccbad7333c7134c3622a914edba9341fc633d62fad35f09e626c",
"0x465cef1c716c3c1c8d650e212fd15b3894a281557f4365775dc9f55dc76d2fa5",
"0x7d14d3d6a31d0dcb496263fbeb4e5ebb53f75b234c0376288cf53c11a803aab9"
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

