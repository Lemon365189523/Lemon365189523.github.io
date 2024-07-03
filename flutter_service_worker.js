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
"index.html": "72bb81ef52732bfd64eefcd1a25f3c64",
"/": "72bb81ef52732bfd64eefcd1a25f3c64",
"main.dart.js": "f05eee05375f5a3987ee7b032c7be604",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0b23db2a222f23e2572ac43b4078fa61",
"assets/AssetManifest.json": "3d066153234253d20f6c565283f89d8a",
"assets/NOTICES": "2d0bab0bdd54be08e17bce63dc6a2613",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5609c73bc052573b2674d1bf93a984e8",
"assets/packages/main_module/assets/tab_selected_item_4.png": "fc7d44afdc3750fd9f0a8f6ef75c4f94",
"assets/packages/main_module/assets/tab_selected_item_1.png": "9c8b2abd514411da0ac105d7a89a08a0",
"assets/packages/main_module/assets/tab_selected_item_0.png": "d70cefbef3b163a71b072d76e19c1fe0",
"assets/packages/main_module/assets/tab_selected_item_2.png": "0a322e2fc23d014e1ecb99da65ac8c81",
"assets/packages/main_module/assets/tab_selected_item_3.png": "98ddb229c5983bc732d0ffacb471d56e",
"assets/packages/main_module/assets/tab_normal_item_0.png": "13fd07eee851ae4af4adc6a44b4936f3",
"assets/packages/main_module/assets/tab_normal_item_1.png": "fd7cb693151b4cd66fd3d03dea925a10",
"assets/packages/main_module/assets/tab_normal_item_3.png": "b47cf6810ff797a859b708ddeae6aecc",
"assets/packages/main_module/assets/tab_normal_item_2.png": "4f70c281922ecdd7187c9e394762f06d",
"assets/packages/main_module/assets/tab_normal_item_4.png": "25362d8fae7e723137ee2148c9dcc53a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/login_module/assets/images/ic_apple_login.png": "9756e422f26afe928593ff85950c516c",
"assets/packages/login_module/assets/images/ic_oauth_google.png": "a9cf30843c2ee42be833f457e1019771",
"assets/packages/login_module/assets/images/ic_mail.png": "f739c6ed7e3942861f394879f7093fd8",
"assets/packages/login_module/assets/images/ic_phone.png": "69f4d69c4df281a9bba2210e41c697ac",
"assets/packages/login_module/assets/images/ic_eye_off.png": "a8e41085c1c163d0d087afa234c987fc",
"assets/packages/login_module/assets/images/ic_eye_on.png": "26e534eeeb01199974160db1ad06ca90",
"assets/packages/login_module/assets/images/ic_oauth_facebook.png": "f97bc37c50fa5ae3c56008222b06ecbb",
"assets/packages/common_package/assets/images/empty_networkFailed.png": "ed90c4b05424619d97dd4390ed9ac537",
"assets/packages/common_package/assets/images/empty_box.png": "e8fae36c4c03464f4dd03fc990c0d677",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "90fcf8b08ccb490feb7267abf9acfe62",
"assets/fonts/MaterialIcons-Regular.otf": "ea32bc12125ab1c86872022a7c7ba7cc",
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
