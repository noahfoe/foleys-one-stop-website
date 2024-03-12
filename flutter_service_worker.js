'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "62d06acdcd2877693cf2dad7bf2e1d0d",
"assets/AssetManifest.bin.json": "2358d03904e2cad8375223ead2224a69",
"assets/AssetManifest.json": "acd2db4a4aaa1249423a81a4b2a6264f",
"assets/assets/jpgs/chainsaws.jpg": "598c09287d6f4ec748941f2c68a281f1",
"assets/assets/jpgs/closed_trailer.jpg": "016dfd79e3a3ac8327c7310d3f36e504",
"assets/assets/jpgs/gaga_ball.jpg": "17ea210cf881e72133b5920b02834866",
"assets/assets/jpgs/golf_cart.jpg": "a650be621c4c675682aa9e68c2587571",
"assets/assets/jpgs/inflatables_slides.jpg": "75dba8d60f6743b175110b51bc71925d",
"assets/assets/jpgs/manlift.JPG": "92b67305d5e77ac75a695531a9ba3a1c",
"assets/assets/jpgs/mower.jpg": "e86b8e287ebcc8288db9aab16cd0703f",
"assets/assets/jpgs/mower_2.jpg": "9534ae0b9f5ba953628d9142ecf50447",
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
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2a025bd5ce9f9b174ce56844eb9d7c29",
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
"favicon.ico": "1842e29a1e10a2324b3c672c7d0af789",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/apple-touch-icon.png": "c6cf1c901e24bd61459048a7fb8e6709",
"icons/Icon-192.png": "b82119d3344ba505d29eb40e4420e3fd",
"icons/Icon-512.png": "5e6ae741b917f11cdfac4368e87e8d0c",
"icons/Icon-maskable-192.png": "b82119d3344ba505d29eb40e4420e3fd",
"icons/Icon-maskable-512.png": "5e6ae741b917f11cdfac4368e87e8d0c",
"index.html": "02b5aafedfa659516a048307d68913d8",
"/": "02b5aafedfa659516a048307d68913d8",
"main.dart.js": "408f2bc54d04264a0f96f8a1c6d2a07d",
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
