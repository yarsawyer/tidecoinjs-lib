var bitcoin=require('tidecoinjs-lib');



function p2wpkh(pubkey) {
    var address1  = bitcoin.payments.p2wpkh({
      pubkey: Buffer.from("07"+pubkey,'hex')
    });
    return address1.address;
}

function p2pkh(pubkey) {
    var address2 = bitcoin.payments.p2pkh({
      pubkey: Buffer.from("07"+pubkey,'hex')
    });
    return address2.address;
}

function p2sh(pubkey) {
    var address3 = bitcoin.payments.p2sh({
	redeem: bitcoin.payments.p2wpkh({ 
      pubkey: Buffer.from("07"+pubkey,'hex')
	})
    });
    return address3.address;
}



var pubkey="094506c1aa01de893505213a701ec05428a7c26202cc78457c841fcca233a99590350e1b1d59dd28945c8e84c5fb8aaccb29bf36c5da3f51870998cac52f08995bf938d9332463a9d4da7a2d522f2caead22935e3d8f868d1683ef8a3284e773af622c2a8afa6bc4a793a7de3850fa54d91e541029648d1a63b53db6c1dee762e49b92baca05a9baecd04d927a73f5a50546460b74f162e219a8372baac9b0019ba435ee34940e17cd3e099028fccd627a09421785ed957d550994eba1a296acbd374900bf6b0dd37bd7952c84bdfd54ed03d7646c8bab88576035e13db0b52e9022ddbcd9c44e6ca6fa6e8b58a5578b24b2dba857d3698689c35b9c8c55f679346ba416213d0654c489cd55eced119c905c52ac7b27d24e8625b03672711dd96aec86860de397ad082e8919e99729106960badf65126dc0917c63ce5fcc0d01be01d5a20e32e3daa3c033c5ed7bad8c2eb80226588e411d69814916ef149467d981e86ed7cd974e99e164ef3b7ead71b01a29509166a282ec02d6b01d0a976da6aa004add8acf2167ad701807e48765413dd2b886a506b01e9df5f0c0281314ae401798b0a4da4ec7c606ba338aaa90c003791009294beaa19c32ce6d443d50e38fa19ec242e28d9de10528f5837d5ab2e525274af684706e723a059b8c48c90696530224a834ea316848817105160091356ccc63aa221fbb26612cea07846698968a537368207284934b4309039d1e0526381e2049283acb12097e3bc2fef35a98b4380880641d42b39542ae0295ad136a3a0eb2924f0340ae9bb15726f06a9e9f28fc4822269453b659de867335ed5bb7d148715580fa6e21dfabde02b8729bf31cb9cd84cae2a998019391972fd749162193121a2689dacfe6a24cbc2bd48e72148a3918e0fa47bccbd27b24f7483129e634a4224668d36a714af6300767529eb5797b8e6b0f3329f995d1cf68b57459952c95b75aba0ea68161a3a97ccb14678684a3894585d0a09b0c74a9c8bb9a914d1815923909a37f44b9a1f556763099f48b79df6da814b5fba1d338b41c8e2a0fa1a43351f72b7e5ba515305e709eda78a2c5e5098e69eb0d1e089ad8d9bd68926b7571117557843030b152f47939a0a05795d660098fa0885d9e4d82be530302b6085e2981d4edc30bae6e63b39576a896289b7c41de4409b4762703ab7ffa3ad4982269529efb88d600f3bc1dd1738e9694b3b95594c54472a57000e8c51bba0a104101de41d86325b7164cc19b";
var privkey="591c0f84f7bfbfd811010c0efbffffc0fbb0850400fe003f0708408013e0c6fbce7df44046fb9082040102ffdfc4f7e2010fe0800bc08303d1c30bf13e005040fc10c318303b0fbfbefc2fbcffb0bdefa23df80ef5142fc31f9f04e7e0411f7fc1042081083f87ffbefa105f82f021860bd1ff13e005f3f0fc2400c11000bbfc2f000032bef050bd178142fbd13ef7e23ef43fbbffaf80e3cffb04517c108040f83181188fc8fcce3effe08608617c0851bef48f45e82fba1c6fc0e82fbef48f01ffdf07fff0bbe46f7ffbff82f42f7e03af89f01f4023f13ae80f81e43f3f08500408313ff7e13c04103d13e0fcfc2f7f003fbd080f770b9ffb04700110507bf43ffe188dbf27c0b7ec124007e000e000c7f8117d03f07d080f03042fc01031c5fc6f85f81dfd0bf080f40142e80eff0bd0c0242f7afc2fc3ffbf3df7ef7c0bdfbdf3d081ebff800061390be13d080ffb008ffd1be0020c4f46000f3ff080bff00f7df7fffff3af8007e03bf41fc31c127bec2004079041f451faf3a138f7d13e038e410fe101f4214703d0ff03cf3ff3ef43f02182ff60bdfc317de41f000baf831850c30bcfc0f7b042efbeb70491c007f2bc0fa1bfe7d0ba04008417e14307e23e0f7041f40185ec0145e80eb71c1e40e84080ec00bf0c0f7f03a041f410fa0790bf083043f82ffd0fb0fb00523efc3f02141f82f810befc10821bdf4607bfc407fe830810c00bf0be04603f006f7f0fc141ebfefef81e7c03ef3e140ffe0bcfc3ffbf40ffeec0f7dfbd082ebe10208bf7cec7e86f010b9f430c4041fbbfc213e00100313ff84ec707ef43181ec3f80f7d07bfbbd80ec2f7ffbb0bd003f40f050b8f7f035f8618003af440bff780fb04017c040f00f8203d0fcf3f0fcf3f087f7ffc213d0bcf44080f00e780ffe3e07af03f83f8703f1440fa07d042f7b100e43140d38040fc00c01bce850fc1c10411811c203a13bfbc10203be7b0bfebcff81c60b90bcec20bd047e060c2ef717a13f207086104e79101fb7103f39fb8e8af40f43f3bf45ffdec3e81e840411bffc9d7f07affff7f10027f007e45000fbccced1dd4061dbaf512e91de604fc0106051de01b262516f11922caf4f1012efc2fea1a04ff1014f7110900f0cf10ffc0482ecd2bea0c12f503fcffe317edf90bdc01cefcd815ffe81adcf6e508ede7f7cae610f90912ccf1e401ff06b924f0031d27f3f5faf5f60cff09f0f4e13813feebd822e0412901180cf719eef82227dd2511cd05efedf3e9120be6f30f00061dd1eebde10849dc0b03d505210fecdfeb28ffe4e10b0e1109ee1805e00017e2e007f01310f2e6cb0523ea3df8f6f1fb28f50dd4c50bfd030922e227f81e30ffe8fa0013fd1a041b01cce004f5e00e07ca2003ffdce3dde4020ad5cae4100f4ad61f0de51211e9eef7eb0625ed12fbe9202ed1dffa0dfee9f402f84eefc218e01f3e0fd5ef0d2cf80203e12614fde2ed050608201afee30e0bdc08daefed060208081f0b22fee5dc1eed02dee5e2061b03fc00e619f33debdfe6f4100de504fffa021bf804f7001334e02b11e707f4faf0f80a13de10fd0f1be9ce1aff3ff318fe26d517ee030acf0d28e703eedbc6bc2a10e6f1ed15e1f0f7f2f4010bd90808ec08f5ee001ce0f91b0f14e8e805e4ffddeeed140ac20e0a35f5fa33faf8102301f70c241bfaed11fe22ec06eee6020a2cec21ecdf0fe6f0edd90c0611160bfdf6e8011d0cef0ed720ff0ef0090be6fcdd01d8dee4030cfb2ef132ea0103d01cf90423e11d03e7eff601e81b0804dd08f5";




