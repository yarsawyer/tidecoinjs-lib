var bitcoin=require('bitcoinjs-lib');

    const TIDECOIN = {
      messagePrefix: '\x19Tidecoin Signed Message:\n',
      bech32: 'tbc',
      bip32: {
        public: 0x0768acde,
        private: 0x0768feb1,
      },
      pubKeyHash: 0x21,
      scriptHash: 0x41,
      wif: 0xb0,
    };


function p2wpkh(pubkey) {
    var address1  = bitcoin.payments.p2wpkh({
      pubkey: Buffer.from("07"+pubkey,'hex'),
      network: TIDECOIN,
    });
    return address1.address;
}

function p2pkh(pubkey) {
    var address2 = bitcoin.payments.p2pkh({
      pubkey: Buffer.from("07"+pubkey,'hex'),
      network: TIDECOIN,
    });
    return address2.address;
}

function p2sh(pubkey) {
    var address3 = bitcoin.payments.p2sh({
	redeem: bitcoin.payments.p2wpkh({ 
      pubkey: Buffer.from("07"+pubkey,'hex'),
      network: TIDECOIN,
	})
    });
    return address3.address;
}

exports.p2wpkh=p2wpkh;
exports.p2pkh=p2pkh;
exports.p2sh=p2sh;
