'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bfb317b1777d96c8793b861abeb47beb",
"assets/AssetManifest.bin.json": "53d48632de1efabacf36b6ffe3e4ed70",
"assets/AssetManifest.json": "a3434a622755452c6c3c6e0855d1e7e5",
"assets/assets/data/codex/an_mil.json": "dae6e072236cc4520646ded1a902aac5",
"assets/assets/data/codex/aujourdhui.json": "c2737bad444a03cd1964a27c2f786fea",
"assets/assets/data/codex/belle_epoque.json": "401c0e5d12b68bf91452d987a7233ad7",
"assets/assets/data/codex/carolingien.json": "49c76cd9337769ba3a8e3d24de197642",
"assets/assets/data/codex/lumieres.json": "1284fe56c0b9e4c85fcc31af5faf1b0f",
"assets/assets/data/codex/merovingien.json": "70d634e104b1412326abd7f5ddcfcd13",
"assets/assets/data/codex/xixe.json": "a0d492dffc66ccfe807a8866c33e40db",
"assets/assets/data/epochs/an_mil/dialogues.json": "e0a17c4d297034d2e0c33b2115ecc553",
"assets/assets/data/epochs/an_mil/epoch.json": "6d0395cca0c9c4de7acd06c90791e892",
"assets/assets/data/epochs/an_mil/landmarks.json": "6117c35e081f4ad333d2256aa6a74d26",
"assets/assets/data/epochs/an_mil/map.json": "bee711871b61ac49f8c007d7141274c4",
"assets/assets/data/epochs/an_mil/npcs.json": "5306e702a2877f9ac2d555a097186bea",
"assets/assets/data/epochs/aujourdhui/dialogues.json": "9f8bda67cf29ba71420208cd07502757",
"assets/assets/data/epochs/aujourdhui/epoch.json": "536465a6cc6a9e0ae481fa5bd42f15d0",
"assets/assets/data/epochs/aujourdhui/landmarks.json": "70f2d78edb692cea79506cec9e30c263",
"assets/assets/data/epochs/aujourdhui/map.json": "c7f12f652403005608f4f1ac2595371a",
"assets/assets/data/epochs/aujourdhui/npcs.json": "c68ee904e1a88e499709c2e30a1e2118",
"assets/assets/data/epochs/belle_epoque/dialogues.json": "67995951c20ec053d8ca6c36a57c48b7",
"assets/assets/data/epochs/belle_epoque/epoch.json": "dae972f879e0fb6e8f5f8960a1707820",
"assets/assets/data/epochs/belle_epoque/landmarks.json": "fb89bbdc278c0dac5696bd701b4b63e9",
"assets/assets/data/epochs/belle_epoque/map.json": "2047f4a520dc191ef41f46a854901414",
"assets/assets/data/epochs/belle_epoque/npcs.json": "e60cca1d097e79c185dd2c4d46f15400",
"assets/assets/data/epochs/carolingien/dialogues.json": "92f5df548f62e1c20444b6a11840f01b",
"assets/assets/data/epochs/carolingien/epoch.json": "8b20455dbfdfda7179e2c9a038465841",
"assets/assets/data/epochs/carolingien/landmarks.json": "7ab9b3f1a95295b1c4e9c673f1c473cd",
"assets/assets/data/epochs/carolingien/map.json": "9ac2f2ea9d089f4f3c09173502cbda28",
"assets/assets/data/epochs/carolingien/npcs.json": "a3ab57b8c14d4174b34a0831e6b13c1b",
"assets/assets/data/epochs/lumieres/dialogues.json": "b7aa843b3a1d48ade30665ad451d4332",
"assets/assets/data/epochs/lumieres/epoch.json": "9a969d4e4f93eeb5dd6136c25278fdfd",
"assets/assets/data/epochs/lumieres/landmarks.json": "00483e7feaa525e98826fd6b05566026",
"assets/assets/data/epochs/lumieres/map.json": "8588928a6a31f4ca86e49c03d44fe55c",
"assets/assets/data/epochs/lumieres/npcs.json": "aa313572fc283ace4c1d5bca6224a932",
"assets/assets/data/epochs/merovingien/dialogues.json": "b9c736eabfaa36753e6b5b53f079e046",
"assets/assets/data/epochs/merovingien/epoch.json": "961081511413faaec022af6ead374110",
"assets/assets/data/epochs/merovingien/landmarks.json": "3391d0f46ccbbf881c8a0767b29a35fe",
"assets/assets/data/epochs/merovingien/map.json": "e4bf85f968a59c8a3e9e2ec8d4608145",
"assets/assets/data/epochs/merovingien/npcs.json": "68e680d82e0ee574e85e2c509c4c9e52",
"assets/assets/data/epochs/xixe/dialogues.json": "12946229fa1ef507d0d13e89aa5b4fc1",
"assets/assets/data/epochs/xixe/epoch.json": "53528049a136c23712ff9d8473a3b2dd",
"assets/assets/data/epochs/xixe/landmarks.json": "9ce49eb1fdc3f3da42e3fe651a9b8b96",
"assets/assets/data/epochs/xixe/map.json": "9b2b88d4e492d160b9233d5ffe3cbf41",
"assets/assets/data/epochs/xixe/npcs.json": "698f1bbe2d6427c0b6bc2cec2b957b16",
"assets/assets/data/epochs.json": "6b31889ce4a35a077e3e58d955e6f7be",
"assets/assets/data/heritage/photos.json": "f99006b9f4398b97de5eca37d4999f92",
"assets/assets/data/heritage/tours_heritage.json": "38673f0bdf61a481e0ba4e373ab6ea51",
"assets/assets/data/models/caesarodunum_150.json": "8fcf35a9bb2f553d6d8b4478c3bfcd75",
"assets/assets/data/models/castrum_385.json": "72a76a6f40d7ce508c6698b7eb916a15",
"assets/assets/data/models/saint_gatien_1785.json": "c83ca25188948528282906a6ad5fcbc8",
"assets/assets/data/models/saint_martin_1785.json": "eae14f03ab9bcc8ef544e0ea789f88d7",
"assets/assets/data/sat/tours_sat.json": "4db98f85dccd3d3697b3e667fefd48db",
"assets/assets/data/sources.json": "b140f8cdd4e43f15b98c0a14973ea08d",
"assets/assets/images/heritage/PA00097557.jpg": "67f2fa74dab49b7105639fe5db69b079",
"assets/assets/images/heritage/PA00097558.jpg": "747347cc5454e2731d32ab20b9a4573a",
"assets/assets/images/heritage/PA00097758.jpg": "151d629b474508e25f6c8115bb4d97d4",
"assets/assets/images/heritage/PA00097759.jpg": "6c6d19ca710f0dc77afbf3a0de97a39f",
"assets/assets/images/heritage/PA00097760.jpg": "3cb2a915e5d1793742b556747bf893c2",
"assets/assets/images/heritage/PA00097787.jpg": "a224ef7f5dec070ca76a3d42e49ac6f4",
"assets/assets/images/heritage/PA00097790.jpg": "0938a72853eabef9e509afd4310ed880",
"assets/assets/images/heritage/PA00097793.jpg": "5fc45658c28f30ac3dabca57b85a17d5",
"assets/assets/images/heritage/PA00097905.jpg": "ab1544e92f3bd78df65f81ad67f0db12",
"assets/assets/images/heritage/PA00097942.jpg": "541e0f611fd2efcdfaed562ff76ef0e6",
"assets/assets/images/heritage/PA00097944.jpg": "9b024803a59874423ff911f1cc949b8e",
"assets/assets/images/heritage/PA00098042.jpg": "f2b156813573cf95194b12700c8f8d9b",
"assets/assets/images/heritage/PA00098043.jpg": "f2b156813573cf95194b12700c8f8d9b",
"assets/assets/images/heritage/PA00098044.jpg": "af40e3676ae61c0f8b5b6b896b96e3ef",
"assets/assets/images/heritage/PA00098045.jpg": "9812d3bb9f754f9eb3325877af1a7562",
"assets/assets/images/heritage/PA00098046.jpg": "cdad022e0ab504b8c7aaff0e613e70d5",
"assets/assets/images/heritage/PA00098047.jpg": "624bd7ac38b4800d992160e9c6dabcc2",
"assets/assets/images/heritage/PA00098058.jpg": "f938286b35d522adbbb4cc86b358e170",
"assets/assets/images/heritage/PA00098059.jpg": "413869ac29ad22ad869760c6df6a7392",
"assets/assets/images/heritage/PA00098060.jpg": "4b2674c37713d0c8036ce2844c5cde44",
"assets/assets/images/heritage/PA00098069.jpg": "79a85cd3eb6bb1a6cd7a9576f59f0c4a",
"assets/assets/images/heritage/PA00098070.jpg": "4425ea8a282eda57cce1547f3c25be98",
"assets/assets/images/heritage/PA00098101.jpg": "94ea387f4b29e10f2564884d453a0fe7",
"assets/assets/images/heritage/PA00098148.jpg": "2f5784d8843893e82b9b199b57e79d16",
"assets/assets/images/heritage/PA00098149.jpg": "be023d9d7771e57f477bd457e4966bf5",
"assets/assets/images/heritage/PA00098150.jpg": "5e7545d6cff0fc11c5f37914ec447339",
"assets/assets/images/heritage/PA00098152.jpg": "0b6dd39dea822a85c4441cfbd4fa7072",
"assets/assets/images/heritage/PA00098153.jpg": "53933b85b729e9d5024ee28e256ee91d",
"assets/assets/images/heritage/PA00098154.jpg": "db6c84aa2becd1f4ebc6afb56459742c",
"assets/assets/images/heritage/PA00098155.jpg": "5789e78ee51654cc07d12f15ff8978b9",
"assets/assets/images/heritage/PA00098156.jpg": "3e5a5b337a1f9df6ee07e9580afbd5df",
"assets/assets/images/heritage/PA00098157.jpg": "1b871a15a409ac3a8ab8103e1b39c95e",
"assets/assets/images/heritage/PA00098158.jpg": "8780c292aad68e7ef596a842523ff450",
"assets/assets/images/heritage/PA00098159.jpg": "c307b184fb4fc37d730bf9d6ffab79c0",
"assets/assets/images/heritage/PA00098161.jpg": "89f1d3b6708811035f1b352804b048f4",
"assets/assets/images/heritage/PA00098162.jpg": "909b84498f04e40123676fa142b547e7",
"assets/assets/images/heritage/PA00098163.jpg": "84090888bc875d02c13a9c8e7ce6df75",
"assets/assets/images/heritage/PA00098164.jpg": "93ead5b602a10dc8d707a1a30bdc5458",
"assets/assets/images/heritage/PA00098165.jpg": "2fa41ffbb512171eb2aa184342db8bab",
"assets/assets/images/heritage/PA00098166.jpg": "122390e1cb41a08ee5d16ec790798af7",
"assets/assets/images/heritage/PA00098167.jpg": "c2ff2578ccf01c42bf86dac24278c996",
"assets/assets/images/heritage/PA00098169.jpg": "6240f160d996ba09a3691c853fe854cb",
"assets/assets/images/heritage/PA00098170.jpg": "9d96efc129321831557160c965134472",
"assets/assets/images/heritage/PA00098171.jpg": "99926c11adcfdacc62ec1db40659dfd8",
"assets/assets/images/heritage/PA00098172.jpg": "b24f19b56aa1796da1b6e4ce912d04c3",
"assets/assets/images/heritage/PA00098173.jpg": "8ef71be9e6f269748d8fccc41da60bed",
"assets/assets/images/heritage/PA00098174.jpg": "507b9a82429ec1ba4ec2459c7de3017c",
"assets/assets/images/heritage/PA00098175.jpg": "865daa3d1759e27dd984d95b5a299762",
"assets/assets/images/heritage/PA00098176.jpg": "01448919ea7b34b631cb947960b2e7b0",
"assets/assets/images/heritage/PA00098177.jpg": "c97ff6e0febfaa7237b1f7e17b9bc763",
"assets/assets/images/heritage/PA00098178.jpg": "ccc6bacdda7530e68e1ceb3a3a93a85b",
"assets/assets/images/heritage/PA00098179.jpg": "2e855133f4273701f8b29a5459389887",
"assets/assets/images/heritage/PA00098180.jpg": "b759f2b118992f2eec88bf18f4c1a94c",
"assets/assets/images/heritage/PA00098181.jpg": "1dae124b2884cfd36dd68a3231ad2f0b",
"assets/assets/images/heritage/PA00098182.jpg": "d30624ebf2574f013edf2c26fe608254",
"assets/assets/images/heritage/PA00098183.jpg": "24e986a06a334f5501b362fd299df9ea",
"assets/assets/images/heritage/PA00098184.jpg": "8a8292600909dd6523b79b23c8c258fe",
"assets/assets/images/heritage/PA00098185.jpg": "af1320c85e0e53ec147e281e1dd46c03",
"assets/assets/images/heritage/PA00098187.jpg": "11dae45ed912fcc578f97a8e0dbf2a7e",
"assets/assets/images/heritage/PA00098189.jpg": "a493d393ed82b7529fb8c2c3a1364f68",
"assets/assets/images/heritage/PA00098190.jpg": "9d2d2a6079e707a14c8a988b40041610",
"assets/assets/images/heritage/PA00098191.jpg": "a3bd4f582b0cc8d6d7adf4b2c915a66a",
"assets/assets/images/heritage/PA00098192.jpg": "7354dcfbc591cd859be18d357aae206d",
"assets/assets/images/heritage/PA00098194.jpg": "cbe9225cd5ca3593800f603ad5bdd8ef",
"assets/assets/images/heritage/PA00098195.jpg": "2dc8fd0a85f6ce22d440d164df33ad9e",
"assets/assets/images/heritage/PA00098197.jpg": "a44688a31f750db7195878130d0e2b7d",
"assets/assets/images/heritage/PA00098198.jpg": "41bfbc8ecba723a8a754793cf72235d5",
"assets/assets/images/heritage/PA00098199.jpg": "f471e0d6a82792b73e7cc885afbd96f9",
"assets/assets/images/heritage/PA00098200.jpg": "5b38ff2fbfd276f563808b6ee8184431",
"assets/assets/images/heritage/PA00098202.jpg": "19da45a28e72bdffb866772c86d5ffb4",
"assets/assets/images/heritage/PA00098203.jpg": "410db06594f1e901fd682b4500823d19",
"assets/assets/images/heritage/PA00098204.jpg": "e7f4ad4988bc6d8ede7b174232328033",
"assets/assets/images/heritage/PA00098205.jpg": "f59d04e189740f06e84c2692d039fa3e",
"assets/assets/images/heritage/PA00098206.jpg": "1ea05d893ee82cc284cd0821ea0d8749",
"assets/assets/images/heritage/PA00098207.jpg": "1a2b8c6d443c0d1a3b0725b7d1b80d35",
"assets/assets/images/heritage/PA00098128.jpg": "8075c1aa073d9f29db3588004b90776a",
"assets/assets/images/heritage/PA00098147.jpg": "33dcb0b92b70f97c74feeaac0b246d83",
"assets/assets/images/heritage/PA00098168.jpg": "35ade01122db580b34c6c3b84173b5f2",
"assets/assets/images/heritage/PA00098186.jpg": "0906691501688268e61dcad47bd30bd3",
"assets/assets/images/heritage/PA00098208.jpg": "fa8a14aacdfff5a646112659020b5934",
"assets/assets/images/heritage/PA00098228.jpg": "06e724eb7a133af2c74b92065852873c",
"assets/assets/images/heritage/PA00098252.jpg": "19cc42e0b8f5327937268d57aae1b595",
"assets/assets/images/heritage/PA00098316.jpg": "5f86d58f4ad4be53dfd1ae9951be5efa",
"assets/assets/images/heritage/PA00098210.jpg": "77ff4f5b89e0ef1065d6500771a99bb1",
"assets/assets/images/heritage/PA00098211.jpg": "89ec4ab17329ce13c31332429288b05a",
"assets/assets/images/heritage/PA00098212.jpg": "f53048c319d910a197f704771dedd82d",
"assets/assets/images/heritage/PA00098214.jpg": "b4224f310ff724b334a2d28c4466c8b8",
"assets/assets/images/heritage/PA00098215.jpg": "1cfe3f78e4b63a85efd066dd78d5cfb1",
"assets/assets/images/heritage/PA00098216.jpg": "c9391dff959d3b284dece6f0e234a728",
"assets/assets/images/heritage/PA00098217.jpg": "3ab17bda3b0a0975234e4e6265354f0f",
"assets/assets/images/heritage/PA00098218.jpg": "9e9474c0194d4dd627b379e657d5b2c2",
"assets/assets/images/heritage/PA00098219.jpg": "0e575c5735910fb5a4948721e349741c",
"assets/assets/images/heritage/PA00098220.jpg": "7b06e923ca192fe62deeb70ffc10a823",
"assets/assets/images/heritage/PA00098221.jpg": "9ad295d71512dcadb12aed79185346d2",
"assets/assets/images/heritage/PA00098222.jpg": "b6987459143f2746acda2ee1728b2df5",
"assets/assets/images/heritage/PA00098223.jpg": "07e52362ab2ee10ffdd50b00fb31a2d4",
"assets/assets/images/heritage/PA00098224.jpg": "0142d6cc696c3f1a37aba0896c73fdf0",
"assets/assets/images/heritage/PA00098225.jpg": "42f27bb16166a05cfdc794e4a038f980",
"assets/assets/images/heritage/PA00098226.jpg": "c6e060be604b5cb953b2ff7b1b988975",
"assets/assets/images/heritage/PA00098227.jpg": "dbb8ab17bc5cefdaad202824162a0775",
"assets/assets/images/heritage/PA00098229.jpg": "06e724eb7a133af2c74b92065852873c",
"assets/assets/images/heritage/PA00098231.jpg": "89cca6da4b3fe9d7ba5d182ec3dfcc3f",
"assets/assets/images/heritage/PA00098232.jpg": "042b30d54aad61dfdacf0ba8f4f4bf8c",
"assets/assets/images/heritage/PA00098233.jpg": "66865db84cb97ffc38c34a34348730a4",
"assets/assets/images/heritage/PA00098234.jpg": "8fdaad59f642f11b2199378a99db2003",
"assets/assets/images/heritage/PA00098235.jpg": "3ef9351448ed1a6973e33c42e08447b6",
"assets/assets/images/heritage/PA00098236.jpg": "2624812172e651939641e1e043f4be60",
"assets/assets/images/heritage/PA00098237.jpg": "698114d49ad6dc61586fae509982236f",
"assets/assets/images/heritage/PA00098238.jpg": "1157a984b05adabf7236da1a0a808dd0",
"assets/assets/images/heritage/PA00098239.jpg": "dcbaa6d527831096c226109a35d1d5d5",
"assets/assets/images/heritage/PA00098240.jpg": "7cb4c81c44f52f37d1adf84e16179bc9",
"assets/assets/images/heritage/PA00098241.jpg": "5842f434cfcf2300ba309fc2481b4ec5",
"assets/assets/images/heritage/PA00098242.jpg": "9d0b2c8fe4b825488ec82fd485906eaa",
"assets/assets/images/heritage/PA00098244.jpg": "c9391dff959d3b284dece6f0e234a728",
"assets/assets/images/heritage/PA00098245.jpg": "c575ca155201872eaf7e53377ed162f5",
"assets/assets/images/heritage/PA00098249.jpg": "74b088efc7e85ce47d748b76111545be",
"assets/assets/images/heritage/PA00098251.jpg": "089e83d4dde7508912a161f0d4023c94",
"assets/assets/images/heritage/PA00098253.jpg": "cc6ddff471dc99831a69a2f92ba853c8",
"assets/assets/images/heritage/PA00098254.jpg": "d734b9e06e36d90bf72bade36d950577",
"assets/assets/images/heritage/PA00098255.jpg": "0301e2e75ffc337ed762154a1e684253",
"assets/assets/images/heritage/PA00098256.jpg": "2b1f34605ad6ec07f7d654a7ff2e558c",
"assets/assets/images/heritage/PA00098257.jpg": "20558adb51ccc9cd35a1fc45beed0fbc",
"assets/assets/images/heritage/PA00098258.jpg": "7863de8673c067a539bd4d878abe8048",
"assets/assets/images/heritage/PA00098259.jpg": "27585bc41e5961de9b6e01e39c5e128d",
"assets/assets/images/heritage/PA00098260.jpg": "bb94d40febd67e2a126ad5440734c4d5",
"assets/assets/images/heritage/PA00098261.jpg": "c71a0001778298ea900428bf45e06341",
"assets/assets/images/heritage/PA00098262.jpg": "309cf2019ea0c07cda4dd61b419a9152",
"assets/assets/images/heritage/PA00098263.jpg": "2bf33c3c59e88cd2726d53b924581855",
"assets/assets/images/heritage/PA00098264.jpg": "c542a15203b624297d8ff4a24616e240",
"assets/assets/images/heritage/PA00098265.jpg": "6106445a1bdbe7d5d3a71a58e5512e3f",
"assets/assets/images/heritage/PA00098266.jpg": "ed85515e2fb2b73d8730f7068e3594c0",
"assets/assets/images/heritage/PA00098267.jpg": "485071f98a99a92b5139b73705f61996",
"assets/assets/images/heritage/PA00098289.jpg": "5389369df4a9f5d56868c63daa3b7708",
"assets/assets/images/heritage/PA00098306.jpg": "8beea2c9ef9dcb31aa3309e5a1084109",
"assets/assets/images/heritage/PA00098130.jpg": "d349924609b7f7083b2b85456d6df2e7",
"assets/assets/images/heritage/PA00098131.jpg": "3d5303b7aff1f507f81dd82fafa9ab4a",
"assets/assets/images/heritage/PA00098132.jpg": "460bc270aa724e11e7a75f13afba931a",
"assets/assets/images/heritage/PA00098133.jpg": "4b2acc2a35ca796212d03b581141e3f5",
"assets/assets/images/heritage/PA00098134.jpg": "f1b239d2fa9268f03098d7f39494e5fa",
"assets/assets/images/heritage/PA00098135.jpg": "c1db335b4981f57984f5d42ab5f532ef",
"assets/assets/images/heritage/PA00098136.jpg": "a3f7562e6d9c7898e136d9e200de3f31",
"assets/assets/images/heritage/PA00098137.jpg": "1099f5734feb2a2779be2ef58be65c80",
"assets/assets/images/heritage/PA00098138.jpg": "af958fc3174845e00da6426267b1097b",
"assets/assets/images/heritage/PA00098139.jpg": "b8a2dc002c68951d3e180c2d7c588d30",
"assets/assets/images/heritage/PA00098140.jpg": "b90c4516f6357f09cc6a9561081d6d07",
"assets/assets/images/heritage/PA00098141.jpg": "754339609f74fb164a8969842cf3a72d",
"assets/assets/images/heritage/PA00098142.jpg": "889f16cd9e81005a483caa2560d6cba2",
"assets/assets/images/heritage/PA00098143.jpg": "9b537825a98d54596ff6bdb19a80a100",
"assets/assets/images/heritage/PA00098144.jpg": "48ed5e3b1f576900ce31f3ebff2be093",
"assets/assets/images/heritage/PA00098145.jpg": "230a7375d584e51fe03a4990e06038f1",
"assets/assets/images/heritage/PA00098146.jpg": "56d5f11b1870282f7681654a7a76c9fe",
"assets/assets/images/heritage/PA00125367.jpg": "430e5edafe075164ad25523de2cc9ba6",
"assets/assets/images/heritage/PA00132563.jpg": "c604d0223c082492fb221fae9b57ed61",
"assets/assets/images/heritage/PA00132565.jpg": "a405db8b87fd7aaea808349b38286cf4",
"assets/assets/images/heritage/PA00132567.jpg": "85a61eea35acd45331cd502891cbb2b5",
"assets/assets/images/heritage/PA00135296.jpg": "0a683fe62d8047d49eecfa9861cb3fcd",
"assets/assets/images/heritage/PA37000002.jpg": "66d9ffdd27008844e928c01f218dea17",
"assets/assets/images/heritage/PA37000006.jpg": "7e29177bbeb720dc0ea5e096e23d5e48",
"assets/assets/images/heritage/PA37000009.jpg": "9e397ac35e31f7af94eb7195610835cf",
"assets/assets/images/heritage/PA37000015.jpg": "c08a085d0f04c8fa1559543fb4a74b9c",
"assets/assets/images/heritage/PA37000016.jpg": "28be961387bf9a33e2796d7cd911d998",
"assets/assets/images/heritage/PA37000019.jpg": "81fa63a7796f44a061e94e5be1689fb3",
"assets/assets/images/heritage/PA37000020.jpg": "5dd657231827d663ca1e0bb82808de7b",
"assets/assets/images/heritage/PA37000033.jpg": "27e0503ede4d0d3c38e5d8bd7b1ce3ce",
"assets/assets/images/heritage/PA37000051.jpg": "e2b41edce7385e16c60667017cd4e7d8",
"assets/assets/images/heritage/PA37000052.jpg": "b2bd83321c28a570e76d3d6fc7d8b2c1",
"assets/assets/images/heritage/Q105071912.jpg": "ddd1faa472ca479ff4c3513efd1c0f47",
"assets/assets/images/heritage/Q141544605.jpg": "ea7ca930e481853e60fc456771f26701",
"assets/assets/images/heritage/Q24297347.jpg": "d40bf3f16dbfcd1e3f6c9154f4aafb46",
"assets/assets/images/heritage/Q75098399.jpg": "787ddc561d80844425238e91f24c20df",
"assets/assets/images/heritage/Q83722389.jpg": "3ba5c87cbd41a892afd1e34ad20d8caf",
"assets/assets/models/caesarodunum_150.glb": "d1258c065e0f73f5c6992dfb2e37d8cf",
"assets/assets/models/castrum_385.glb": "ea671696add4b9c7f7bc4edad50af95e",
"assets/assets/models/saint_gatien_1785.glb": "c74cb36606aa81056fd8711481b48ea2",
"assets/assets/models/saint_martin_1785.glb": "56ece1f009f40d9eb0d15bbe61b81eba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4da96d04787876ccfa564c9009765899",
"assets/NOTICES": "4d83b83ef83c612a9ef2df568e8dce9f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "dd677b435b16f44e4ca08a9f354bac24",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "29232106460173ca53b724520754f54f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1e6a741c0cb8e3d0075912e3f174a154",
"/": "1e6a741c0cb8e3d0075912e3f174a154",
"main.dart.js": "f980d8d85a7ca69bec554d88f0fbe66b",
"manifest.json": "ba8bba2e418cfb1dc3a9c06b0b55d942",
"version.json": "d6013b9344738e03e438a2d4e66cd1b9",
"vr/index.html": "acaa811ad2fad99c9f6174edf5253b9b",
"vr/vr.js": "ffd1cbff04ff660c67c960f4a7eb65b6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
