if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const t=e=>a(e,r),n={module:{uri:r},exports:c,require:t};s[r]=Promise.all(i.map((e=>n[e]||t(e)))).then((e=>(d(...e),c)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-BSc0d3hW.js",revision:"25791021893a1b208b9436577083c183"},{url:"assets/404.html-f8mHPHhj.js",revision:"0b3381d259b82326e30bcff0b0d8881f"},{url:"assets/app-lSEH3mI_.js",revision:"e5520391b5f914a3c10df06fc17fe623"},{url:"assets/docsearch-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/donate.html-0MANkYif.js",revision:"0d068d421b713e1634a94572f401c431"},{url:"assets/donate.html-N7RmzARL.js",revision:"0fcf8d09ac99277464f29d155d32d03b"},{url:"assets/download.html-31Zh91ts.js",revision:"01c750c6cd3ea060ee1b8d80eba60301"},{url:"assets/download.html-Pmn20Snm.js",revision:"1e6d4640d390b787fd370f18e87fe3c4"},{url:"assets/giscus-unEZQsJ0.js",revision:"34c4288ad53e7d9be8d0f44c9fdba069"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/kit.svg",revision:"a3663a205654213e974cfc9ef73a68c0"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-QOy62Fup.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index.html-_4CljjXL.js",revision:"0b74f7971f6a98061b4e48cd6d3d71f1"},{url:"assets/index.html-_f7QTuvp.js",revision:"29f5f466301bbd1800566996acb508aa"},{url:"assets/index.html-0137JR_p.js",revision:"aba1cee1b45038cba228fffae6619189"},{url:"assets/index.html-1o6jSMNp.js",revision:"1c87a3a8a4bd16cf430f084a78d47137"},{url:"assets/index.html-2lFz3ZqS.js",revision:"1c87a3a8a4bd16cf430f084a78d47137"},{url:"assets/index.html-57PQONup.js",revision:"f3d4cf0cddc97cb9d645504697bca23d"},{url:"assets/index.html-5mLAZmPr.js",revision:"1c87a3a8a4bd16cf430f084a78d47137"},{url:"assets/index.html-9B5SAmS3.js",revision:"a2da6f465f0ec71f350945239004e13a"},{url:"assets/index.html-BiHlv06t.js",revision:"e8dc471034fcab3f8d9950c179434d88"},{url:"assets/index.html-chInCAgQ.js",revision:"dbc9e3f67041c8cbbd4324f459ba0fec"},{url:"assets/index.html-edPFubWl.js",revision:"757e2e6351037124a586af7287221b32"},{url:"assets/index.html-GvCpu7XO.js",revision:"6a3392d38c54dfbbe7e6fdeabd34b80b"},{url:"assets/index.html-juV07gKX.js",revision:"3f276bd154608bb24638a00663350641"},{url:"assets/index.html-khCCKU7e.js",revision:"1c87a3a8a4bd16cf430f084a78d47137"},{url:"assets/index.html-lVPYsFGp.js",revision:"de7d74bcaed3f391e91317f7c606c00d"},{url:"assets/index.html-MBqHpoWg.js",revision:"35f02bc9a7de9ba3a8b55ec256ee662b"},{url:"assets/index.html-mzKG2vHA.js",revision:"a9a4fef4ce17b068178d9708505d9b24"},{url:"assets/index.html-NAbIWViR.js",revision:"79e7aa648f179566fc3436337477e8e8"},{url:"assets/index.html-NIFmzNLp.js",revision:"cc6a86f6ddfb193f2fade362898f8c77"},{url:"assets/index.html-Pb_alxzX.js",revision:"9120833e3f0999e28c39fb640f82f66a"},{url:"assets/index.html-PSZ8XLpv.js",revision:"3899d3752795d1932fd42a30bdf6b370"},{url:"assets/index.html-pWlPm-tI.js",revision:"eec99ad9f559565c5d26ddb96f913224"},{url:"assets/index.html-rGjOdYTF.js",revision:"319692a5898ca6fec49bd4b04dec225b"},{url:"assets/index.html-rPh8Ndt7.js",revision:"1c87a3a8a4bd16cf430f084a78d47137"},{url:"assets/index.html-rvlIc8eA.js",revision:"e03b88314421b5928f102ec9f2cae732"},{url:"assets/index.html-SAJCl7H7.js",revision:"5a81836ad066b861396e0ac04ca243c4"},{url:"assets/index.html-sRh0X_qG.js",revision:"f3851e3c52501483c6653cc9a21facd1"},{url:"assets/index.html-TXesWT6F.js",revision:"1bc1523e0d2f328e8190bd9770f6f492"},{url:"assets/index.html-TyB8fVcV.js",revision:"0436c92ed4c85276826ce23f45cc4393"},{url:"assets/index.html-whonmX0F.js",revision:"a2da6f465f0ec71f350945239004e13a"},{url:"assets/index.html-YkV1267n.js",revision:"64d3cda7f56cb78115d0f597f42ed989"},{url:"assets/index.html-yzDcVIMX.js",revision:"e2a6a391cbdc954db1762a248054bc53"},{url:"assets/index.html-zgVVRJ9-.js",revision:"467ec47d98f2632be27ed6b204ba0d01"},{url:"assets/index.html-zjOp8-m1.js",revision:"b32c2c36a44d2569131b2862cd8d3161"},{url:"assets/join.html--NldC4WN.js",revision:"b403f340ce75f00d114ebf04a06baac0"},{url:"assets/join.html-2Xuxw0nH.js",revision:"f8306f296b85e55513be09132efe6309"},{url:"assets/join.html-6kgKpXud.js",revision:"e90f2bd6df554f343722912e36780e4e"},{url:"assets/join.html-7kh95tM9.js",revision:"b5ec3b3b04ffc6da7cb105acc77bf48b"},{url:"assets/join.html-a3B9XJLy.js",revision:"168707d93ccb729a6ab6beb4c18de918"},{url:"assets/join.html-dxbeMtWK.js",revision:"922a4135bcbea57ecb0efcb2f0c6f784"},{url:"assets/join.html-MsRxxcVp.js",revision:"4c4d93f7312e65510b54e8b2984169cb"},{url:"assets/join.html-r4NQUwNh.js",revision:"c4f4aea7cca7612c7488fa19692ab939"},{url:"assets/join.html-S-3MD6u3.js",revision:"e2adab20b426462b74c040f99fe677da"},{url:"assets/join.html-UU8zi_-v.js",revision:"65776d97da9be298db3e945a950d4028"},{url:"assets/page.html-2ZLdbuv9.js",revision:"f24da5734ce566aa330656ecc4cdee87"},{url:"assets/page.html-9SHCUkTo.js",revision:"a807e5d66808c76597bae5a983f24fb1"},{url:"assets/page.html-AYVfoL2A.js",revision:"eacda98f05a277325ec1793f141dc73f"},{url:"assets/page.html-bpo0z4p4.js",revision:"a680576a61085c15de371ba7782b6ed7"},{url:"assets/page.html-e92NV0gE.js",revision:"f24da5734ce566aa330656ecc4cdee87"},{url:"assets/page.html-fUF3scq8.js",revision:"97177b94b597b09aa6b1d500dce8bbc7"},{url:"assets/page.html-l47jZVLG.js",revision:"d14f10fcde1f3c60428239117cc3760a"},{url:"assets/page.html-nhLQR3Gl.js",revision:"9779d00a31ea23a856907f237d4adf67"},{url:"assets/page.html-PjPsOUqH.js",revision:"b78ef875c642520e30ed348900d29df0"},{url:"assets/page.html-tqZoUeEX.js",revision:"d33e35d88cc0c5d8dd3075f0c7ba520f"},{url:"assets/page.html-xrI8_FTv.js",revision:"0a18003cd7cbf5804a800f561bb9768f"},{url:"assets/page.html-YP_Duo8d.js",revision:"994b24d0f6bc9d284fc0c3ef9488e1af"},{url:"assets/photoswipe.esm-mC0Qcr12.js",revision:"3a72d9823ffa5943f03c5e884d0f66d8"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/sign-in.html-aiq5-dha.js",revision:"4ca1a6b66806a10bd4c4812fb6f41b60"},{url:"assets/sign-in.html-Aqc6dRyt.js",revision:"56c169e27197ffd9194ac8bb0c140a7c"},{url:"assets/sign-in.html-d5-ddqc7.js",revision:"26a794ecfeb177e8ae739aaf58345ce4"},{url:"assets/sign-in.html-fG9TABWZ.js",revision:"26b1fdbbaf9e53feabf5b7718b6efae6"},{url:"assets/sign-in.html-jhxmQdwa.js",revision:"a26de7f2e1ae209237f16d02cfced850"},{url:"assets/sign-in.html-MHWQTvmG.js",revision:"21f41146807871837137e7f3aef5fe46"},{url:"assets/sign-in.html-odytyaY4.js",revision:"f437d307c1777521d8a628914c6ef1c9"},{url:"assets/sign-in.html-piKBCV-f.js",revision:"42f2f998beac9560d67bc69bafa3aac5"},{url:"assets/sign-in.html-RCa-XkGU.js",revision:"6518a98850c7f39ad8ca4bd0b73ac1a5"},{url:"assets/sign-in.html-WoPCbZgx.js",revision:"54592f4c38b08cd58aee6730d5d82bf2"},{url:"assets/sponsor.html-atfIYoXW.js",revision:"3bf51f8d51dc92500364d21a74ee9a87"},{url:"assets/sponsor.html-FtrMGrH7.js",revision:"9c96dd06ef27c339467009f6afc5ff7e"},{url:"assets/sponsor.html-IkuWzVFI.js",revision:"f85a53dd48a4f5f7b8cabceab9a0fd9b"},{url:"assets/sponsor.html-ld_dzPCw.js",revision:"781baada9d7b2c0a2deffc4ba4b810e9"},{url:"assets/sponsor.html-nMYZ5S2j.js",revision:"2cca4557043a9dd1650cd7200542bcc5"},{url:"assets/sponsor.html-SEWnCIbb.js",revision:"033ecc4b2b41f1d9d5607e6a30307af3"},{url:"assets/sponsor.html-WLA4Y-lo.js",revision:"ed768fb5dd8ba85d22d3c1e8298db68a"},{url:"assets/sponsor.html-wtVpzuXN.js",revision:"1be8b5635b6043dbe26f7fddd97d2125"},{url:"assets/style-jZJT948h.css",revision:"b47ab0ea8950cdac3be891db2e417c13"},{url:"assets/style-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/verify.html-DumV39qN.js",revision:"bb41c0387b53a73bc1e4a51c4edddb6d"},{url:"assets/verify.html-gamb9WpQ.js",revision:"0b9cc75106d40c148d889fb227ad8eb9"},{url:"assets/verify.html-Hlt8flsd.js",revision:"49f7d1867c0237add81e76a1f4adfc84"},{url:"assets/verify.html-irBeignO.js",revision:"a693b54d91ec9d89b469fce6556a4286"},{url:"assets/verify.html-K0HBleJe.js",revision:"666ed369c20cd8c01a2bb22d457031ea"},{url:"assets/verify.html-K8zYHHWs.js",revision:"b3ecd41959760a9f77db1fa87f8fa94c"},{url:"assets/verify.html-p1aLnn1E.js",revision:"e5f4dfba0139de26122589fdd6012d80"},{url:"assets/verify.html-PjBzu1an.js",revision:"8a0a19715964deb8f74c2db3729f8833"},{url:"assets/verify.html-TKpY00CF.js",revision:"4d958b50b8ec30e3348bd8c8776a4a3e"},{url:"assets/verify.html-VWeaMu4F.js",revision:"f34b9ba2b0a7a7916ca6b8bbdd505a3c"},{url:"logo.svg",revision:"910db88668e6e1cf75a5927b4ce217aa"},{url:"logo2.svg",revision:"12955c1ee6894e906370acafe76a8971"},{url:"404.html",revision:"72be2a7fff89b4880d702032c402b565"},{url:"en/guide/index.html",revision:"4335311b42d7e84a89c1fbe99c508f8e"},{url:"en/guide/page.html",revision:"69f6fd6dc14a70101e8a7ce8d0578ff7"},{url:"en/index.html",revision:"d8466df91c7c1db7ebc009ec207cb444"},{url:"en/start/index.html",revision:"b8259d58cf6ae0a834ed5ada7467c56e"},{url:"en/start/join.html",revision:"bf5eddf7049f969102d5e4111f7de0e2"},{url:"en/start/sign-in.html",revision:"a7d2d064c9270935da41fad127ba10c5"},{url:"en/start/sponsor.html",revision:"991a27a90cd3435c1efc3722efcedd90"},{url:"en/start/verify.html",revision:"ca6f92911fcd4c6d0f98fef1f44c91da"},{url:"es/guide/index.html",revision:"5a26ffa6999920df8a0b8d324404c95c"},{url:"es/guide/page.html",revision:"45d4a31446e297e06436f2d2b682d99f"},{url:"es/index.html",revision:"486f032ed1a08097c123692baca50186"},{url:"es/start/index.html",revision:"d08475a368bf09e7beb474c9d1606fd1"},{url:"es/start/join.html",revision:"67cf186e0ceddcd618da1882d97bd66c"},{url:"es/start/sign-in.html",revision:"6a311a69991be72190dc15b4d5842267"},{url:"es/start/sponsor.html",revision:"5adecf2b80d970645ac57590cd038a85"},{url:"es/start/verify.html",revision:"b8dc59727edf96ccefa5ba62153fcb24"},{url:"id/guide/index.html",revision:"ddb245513216eac714a266201efd8b0c"},{url:"id/guide/page.html",revision:"efd52e6f78d6f445eac267269a26fd5a"},{url:"id/index.html",revision:"1aea291ede4962276f7f857338490b9a"},{url:"id/start/index.html",revision:"b9432c6ad03a97f4c9ae81bbe8f1d611"},{url:"id/start/join.html",revision:"6c8441328f52282a6b838bc3f13bf682"},{url:"id/start/sign-in.html",revision:"7d6651b9a90dfd32ddc11c73d0b490cd"},{url:"id/start/sponsor.html",revision:"f4ac2be5dfc653e8308bf0fc329c5ef2"},{url:"id/start/verify.html",revision:"80fcb613083e82cf70ba2c66cbeb1369"},{url:"index.html",revision:"3ebd31a04ed89e48f6887b0de80325f6"},{url:"ru/guide/index.html",revision:"a16f4a806d56d8c76d01502fd468166c"},{url:"ru/guide/info/index.html",revision:"c82958ec86d4510279e20d1b2be424a0"},{url:"ru/guide/info/page.html",revision:"4dd01305e7168aabdf3ecd8d75db0928"},{url:"ru/guide/page.html",revision:"c68f3551255257d2b95b428917385958"},{url:"ru/index.html",revision:"51697c54b1de88a9e158b6d79999b5b0"},{url:"ru/start/download.html",revision:"1c5392e956c11f2f4cf34bbfb52d7911"},{url:"ru/start/index.html",revision:"56d408530d27076986938697b57f73d6"},{url:"ru/start/join.html",revision:"7fb6a8e3a7617c78f7356b2681a4adc6"},{url:"ru/start/sign-in.html",revision:"ab019a8d2a0381e7f5c2d1ee73414c0e"},{url:"ru/start/sponsor.html",revision:"8361c62e79bcc5d77c0bb960c2a7d941"},{url:"ru/start/verify.html",revision:"1aa85493010030c7db4282c7864ebb25"},{url:"zh/guide/index.html",revision:"57b7666aae5c0676b97e9729997c3e1d"},{url:"zh/guide/page.html",revision:"e89cb4a78e7b3bc3777e4a3f9fe263cf"},{url:"zh/index.html",revision:"b5df77812b0e1ba11e3c9e364ddc16b1"},{url:"zh/start/donate.html",revision:"5f680013dbcf917328534888196efb56"},{url:"zh/start/index.html",revision:"2df2b422c09ba794444e268ac19a12b9"},{url:"zh/start/join.html",revision:"2f41ae8fb918b7fc4b0e61f1da39de3a"},{url:"zh/start/sign-in.html",revision:"d617c07211b07188bba32ee6d65c7c89"},{url:"zh/start/verify.html",revision:"e1659e24c0787e0f9465c964d8306a41"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/image-1-FV6oGkZb.png",revision:"84c4107dc9f19a62a5b812c69b4ce6ac"},{url:"assets/image-2-KpoO4MGE.png",revision:"957882169bf28c8a379b0ede724ca749"},{url:"assets/image-Ib5u8se7.png",revision:"35e50a5a0652f82dd1eeed791ba9fa69"},{url:"korepi.png",revision:"36977c6af17471338477971462b79073"},{url:"logo.png",revision:"36977c6af17471338477971462b79073"},{url:"logo2.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