console.log("p2pkh");
console.log(
bitcoin.payments.p2pkh({
	pubkey: Buffer.from(pubkey,"hex")
}).address);


console.log("p2pwpkh");
console.log(
bitcoin.payments.p2wpkh({
	pubkey: Buffer.from(pubkey,"hex")
}).address);

console.log("p2sh");
console.log(
bitcoin.payments.p2sh({
	redeem: bitcoin.payments.p2wpkh({pubkey: Buffer.from(pubkey,"hex")})
}).address);


//console.log(key.length);
//const bytes = Buffer.from(privkey, 'hex')
//key=wif.encode(125, bytes, true)
//const address = bs58check.encode(bytes)
//console.log(key)

//exports.p2wpkh=p2wpkh;
//exports.p2pkh=p2pkh;
//exports.p2sh=p2sh;


const psbt = new bitcoin.Psbt();
psbt.setVersion(2); // These are defaults. This line is not needed.
psbt.setLocktime(0); // These are defaults. This line is not needed.

    psbt.addInput({
      // if hash is string, txid, if hash is Buffer, is reversed compared to txid
      hash: '4ad6708dad5e8e038a80f34a2f6374ff3340965673e0ed089785505d03a708aa',
      index: 0,
      sequence: 0xfeffffff, // These are defaults. This line is not needed.

      // non-segwit inputs now require passing the whole previous tx as Buffer
      nonWitnessUtxo: Buffer.from(
        '0200000001f9f34e95b9d5c8abcd20fc5bd4a825d1517be62f0f775e5f36da944d9' +
          '452e550000000006b483045022100c86e9a111afc90f64b4904bd609e9eaed80d48' +
          'ca17c162b1aca0a788ac3526f002207bb79b60d4fc6526329bf18a77135dc566020' +
          '9e761da46e1c2f1152ec013215801210211755115eabf846720f5cb18f248666fec' +
          '631e5e1e66009ce3710ceea5b1ad13ffffffff01' +
          // value in satoshis (Int64LE) = 0x015f90 = 90000
          '905f010000000000' +
          // scriptPubkey length
          '19' +
          // scriptPubkey
          '76a91446a76f8f06e497c401958f180a14c64a31e9c17288ac' +
          // locktime
          '00000000',
        'hex',
      ),

      // // If this input was segwit, instead of nonWitnessUtxo, you would add
      // // a witnessUtxo as follows. The scriptPubkey and the value only are needed.
      // witnessUtxo: {
      //   script: Buffer.from(
      //     '76a9148bbc95d2709c71607c60ee3f097c1217482f518d88ac',
      //     'hex',
      //   ),
      //   value: 90000,
      // },

      // Not featured here:
      //   redeemScript. A Buffer of the redeemScript for P2SH
      //   witnessScript. A Buffer of the witnessScript for P2WSH
    });

    psbt.addOutput({
      address: 'TAUZJRAiKjnAD5G4kVf4VUoymCxtHmASZs',
      value: 80000,
    });