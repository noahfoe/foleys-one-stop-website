'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1b0bad84d9b1b5996d15411486eecd92",
".git/config": "64e81e345f3e1392ea118e1d56d6e659",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "06f687e3f8defe8a64badff04ff2ed3f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8dd2e66a4a8312922fdb2f0332d2f43d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "62e0c79da2d8c95650989df68e68c557",
".git/logs/refs/heads/main": "6c4b00bd37bba64a9e04be9f02d304a8",
".git/logs/refs/remotes/origin/main": "9c270ec9e9cca04b3e93b1f84aa70c8c",
".git/objects/00/afa58c7c2a009e695fc31710358be335cd613d": "fe5208cdf9b22459618d36464e49a53c",
".git/objects/03/d857f8c5602d8b868a5dde774ada724d8e609c": "56599789881e44b25772ef5110894d53",
".git/objects/06/496fd28e09c9efa5af83d9d55cda426f49d31f": "1d2a2ef46b4f4292a5f5f86ce803b896",
".git/objects/06/d3b6675f7fd1fcf5dd4227fe647a69bbc2f932": "f7ce4edaa1b02c5106e46dfdfc807358",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/72fe97106a6c1055bab5166f790847b2530d9f": "a20489c3af3cc2048f8e73e7b22c8000",
".git/objects/0a/e50ca7c8c27c02c006e7acefe25809be1fbcc6": "33fa29aee17ae4e3cb031e9aac041b1a",
".git/objects/0f/7446b816ead17c737ee7c04b86e5e07adeec65": "b0b2d215a1508d541a524e10628c2009",
".git/objects/0f/f2a5d39d47ca0c5e0b66d77e15590653279d6f": "2396b60a37306b299d73ee8a59234fbc",
".git/objects/11/5766602718eda63a479c41a042f0129ec15c0c": "3e2e2152c86ede1422c4739d57307f3b",
".git/objects/12/3fa9ab30d5d4d173b422e4779d159f530ba528": "553e2469fa5a6e5898d153155913082e",
".git/objects/12/6946ef63ba75fe0a5f79b9d308b34b9c55092d": "b1031d965fb89738c6aee2a1fe28862a",
".git/objects/16/07067ae8fb363fe96dac6ab5ef108e2d00c312": "0038ee0b6fcf62bd35837d95304c136c",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/01ec140444d00309e88d00cd254afe0fb50193": "353fe6161ef8dde7046e707fd4ca79e6",
".git/objects/1b/d8577b38aa9e1408d2f175c720c1de8c8bde46": "739b2cd7fdca2815d4c9f40061f803b0",
".git/objects/1e/0b22f6c8bf2000aeb8e312d26a5d2e21ae7e6d": "380401703a403a8d9120ac2640540e89",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/1efbd09ae114de2dc3dd1e425ec652691de759": "480b5c82b42b27d56725bc3fda53460a",
".git/objects/22/0a75d0e6d8fd0fcabb20d3ddd2adee10f46fae": "8095dbfee2251efc69bf5c8e4577713f",
".git/objects/22/6593199912cc81ec5f40ae36a3990544160dd7": "bd9ba96e46bb40bc98716ee0804a3523",
".git/objects/23/374aa37c4a077b462a9b4646d24a21f05b53d1": "d124c7963a764d125eb3a3b79668d072",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/e0fb63b22c8537cc3ec358e65be9ed2e38cbf8": "6d3463884206d8c632fc0eaaade38fbd",
".git/objects/29/a59b1d112ccdaa4ab3174a45d4cf2fc17cc7eb": "d4f5acade9aa73613b382218e71c9a1c",
".git/objects/29/c5b632918fa992e403eefcff3a49d4d7f57687": "3c80714001259e1e381121e7a984af5b",
".git/objects/2c/c145d5da1272c39f553f0242342d8dfa709288": "81830109ecc74cf37bff8a14c6c095ae",
".git/objects/2f/748b377c09e91c28d9f75fef12aca6022b8704": "92a1d8b0dac4623dddec02500a2e1652",
".git/objects/30/29d1991291b9289c49a185051f74c03a2d83c6": "7ead83ed9ec24b4c76a30b078744b43b",
".git/objects/39/7dbcf3e9cdcc26b63ca889698ada6f4ee0e72a": "ab050d810d28b69339a353429e219dab",
".git/objects/3a/68a44259179c6908a6c2c66e7624d3c9db2fd0": "36cd407a2419640a1c0d6f41cd99cfe5",
".git/objects/3a/72d4509dd7c379bb77e0dca570b67e4cdd8b51": "aa7955f15292bf7fcca3ee0fc99b3ebc",
".git/objects/3d/82a27a0f8bde9a1427f11e521b3ada98235ae9": "f3c9171502080541a62e5bd194b2b1d8",
".git/objects/3f/ab5d52cbbb7136e7650a638b3a44a1f3c8aa6d": "843242388b9f4347eea3955471f62967",
".git/objects/3f/b60f20bb3df77de791b4656a24843925ef72e8": "b00a72a46ececa44e9dd4149167c7dc8",
".git/objects/43/49e3c8047b874f441e671240c63e544ffcc90f": "387940b3593877afa189640173a023b5",
".git/objects/43/63e98b8b27c74a35ef426fac7b7073d794c2c2": "d7029b5625df7baf64adfe6ed7199ead",
".git/objects/49/12a8e32c92beae1ec60a7fab0f8ccc7e9d0b60": "d10ef021452277dfae651082b685a8bd",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/2ab1437182f4b232f2960ce8811073f3a578d8": "d0a362d2b4c05733e42e7bb33c90992a",
".git/objects/4b/6fefd6c2ce1f044cd81b3aad3da90ddd6e1762": "310a15f1af20aa3c4ba709eb3d0ef1ff",
".git/objects/4d/f568641d773c2bcff1b399a4115675666d9d39": "db744fe6a78e78a51d0e84b42bb05e4d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/fabac9023888188b3282bbc121067887528910": "c3e5ea41dc8d527f7eeec1de76b62928",
".git/objects/5a/441c8f19d312da28ebb4ae53387428b1c598f0": "249d2af9d02afd001dfa48a046a3e120",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/895a73866a69033767a87f5d51575dad515d86": "6bee2a2edbcfb8d4f6cc9158b9a7128b",
".git/objects/68/8cb57b386a3355501f5b36138eaac091104bce": "cd75c5b6fed05f615d5dd5aa07863b5d",
".git/objects/6b/fec60a07a9b870e9be5d28394e32e2715c34f7": "753f8b2d70f077f97e9eaabd4b420bac",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/78/8a82332c1279af9aaccf8751db915798357f36": "8e8e9b851e9f86c2b15ed19ce5bd2a0e",
".git/objects/78/fdbb94dfbd4fc8397d57c772e9030c5057a92a": "8e7f6a5641cbedc43fb8063a1b30b57d",
".git/objects/7b/8942cf4120432cfa4b75e731d91db1b4454053": "b6d11fd54fdc942d7f449e239ac7d03d",
".git/objects/7f/80444daf905604d169e626947b2a232fc622c1": "3cf2b78a9e0663eac7706de397b92a9d",
".git/objects/7f/c3bc84385d8ed79cd37bc8690a5e3decc68bd6": "b42ab6caa5401b0cb962a3a2775c9cd8",
".git/objects/80/9bc14b87ef31c9b06d23e245e02ee3e2bf1198": "6cbf0128cef8755efa9450702ec6ad0f",
".git/objects/88/5ff34257bb597eb459791215987671cebaa564": "e9970d37b3a3d80638717405d71782e1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f12006a858a2e1ed8d3e0773d5914f8a163ab3": "90f61fe0280c16a6a7cce9617efda973",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/5c8782a27f566985eb6406e370ca49bd20fcea": "f1f4cce3f79578c0e28fde7d094a0ffc",
".git/objects/97/d3d66f83a2b4eab691eb5eb8d779c81adafc18": "fcd76532019c65f143351f4b7a6dbe6d",
".git/objects/9d/715879c51c97cbc6244d3055683fbc1c1ed483": "c3fe2696243248ba3ddb82b6ef381ca5",
".git/objects/a1/33d5007184d154dca14ff4f08a7018ad0fba1b": "312536455e47495729488ca65aba545c",
".git/objects/a4/08974ad37500e139ce475bfe3e8a480a517d93": "1cfc3551ceadca3df06fc09f2269d1b6",
".git/objects/a4/597c6f405474119f5ecc6af32a8dc64e47d175": "09d2d5742a2ab55d3f36bee03b37f3e2",
".git/objects/a5/998e97e43c5dab8ab3ee8bbe06dbaccf98a57f": "e6e59a6c83cb096261e56b4f0671f932",
".git/objects/a6/898ba2cee0608ab0491ff9fbec5c961136e8c7": "bd5df436657dcae8bd057e6f360835cd",
".git/objects/a7/3b0761b110943bda682a5c6fb941800f404b8d": "4269453c49f48bee32a862db37fdd55d",
".git/objects/a7/7aeaff8b849efd4a555e4a07d7b1eec5e88eea": "aa4a192e1dabe52f7a1b0e9c96ffbd62",
".git/objects/a8/f0a4e39b87846d007aea1a35ddbb6d47deced6": "1ccab4b279750a42c909f5426c598d23",
".git/objects/a9/b9eee6794527d292a348121d03074dd7c5b74c": "f65b1786c842097222465739a1bd4267",
".git/objects/ac/1c0d794b51c7d7e96ae592b397a4b31bda6a71": "189c2e548e4811e8f0b4732992e790ea",
".git/objects/ac/5d4e4666ae98a67eb3829907c0ec9a0f412e82": "8a3582e1ce32df1ab880c0f742926110",
".git/objects/ad/694696d9bc8c64c51b74fb32e9941d543b6d9f": "bbc78c616171e87f37925223102b2277",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/b88c379d045c16ec73b7a23a54b78c694ef110": "95e0a556f1fbb4465b09fb20329be63d",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/063613c9d18f29c82efc67046174769fb3c777": "59035d2e5e845fde1617d3a734fa931b",
".git/objects/b6/613c19d99e68d27bc59bd48a9ae2a391bd87dc": "979afef4bf99f260c6537e81e8270b48",
".git/objects/b8/c4cef5fea62d01493d0a7a6a3b8433309f6d99": "38e675d2d43a6102894175354b4db374",
".git/objects/bc/8ba0e31d1c9bbb3f75c4ee1c77d4070075f020": "1d198355c27c864033315ce143297cb4",
".git/objects/c1/3e82e7672523d1f0d10627308c8a0b534ae813": "78bfd8d0e768f677606771a30e90dd4e",
".git/objects/c2/2c73a58079a8d826b17c97db4a0d6b7310cad3": "cec0a4e93335b3e548dc1d46250012f0",
".git/objects/c2/69e364a657fac7a2b3311df3876dc3dc524a9c": "ddee3af58c1c56d9ec3408731d2859fa",
".git/objects/c5/21038da9e2f84c66230355e736826dba81dd8f": "a2a4c72a6521100e429a878598bb7e05",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/f78dafa01763871b5a9243fb8aafb9c0008e98": "5efbe80175b338374ca9577f6a492e7c",
".git/objects/c8/20b411303e3595766f5a7fbea6b8f3e1cc9354": "03ba37303d1e956818ce94590e55a63f",
".git/objects/c9/dbd09991d76753b58b7aa0726b74b401083cd4": "4ad65efd10d6ddafbde2e15b69e09ad1",
".git/objects/ca/69e5b6d083e16ce12147d58ed30402a9a6c133": "e88f4bf72e6f650e48d1b24eea76e067",
".git/objects/ca/85a193795db03a9d7b2ecff966a4aac5f46f20": "414063793eb1ff13abc0e7ee68cab9b4",
".git/objects/d3/32f1e06a6052591b5b793ece3d08dac3d8d0e6": "8d4762654fc96b1a7b1970c8771644a0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/5f9715eb882aae4e361790b06f99d1795bbed4": "8a92baf0aee2ec00a1b6d4f6bdcea30e",
".git/objects/d8/2a9bff4c7a81d885be4ead57da6e6b136d7d35": "b153b709c26a9ad8040b25994770e88d",
".git/objects/d9/6cd6efd981d9fddebd002dd8c3b3c027c180ee": "b8d691d9eb2b2c8e896f60578bbb5c16",
".git/objects/da/c6abaddae20ba80976217ee96dd418df775ed9": "fc4499bdcfecde4d1780c1faed6c95da",
".git/objects/de/3c99d9c12f4258d60a9181c05d9a89618c25f9": "c1e0833b984b33c933820b3a9abe1bad",
".git/objects/de/d71593e4cbd21d86ef630aa6ec10cb9c8ecfc1": "5758f95905c73761ab648a1f99291923",
".git/objects/e1/3f74a1fbd61e1edcfa9b91917d7fe5445c3ec6": "8ec7a7e62140cdb34a49a86bf5f309dc",
".git/objects/e3/5c80cf788db60db3b354597b13daeadb37f2c7": "ead74fd6364572d550de217de4fd5acc",
".git/objects/e4/55ab669e64b8584df2266a6eb58a30800a06d1": "15406f50617b6208b8273719ec76c95f",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/1b711b430dc85b267d267680d3a004649dee6a": "d86c3a0a848134a31dc1958d7b8199d6",
".git/objects/e9/48b747e70757c14c1753b7f51e7d884a1af760": "326f66bd14bb183136249ef2780817ab",
".git/objects/e9/d2ba57ecff41d6453cd0cd57f32deb78c910a1": "6ca52efd7f41872de5480aadbdbf7fb3",
".git/objects/ee/2dca5dcecd60249c3d231a39c11b72b45a2d32": "6b10d3bb705946a18e85ff210025f8aa",
".git/objects/ef/9164ac833e34a153ae7c25448071e14a5c0f11": "8b719480bbc7ec163b64da28b891a118",
".git/objects/f1/c5bf146b469d4dea0b4e3b08cd08d5ed2c0967": "928b66a93a764c4f73bb66df7b146f3a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/079d0949086bebd08a89aacd632388992c00da": "75ed3a4770d65ef633c3fc731df85115",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/f9/3162f81fdc310f89fb755788e1b078c079a684": "df439f31aac5216c6b4124e18334000d",
".git/objects/f9/dde8770a5c5cb5371fcf9c5d7db6f45b5ccbb3": "f689be1cea388f0ba0547318272a07e6",
".git/objects/fa/be1864a9e006193f40a817e8eeb9763d538090": "1f6657472665d9bd4f0fddd64ca698a5",
".git/objects/fb/6ae502afa7510eabaec9388db366046a4e9409": "34860959ea1f61fda8bc8947fc779fa1",
".git/objects/ff/96d310beb2ac53c3003d81e33e8e4e9e62d2dc": "d1fcae630f96e34213e858631f976776",
".git/objects/ff/c14720d3d5857956218eb0309b15af61a06c1c": "5433541a09f40c637c31e69f0135cce2",
".git/ORIG_HEAD": "ff378a4f3b8e017b81a3c56753fc1f45",
".git/refs/heads/main": "f6f27e9c49f6b0c753f8d36e5ca264df",
".git/refs/remotes/origin/main": "f6f27e9c49f6b0c753f8d36e5ca264df",
"assets/AssetManifest.bin": "fcd696e48cd68751da39ba2f584c1da8",
"assets/AssetManifest.bin.json": "4fe9ff52b2ab96a38f5c9ac6b9426365",
"assets/AssetManifest.json": "ebd72353288e0a806c713ff5edcaf9ba",
"assets/assets/jpgs/chainsaws.jpg": "598c09287d6f4ec748941f2c68a281f1",
"assets/assets/jpgs/closed_trailer.jpg": "016dfd79e3a3ac8327c7310d3f36e504",
"assets/assets/jpgs/gaga_ball.jpg": "17ea210cf881e72133b5920b02834866",
"assets/assets/jpgs/golf_cart.jpg": "a650be621c4c675682aa9e68c2587571",
"assets/assets/jpgs/inflatables_slides.jpg": "75dba8d60f6743b175110b51bc71925d",
"assets/assets/jpgs/manlift.JPG": "92b67305d5e77ac75a695531a9ba3a1c",
"assets/assets/jpgs/mower.jpg": "e86b8e287ebcc8288db9aab16cd0703f",
"assets/assets/jpgs/mower_2.jpg": "9534ae0b9f5ba953628d9142ecf50447",
"assets/assets/jpgs/mr-conex.jpg": "2b58821dd895a669bdcd2f58a3e03150",
"assets/assets/jpgs/open_trailers.JPG": "b2ba9aa52126f6aecc86dcd88718512e",
"assets/assets/jpgs/rent_shipping_container.jpg": "7725e912c08fc0636adea3411c053b83",
"assets/assets/jpgs/rims.JPG": "8b5f9b6de2809afc3477f5baf868d3e2",
"assets/assets/jpgs/selfie_booth.JPG": "ef92e9193264c362bccf1daaf29d2244",
"assets/assets/jpgs/selfie_booth_2.JPG": "f7566561b493f86f3db78a977a3b45e0",
"assets/assets/jpgs/selfie_booth_3.JPG": "1fb9992c7ba8e4bc3d0dffd573d2360a",
"assets/assets/jpgs/shipping_container.jpg": "0a99a6bfb20f9957524023c4a8f6aaf6",
"assets/assets/jpgs/snow_inflatable.jpg": "c7e29223028c69641d4c92d7d15f425e",
"assets/assets/jpgs/sports_inflatables.jpg": "f54b53444b6d6e395895d3344c441e0a",
"assets/assets/jpgs/strump_grinder_in_action.jpg": "80901403eb4d76ded222724fcecd81db",
"assets/assets/jpgs/stump_grinder.jpg": "73f2de1af1264908105ad58672294cad",
"assets/assets/jpgs/tent.jpg": "19cdd9c9367a10c1dbad5a398a229c3d",
"assets/assets/jpgs/tires.jpg": "9c8ad304502eb17ba61fe31cd4c435c6",
"assets/assets/jpgs/trencher.jpg": "de0e2a72ff6795ea5826199219d26270",
"assets/assets/jpgs/weedeater.jpg": "c207d003a013b0922e7b732653f9b589",
"assets/assets/jpgs/white_inflatable.jpg": "437536b27997140d41285fb03b8f0fe0",
"assets/assets/pngs/favicon_io.zip": "5bff254a417dc477ff6e3272b2b414e3",
"assets/assets/pngs/fr_inc_logo.png": "706346ee121cdb2cea382aae9cbcac17",
"assets/assets/pngs/one_stop_shop_logo.png": "793800c4c480c4854132fcc165dadec2",
"assets/assets/pngs/under_construction.png": "34ebbcca95c2a65a30f54a6fd76870d1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "310ca99965a2af2bc7ac53cbc84da724",
"assets/NOTICES": "089d52123f0bd65277330c3712612d64",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "521a10cb028d88d513c086904b89b56e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "635c967a2c9edb38c7dbebb07c634eaa",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "d5d1939728962a28f953c0cdbdabc717",
"favicon.ico": "1842e29a1e10a2324b3c672c7d0af789",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/apple-touch-icon.png": "c6cf1c901e24bd61459048a7fb8e6709",
"icons/Icon-192.png": "b82119d3344ba505d29eb40e4420e3fd",
"icons/Icon-512.png": "5e6ae741b917f11cdfac4368e87e8d0c",
"icons/Icon-maskable-192.png": "b82119d3344ba505d29eb40e4420e3fd",
"icons/Icon-maskable-512.png": "5e6ae741b917f11cdfac4368e87e8d0c",
"index.html": "f2cf74ad1a84785c88fb0f58b220ec6a",
"/": "f2cf74ad1a84785c88fb0f58b220ec6a",
"main.dart.js": "faa9fe7ec6c395e57c652c17ccd90a45",
"manifest.json": "1d7431f3cf087f3bcd37757ec461b14c",
"version.json": "4a5b373a9ab3a4344fe919b5f76b8fbd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
