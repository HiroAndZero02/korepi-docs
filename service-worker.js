if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let b={};const c=e=>a(e,r),f={module:{uri:r},exports:b,require:c};s[r]=Promise.all(d.map((e=>f[e]||c(e)))).then((e=>(i(...e),b)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-_V1NJ3V4.js",revision:"4cb5825823cc896b56302243b17e0324"},{url:"assets/404.html-FvRkhw-f.js",revision:"2d48eaface16e039b27dd30a27b6ea0e"},{url:"assets/app-hGVR-at-.js",revision:"0f5717bb0c3d9b384d78767f66425a23"},{url:"assets/baz.html-CAWuqdbn.js",revision:"ed580d0262947995ae7a3d41340df260"},{url:"assets/baz.html-LnsXD4S-.js",revision:"3251f5497c206813da18d687338fb0e8"},{url:"assets/baz.html-R1Phwjh8.js",revision:"9d1d4e1661d014b9f6f5487acf837057"},{url:"assets/baz.html-Vee7F_Ur.js",revision:"69fe896e89f23db624605ed7a6cc4afc"},{url:"assets/disable.html-9cd7ShLE.js",revision:"564a9ad0952cceb37442c9b3d9ca2501"},{url:"assets/disable.html-d0p7Qrmy.js",revision:"fd80f3329f422a1db9c6287d6e398c08"},{url:"assets/disable.html-n8LG5vBB.js",revision:"25cb2bdac367b5fac700fe9272ab3b85"},{url:"assets/disable.html-yHxXHLL4.js",revision:"ade77cfb94d963d2eb89e0a059c21a5f"},{url:"assets/docsearch-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/download.html-fpAxh3bw.js",revision:"3c3dd676030abd391432929825670238"},{url:"assets/download.html-q-KVz9Aw.js",revision:"250ad6edea54c1f134254b6917138114"},{url:"assets/encrypt.html-lDj3pslo.js",revision:"e5c9d0944600ef0b5f2c524ee744cf8e"},{url:"assets/encrypt.html-n8SmSK7F.js",revision:"5b3abdf5730b9917943e83dd675acd6e"},{url:"assets/encrypt.html-swe9ugeD.js",revision:"5ddfb4e84bab0601c015aa36c1725ee9"},{url:"assets/encrypt.html-swUEsqSd.js",revision:"9c5ce5c59aae1e589eba4562b4160e75"},{url:"assets/giscus-unEZQsJ0.js",revision:"34c4288ad53e7d9be8d0f44c9fdba069"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-QOy62Fup.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index.html-_hdQBQHY.js",revision:"e86f5f528d886eb1806883bc03f3f703"},{url:"assets/index.html--Jcgx9EN.js",revision:"24183562161bfe2c65b791ba96da42dc"},{url:"assets/index.html-2jT1gpCP.js",revision:"6ec232eaf7d46913b3ecb4af0763ea82"},{url:"assets/index.html-5pCNYNZu.js",revision:"e85974597a849b0200a1d2ccbaab6d51"},{url:"assets/index.html-8GNLK41m.js",revision:"4ff1f7a13ba4e9f885f41e14daae6c67"},{url:"assets/index.html-aa5P2fap.js",revision:"3e27ebd31e3fb930cd5ce73e79a3e834"},{url:"assets/index.html-b4XWErWk.js",revision:"1eee66cefb1588cc1165a0da471856cf"},{url:"assets/index.html-BcDfLSAp.js",revision:"a8b680c08c484ab588867a1adbe9a91e"},{url:"assets/index.html-CjgJudvG.js",revision:"2a014ad1cdc67f30157211e2983fa802"},{url:"assets/index.html-cXNDoO8d.js",revision:"061507acaf4543bc066d428ef109cc84"},{url:"assets/index.html-EczdMUmY.js",revision:"6199227bfb6050023d44f2fccaecf240"},{url:"assets/index.html-EEBZXL4y.js",revision:"495838676ac76f7f7f50abd8c07a41ba"},{url:"assets/index.html-GSjjQR7L.js",revision:"281a2e7caa0154b86562508b2b0d684e"},{url:"assets/index.html-I_oweZfp.js",revision:"8f9db3ff39f4196d7ef26d941714830a"},{url:"assets/index.html-oRUVL25V.js",revision:"b39c39b6124d76818f075f9541d51d2e"},{url:"assets/index.html-p7a5xX6y.js",revision:"9b5a58aa9cfd3fb674afa00051dade6d"},{url:"assets/index.html-pfE0IzNj.js",revision:"c42c76b2d07992a153d805d6f860f5c1"},{url:"assets/index.html-Rw3uHlzK.js",revision:"9571110551a4120f0858b9edf9e12ba8"},{url:"assets/index.html-tVIme0Uc.js",revision:"27002840ea0aadfbdd1a61ebd786d05f"},{url:"assets/index.html-UuFiAOfM.js",revision:"de8de7dab77f3d8beb7480ed2831da3a"},{url:"assets/index.html-ZQuuAxX2.js",revision:"895ef6d43afeeb8a74adcbca1790f93f"},{url:"assets/index.html-zv-LIQIj.js",revision:"436127ac5fd2c18bbad6f3ddcb195b5c"},{url:"assets/logo-vXLA1BkH.js",revision:"23c5f0a8d75246777bc24c61c37ec052"},{url:"assets/markdown.html-HXuZMZDN.js",revision:"7968890e470b9bed7ec6a1cf35d90d9c"},{url:"assets/markdown.html-InuGfv-H.js",revision:"cc59d330c6bc5712df0d20d34a60d329"},{url:"assets/markdown.html-LaEEkWsL.js",revision:"997037a8f14400c6706158d21da3781e"},{url:"assets/markdown.html-RPRVlybx.js",revision:"afd19cc2e394aa691432492e1d3e4f66"},{url:"assets/page.html-AfjssKZt.js",revision:"0fd4e64c029568ff974f06e0740c6f19"},{url:"assets/page.html-cLVJC0xj.js",revision:"3ba57658bf2d349e7e047e8fb832769b"},{url:"assets/page.html-gqMEek_x.js",revision:"77aef36f204a9a23db08e2cbb5d85b3b"},{url:"assets/page.html-uWm8ea1h.js",revision:"f545ac2000613c1150031c23d5a53b63"},{url:"assets/photoswipe.esm-mC0Qcr12.js",revision:"3a72d9823ffa5943f03c5e884d0f66d8"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/ray.html--lB3wAMY.js",revision:"b13c52e664095be15e6640e3f1573f85"},{url:"assets/ray.html-1g0ktbul.js",revision:"21961bebb2f44d119b657cdaba2972a4"},{url:"assets/ray.html-df4f32FJ.js",revision:"d7957ff7bb0235aff0b4719c6e46a2b0"},{url:"assets/ray.html-eBKkLOIa.js",revision:"578c6c667c8eb1630828c96843c48127"},{url:"assets/slides.html-F-gzLLuA.js",revision:"34567d074001d59b5f674f779512c2d0"},{url:"assets/slides.html-SBwSWLMU.js",revision:"47a8789b075ffc89f36b7610e8f5fa87"},{url:"assets/slides.html-sYFsQZic.js",revision:"ab91172b787fd76eb145ec3b4bc89d43"},{url:"assets/slides.html-t5Ci7uPY.js",revision:"6a3cfb0c0df37249cfa15d2872b62467"},{url:"assets/style-ilEsjYMc.css",revision:"75c2cd3feed6c7adf1b8eed2ab3d46cd"},{url:"assets/style-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"logo2.svg",revision:"3141faf109fb1807d3fc2c025181d088"},{url:"404.html",revision:"b959b7122653612958d2587607478f62"},{url:"en/demo/disable.html",revision:"a87775278f88f453d87e2ae494098ee2"},{url:"en/demo/encrypt.html",revision:"ee8d2fca5f9f417d5f9731e5a49ec621"},{url:"en/demo/index.html",revision:"935aef83fead28efe3232a13a5340d4d"},{url:"en/demo/markdown.html",revision:"bdfd38be3a02b2f862c6a2622f78500a"},{url:"en/demo/page.html",revision:"506f4a55ece7eefda3b3e6030d63fc2c"},{url:"en/guide/bar/baz.html",revision:"eb472cd68db3c09f0a72c1b92f75996a"},{url:"en/guide/bar/index.html",revision:"054158167a844e84011b0197cead4b79"},{url:"en/guide/foo/index.html",revision:"f6e5272363d13562fba02360ae9be859"},{url:"en/guide/foo/ray.html",revision:"0c9b40edee1e0ea75db6a97ee24a2b92"},{url:"en/guide/index.html",revision:"442b4681da8d300244c67b3606b559d4"},{url:"en/index.html",revision:"5f15e3ddf6274d1133fb172da96b5752"},{url:"en/slides.html",revision:"08d1dd1d4487ab1e4ca2b91a2b95dc45"},{url:"index.html",revision:"f9bee88892e96dbeceb474129db91b3c"},{url:"zh/demo/disable.html",revision:"9e3e72156ed6d174ab866eaf7decfba6"},{url:"zh/demo/download.html",revision:"9aadc700f592ea283228eb1d47ebfbae"},{url:"zh/demo/encrypt.html",revision:"f4964fe2430ddb384b1bbf54df60d250"},{url:"zh/demo/index.html",revision:"042542a5acc5df9fcefa3d61b6ab5daa"},{url:"zh/demo/markdown.html",revision:"7ea32eda92a6d812f02b699807a85ad7"},{url:"zh/demo/page.html",revision:"aec064dd0cff807a811761e19a22f9ec"},{url:"zh/guide/bar/baz.html",revision:"00cde4bfc9b1f053e75e70940ec51aee"},{url:"zh/guide/bar/index.html",revision:"f44551311f7ee329937d22d0bd33f61a"},{url:"zh/guide/foo/index.html",revision:"38e2639e520e5b20342e36b3d945d633"},{url:"zh/guide/foo/ray.html",revision:"ce0379137135ff9afb7e960fe6bc410a"},{url:"zh/guide/index.html",revision:"d15c698744d3b9b430a74742a9255f32"},{url:"zh/index.html",revision:"f21f5a7962e5d96ef45ef98d0bab9537"},{url:"zh/slides.html",revision:"a55f64aca27b948ecac601fe8a2f87a1"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"korepi.png",revision:"36977c6af17471338477971462b79073"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map