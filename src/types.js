'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.oneOf = exports.Null = exports.BufferN = exports.Function = exports.UInt32 = exports.UInt8 = exports.tuple = exports.maybe = exports.Hex = exports.Buffer = exports.String = exports.Boolean = exports.Array = exports.Number = exports.Hash256bit = exports.Hash160bit = exports.Buffer256bit = exports.Network = exports.Satoshi = exports.Signer = exports.BIP32Path = exports.UInt31 = exports.typeforce = void 0;
exports.typeforce = require('typeforce');
const UINT31_MAX = Math.pow(2, 31) - 1;
function UInt31(value) {
  return exports.typeforce.UInt32(value) && value <= UINT31_MAX;
}
exports.UInt31 = UInt31;
function BIP32Path(value) {
  return (
    exports.typeforce.String(value) && !!value.match(/^(m\/)?(\d+'?\/)*\d+'?$/)
  );
}
exports.BIP32Path = BIP32Path;
BIP32Path.toJSON = () => {
  return 'BIP32 derivation path';
};
function Signer(obj) {
  return (
    (exports.typeforce.Buffer(obj.publicKey) ||
      typeof obj.getPublicKey === 'function') &&
    typeof obj.sign === 'function'
  );
}
exports.Signer = Signer;
const SATOSHI_MAX = 21 * 1e14;
function Satoshi(value) {
  return exports.typeforce.UInt53(value) && value <= SATOSHI_MAX;
}
exports.Satoshi = Satoshi;
// exposed, external API
exports.Network = exports.typeforce.compile({
  messagePrefix: exports.typeforce.oneOf(
    exports.typeforce.Buffer,
    exports.typeforce.String,
  ),
  bip32: {
    public: exports.typeforce.UInt32,
    private: exports.typeforce.UInt32,
  },
  pubKeyHash: exports.typeforce.UInt8,
  scriptHash: exports.typeforce.UInt8,
  wif: exports.typeforce.UInt8,
});
exports.Buffer256bit = exports.typeforce.BufferN(32);
exports.Hash160bit = exports.typeforce.BufferN(20);
exports.Hash256bit = exports.typeforce.BufferN(32);
exports.Number = exports.typeforce.Number; // tslint:disable-line variable-name
exports.Array = exports.typeforce.Array;
exports.Boolean = exports.typeforce.Boolean; // tslint:disable-line variable-name
exports.String = exports.typeforce.String; // tslint:disable-line variable-name
exports.Buffer = exports.typeforce.Buffer;
exports.Hex = exports.typeforce.Hex;
exports.maybe = exports.typeforce.maybe;
exports.tuple = exports.typeforce.tuple;
exports.UInt8 = exports.typeforce.UInt8;
exports.UInt32 = exports.typeforce.UInt32;
exports.Function = exports.typeforce.Function;
exports.BufferN = exports.typeforce.BufferN;
exports.Null = exports.typeforce.Null;
exports.oneOf = exports.typeforce.oneOf;
