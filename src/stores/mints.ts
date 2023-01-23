import { browser } from '$app/environment';
import type { Mint } from 'src/model/mint';

import { writable } from 'svelte/store';

 
const initialMint: Array<Mint> = [{
isAdded: false,
keys:{
  keys: {"1":"034207a0ebadfbf9a0f52cb7ad62e4c496a95ca347c1a0cbd3ac02db0f3231a6bc","2":"023aeb26e8f513b5aed265dad930d45a57ee86e4043d64144111b0fe71ae414582","4":"0270385d7936bda888b69f00955ee511c5847e664353af212cc43236fcdb6a8400","8":"029d0433b099be2711b6f8d169aab7b445b4d30c717149ecaf499972882673070f","16":"030f8b958a65e8dacf2e2a6fc966d0c78fc3aec776716e69842b4d70d084581505","32":"030453a76430217362cedfb130c53c8f7a781986113465764f8bd6c2fcdda30338","64":"0288485acb2ae54564a84b6778c1abddf2dc40592bbd7c2f0312a6dc1ccbcdbab3","128":"028f673f6d19c01ece767d0fc817061226c325a922d7ce7aabeb266712fce6c515","256":"02f3628dd5d5f6a6519203b31b145a4f42c460f7f2ead2b42079ce42c9a880aa47","512":"0226c42bad41f24f200fdcbf69ae045bba918a6a21e1e59fea3ca10236b006d4f6","1024":"039a67f936211ac0bc4569840e0904d8e1b8183d1fc4a99b501c8955d8c402b73d","2048":"0223fb3c1d4b34755a71156577a4b9886724fa0b296ac9b747f79be1e07c013fb5","4096":"036ab2f597768bbd2a9d72bdc04437aaede50afa5c2afef82b3c8f4ef9dcb07231","8192":"030abda104fc93d0661855345e467135364556626a4363e0620a38c6d9ead01770","16384":"037aa1c6aff4382f02557c97431d6c3a0bce18cf1fed9a213607d48ef108ddc9f4","32768":"03fc7f81a20c378ef7191aa3ca9d119dc79ead689c26b8b2debed2974896391a64","65536":"02327e70c3e874b15100f4e2da9b69e6b5bd211ec212d4aeb93953969806742c79","131072":"02d12075b4485d3c1f1497f0a816d8a02ed8bfc2b2b882ae148583845d1fc0f435","262144":"03089412a2a4ec62a33b8019f75512fdd483712ef3f9320c2b2a21c4806aa2b0dd","524288":"03e5250d7de5821c40e96df3480961bb97ff7138ce96353dc4740a86186967ae1b","1048576":"021a335ce32e2dd95aa01480efcf8787e6186fa1005b906197c12469ab9a08ab8e","2097152":"0229baa45591dc4b8bae3d0dd0f435db64b2141810bb0d85129b3bba50398f36b6","4194304":"02262a9f99bd437267417e371a0436017dbdb2feed5d1450958484d506f51e08c3","8388608":"02301ee916dd45a039bf76f0ceb0e12b9c5e5aee99cb2d757bca8eb68e6bb8eb8d","16777216":"03a4a223507ffd3a42471262239854b2050747fce5b92071c4e918d9510651d1da","33554432":"02413787c2708b28e619c2aef3f87c44be3743362d1a4dc41361b87416a4d1d7e4","67108864":"02b555bb5bbfec376c76b5a574a211cbabf52929a4f3cba78cf1ab650c1d46ad03","134217728":"033a74890c628165d0ab9283f09eb0d91628637a788721b262ea83c0c27dd251b3","268435456":"0275d6223c81daaf73169c4e31e259e5c91e593f2ca4a9cc0199b5a44cacf2914e","536870912":"034706ea95b4a468fd1b70af2aaba9c6e2c61c1e6ecb2a6e9be4d322111d99b99f","1073741824":"02256d30ea2c3930b9461dc6285fee6cc631162a02a43c47f8002877c8759e4c3a","2147483648":"02b1aa87df700d6e4623aaf57048d68be5b697957b316c74bab1903ace2b7986c6","4294967296":"0317b60765671130dffd02c66dac578cfeaa72d6d8cf855a072b63eeb30604af58","8589934592":"03c75f9e025f72b09f940bcc3dc2d650fb59530f935d01e318820202949517c9de","17179869184":"03859fe047dd845dcd61db87004636fcc20ad47a164a549702341ff8067ee15711","34359738368":"02608f1e43add0e08832c12f4b9eb6fe129a108006097bfe28e364cda43bbdb3ab","68719476736":"03a0004a9915a701566ae99a22dd938887d32a7be85f6ca3b5612f3667ae4fa06a","137438953472":"02514be05a6c1aa0726edcfa9fe73c910af844595dcbecc05390a06b7e6f76c9c5","274877906944":"02cced717c07b5b8b0d4fda82c9c5fce8a58248cafa95a7b028bdf10bde36cbe1b","549755813888":"030af0606ffca69a24cb82432f2df0b080b7b72f81094d80f055167086a2e40d4a","1099511627776":"0203fcf456ba2b8162038994418016e80183a3135b1b5b066c4078a79d8293166c","2199023255552":"0309d025eee5f39f418c2ccced43fc75be081e7212ad75ddbcab7027d98d641f30","4398046511104":"02246ea432132293d2efa8c0a938177ebb42888099e1b383d0bb2d944b4f80d2c6","8796093022208":"0292bb17248b080293ac4dcc5a8a6cfa31f026628efce6a44a24a29704bd81ff97","17592186044416":"0324526a124eb52a301c4217d5e3a8c46f0403c64ecf6124082dab2466b47b7e04","35184372088832":"020027b12b7f51a61a52aebcc761aace0d9fa31422269a31929c2d317f70acff7f","70368744177664":"02fe1a35248b210492ddb6e0406fd4a89f51840b277367f1db49d928e85822db34","140737488355328":"03c88f7498344767f4fb29979b1a4e080cb62b28d8b4ffebb4b25a968438493b97","281474976710656":"02b68429857e256f8c0071801dc537d083a0e4409ee4eb4622dc0fde36504091aa","562949953421312":"0227ccbd5c511e3cee970ee15dbf04e37ad4cdebd6ab864165c861ec8e04e6c08b","1125899906842624":"033dc226181494e025c25f702b2efd391a9076be666053ff77ad6b25431c209bc4","2251799813685248":"03d96b94e5754c02a25106714a8986eda0d763bf5887d0806a0efa3109d784052a","4503599627370496":"0381df5a3fe82c8b36177ca4dd7f616843c540264d3071856aae3af278a6c09420","9007199254740992":"03c4d969a8523d33005ce270c06fc3782251673251603b0035467e8e4fb3985e82","18014398509481984":"0313188d8379b2817349b2aaf33e909dda2125fea8446a2a82e47f56fc28e5c8e0","36028797018963968":"038538942083ef3c134e8fbed53b1525b69a0f21d2585d486df9c28ee499ef3773","72057594037927936":"02635e50953c5514010fb0b1771945cf1b0cd8beb0cec45fd57174c2ccca8870e9","144115188075855872":"03fb39677466b13d4076843e9262de5e896c0ca00cb8fd731c92fb9e1750ee4908","288230376151711744":"033e68e3115a2112fc0684c828952ebf1d5c14cdb1e58b2a4bb17c535c866bfa13","576460752303423488":"02b1571ad0c36df7b1f3cd584b0185c9d1f67f8b87cb6299e355eb748a5379f176","1152921504606846976":"034e4dc4070008da263dc31e1d13a02b96749e5305d7b6cbec4c3622a283d46564","2305843009213693952":"0381de130eb34fa6a4b57606ffe9b0d9255fd3b5f7cc8316a81c83b38fb39a736d","4611686018427387904":"021a6333a94f425d545dd99103a71845a501c47fb273b36d289ed7b9c415ca606b","9223372036854775808":"02587b825766de6c785df896bd274852231529dbf38c2865c278f111deedaf3dad"},
},
keysets:["0NI3TUAs1Sfy"],
mintURL: "https://legend.lnbits.com/cashu/api/v1/4gr9Xcmz3XEkUNwiBiQGoC"
}]


const initialValueSting: string = browser ? window.localStorage.getItem('mints') ?? JSON.stringify(initialMint): JSON.stringify(initialMint)

const initialValue : Array<Mint> = JSON.parse(initialValueSting)

 

const mints  = writable<Array<Mint>>(initialValue);

 

mints.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('mints', JSON.stringify(value));
  }
});

 

export {mints};