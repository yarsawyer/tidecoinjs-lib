'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.testnet = exports.regtest = exports.tidecoin = void 0;
exports.tidecoin = {
  messagePrefix: '\x18Tidecoin Signed Message:\n',
  bech32: 'tbc',
  bip32: {
    public: 0x0768acde,
    private: 0x0768feb1,
  },
  pubKeyHash: 0x21,
  scriptHash: 0x41,
  wif: 0xb0,
};
exports.regtest = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
