'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "78dd1891b8c2024f899b6c9415f91462",
"splash/img/light-2x.png": "e88cd69facab42512b81b125e36abe24",
"splash/img/dark-4x.png": "46775ad798c8081b6896d5df3394878a",
"splash/img/light-3x.png": "9906b4f521924f79622416b752e5b2f6",
"splash/img/dark-3x.png": "9906b4f521924f79622416b752e5b2f6",
"splash/img/light-4x.png": "46775ad798c8081b6896d5df3394878a",
"splash/img/dark-2x.png": "e88cd69facab42512b81b125e36abe24",
"splash/img/dark-1x.png": "5c0bbe7987ee5f0117c67803ca472910",
"splash/img/light-1x.png": "5c0bbe7987ee5f0117c67803ca472910",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "3e8699dd65a865ff991ec5b47a93643d",
"index.html": "db0a00efbe58c2e5b187252e57a1cd1b",
"/": "db0a00efbe58c2e5b187252e57a1cd1b",
"main.dart.js": "af8c58c93789c6ce71759fb4b91eb0f8",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0b23db2a222f23e2572ac43b4078fa61",
"assets/AssetManifest.json": "dcbf7a160021efdee36db5e8d48a4ecc",
"assets/NOTICES": "d5e7ff24818b68f1b28f38e501ce671e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "e5ff183cb29a8623b34a07fb7843c817",
"assets/packages/main_module/assets/merchants_text_icon.png": "ef33ecb31dbac747532e43566c9bd9bd",
"assets/packages/main_module/assets/tab_selected_item_4.png": "8d34f7e94871cfe122607611b6960304",
"assets/packages/main_module/assets/merchants_bg_icon.png": "6dfa924c240117d1ef2f59947a408388",
"assets/packages/main_module/assets/merchants_title_icon.png": "4260341e52789a8c6add5fcb3caf1cad",
"assets/packages/main_module/assets/tab_selected_item_1.png": "5a7468fbe17462ebcc2cbfa190016a36",
"assets/packages/main_module/assets/tab_selected_item_0.png": "dfff4ad353d56d740fe725c4575d3121",
"assets/packages/main_module/assets/tab_selected_item_2.png": "74d8779ea2da98f51e4138ee0342d381",
"assets/packages/main_module/assets/tab_selected_item_3.png": "74440fc65aa099bd3b53683d374ec8fa",
"assets/packages/main_module/assets/information_row_bg.png": "772ecf8b0e4b6d4f0d25f025be6a074e",
"assets/packages/main_module/assets/tab_normal_item_0.png": "c5031db88ffa6979502fd5caa401ae68",
"assets/packages/main_module/assets/tab_normal_item_1.png": "7d6ef7efaf0fc2a007ecc71056bb95b6",
"assets/packages/main_module/assets/tab_normal_item_3.png": "d285252fc6784393415d457fb53fcb24",
"assets/packages/main_module/assets/tab_normal_item_2.png": "50bccaa37cec08f564a9c6486c7a978d",
"assets/packages/main_module/assets/tab_normal_item_4.png": "d6e31c2e4f9bd6cb516b2cd4a7eb5b25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/home_module/assets/images/app_bar_logo.png": "18583b2d368961a424d4255bb07f1b22",
"assets/packages/account_module/assets/images/anxingou.png": "a9eb78b52288435ccf512165fa8dbd47",
"assets/packages/account_module/assets/images/collect_icon.png": "dfcd5da954dd755ecf7c0dd8dc648635",
"assets/packages/account_module/assets/images/shop_icon.png": "076ed68fb0f6dd47dda15d085a64bb5c",
"assets/packages/account_module/assets/images/yongjin_icon.png": "cf6dcc4ec402bff62091491d821afd6f",
"assets/packages/account_module/assets/images/delivered_icon.png": "de5f7e62ade4c39e254cbee92d31c43e",
"assets/packages/account_module/assets/images/behavior_bg.png": "68ac43a5b294bd716fbb4f43d0d3856a",
"assets/packages/account_module/assets/images/payment_icon.png": "d26a41fb1cb5cb9afb6d712c383a88b8",
"assets/packages/account_module/assets/images/completed_icon.png": "248c17d65a76ffbe41602822835aa851",
"assets/packages/account_module/assets/images/confirmed_icon.png": "ca03b97684c61f0d12ad64c81e72d683",
"assets/packages/account_module/assets/images/setting_icon.png": "db0a6c6e64e1658dd72232d3b0093bf1",
"assets/packages/account_module/assets/images/views_icon.png": "27bfd0cca2cedcc2dbac8863bbc0e84a",
"assets/packages/account_module/assets/images/receipt_icon.png": "2fc34bb1aeeacf56bab67beb8a7fb730",
"assets/packages/account_module/assets/images/demand_icon.png": "fb46c889e4185acb6025e83b833de327",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/login_module/assets/images/ic_mail.png": "f739c6ed7e3942861f394879f7093fd8",
"assets/packages/login_module/assets/images/ic_phone.png": "69f4d69c4df281a9bba2210e41c697ac",
"assets/packages/login_module/assets/images/ic_eye_off.png": "a8e41085c1c163d0d087afa234c987fc",
"assets/packages/login_module/assets/images/ic_eye_on.png": "26e534eeeb01199974160db1ad06ca90",
"assets/packages/login_module/assets/images/login_page_logo.png": "4b4552d6f2e5f668877c166ae20d863e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/common_package/assets/images/empty_networkFailed.png": "ed90c4b05424619d97dd4390ed9ac537",
"assets/packages/common_package/assets/images/empty_box.png": "e8fae36c4c03464f4dd03fc990c0d677",
"assets/packages/public_module/assets/images/log_avatar.png": "efa04c4bd74712e4d679e794b570d250",
"assets/packages/public_module/assets/images/logo_placeholder.png": "254964ea5e6898f86a3ac8f868859d2c",
"assets/packages/public_module/assets/images/camera.png": "f60886fc1fafd02993fe0392acb1352d",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "d8ffeae4028c3c26014126e05e851d16",
"assets/fonts/MaterialIcons-Regular.otf": "87c769739fbe25fb323f6ee0602c2686",
"assets/assets/list_config.json": "bb77935ba067f6db5e81076f2a2d10b0",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
