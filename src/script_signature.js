'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.encode = exports.decode = void 0;
const types = require('./types');
const { typeforce } = types;
// BIP62: 1 byte hashType flag (only 0x01, 0x02, 0x03, 0x81, 0x82 and 0x83 are allowed)
function decode(buffer) {
  const hashType = buffer.readUInt8(buffer.length - 1);
  const signature = buffer.slice(0, -1);
  return { signature, hashType };
}
exports.decode = decode;
function encode(signature, hashType) {
  typeforce(
    {
      hashType: types.UInt8,
    },
    { signature, hashType },
  );
  const hashTypeMod = hashType & ~0x80;
  if (hashTypeMod <= 0 || hashTypeMod >= 4)
    throw new Error('Invalid hashType ' + hashType);
  const hashTypeBuffer = Buffer.allocUnsafe(1);
  hashTypeBuffer.writeUInt8(hashType, 0);
  return Buffer.concat([signature, hashTypeBuffer]);
}
exports.encode = encode;
