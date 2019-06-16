/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "img/facebook.svg",
    "revision": "a52c24702f300adface1d349a9c09ab7"
  },
  {
    "url": "img/fav-192.jpg",
    "revision": "68bda0d618034402899191fed34cf894"
  },
  {
    "url": "img/fav.jpg",
    "revision": "e52cf40f0908902005a8b6c154f4618d"
  },
  {
    "url": "img/github.svg",
    "revision": "617870e422d4b75087cdcf9ff298032e"
  },
  {
    "url": "img/icon-152-152.png",
    "revision": "bab55c3b151afb6776eb7ee52375c282"
  },
  {
    "url": "img/icon-167-167.png",
    "revision": "8566ddf5554a8b5e41f1e2919a6054ad"
  },
  {
    "url": "img/icon-180-180.png",
    "revision": "a6eba2d2903286e1d26c394b721a093e"
  },
  {
    "url": "img/icon-192-192.png",
    "revision": "c77e6ffed7c27a8068c88da3b0f26288"
  },
  {
    "url": "img/icon-512-512.png",
    "revision": "f39a46af24be9c9550893ac13078f380"
  },
  {
    "url": "img/linkedin.svg",
    "revision": "619231ff8ec7a6b4d39aede30fa9890e"
  },
  {
    "url": "img/logo_apple.svg",
    "revision": "769502f0506c8f0dc2b6b38990c1d353"
  },
  {
    "url": "img/profile-fellyph.jpg",
    "revision": "5b87c2b4a48cab3381b339f11833aa75"
  },
  {
    "url": "img/profile.svg",
    "revision": "fa2b53fc751bb4b316090ae1dce30b63"
  },
  {
    "url": "img/pwa_icon.svg",
    "revision": "b772df6f8345dd82d1d2a6107853a440"
  },
  {
    "url": "img/share_icon.svg",
    "revision": "a3841fd8869cfb0f5d7cb621ff8c3e3a"
  },
  {
    "url": "img/slideshare.svg",
    "revision": "cf2481acfee7e6b1f614a813803d5149"
  },
  {
    "url": "img/twitter.svg",
    "revision": "be06689853aec102607f5e54e6fd2dfa"
  },
  {
    "url": "img/wordpress.svg",
    "revision": "d960ce447fab10a358b4d3ba62daa1a4"
  },
  {
    "url": "index.html",
    "revision": "cc4e41b1e6eba5dc373b7aad7a8c1486"
  },
  {
    "url": "main.css",
    "revision": "fecd84e0a09e3faca2378a6c5cb298b4"
  },
  {
    "url": "main.js",
    "revision": "2a2ee6785a9764dc378e827e6a3c9667"
  },
  {
    "url": "manifest.json",
    "revision": "928ee2f82971d0bb1de9d656af783bae"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
