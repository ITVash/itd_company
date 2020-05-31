importScripts("workbox-v5.1.3/workbox-sw.js")
workbox.setConfig({ modulePathPrefix: "workbox-v5.1.3/" })

const dataCacheConfig = {
  cacheName: 'meme-data'
}

//workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)

workbox.routing.registerRoute(
	/.*about/,
	new workbox.strategies.CacheFirst(dataCacheConfig),
	"GET",
)
workbox.routing.registerRoute(
	/.*type-site/,
	new workbox.strategies.CacheFirst(dataCacheConfig),
	"GET",
)
workbox.routing.registerRoute(
	/.*portfolio\/.\w+/,
	new workbox.strategies.StaleWhileRevalidate(dataCacheConfig),
	"GET",
)
workbox.routing.registerRoute(
	/.*services\/.\w+/,
	new workbox.strategies.StaleWhileRevalidate(dataCacheConfig),
	"GET",
)

workbox.routing.registerRoute(
	({request}) => request.destination === "image",
	new workbox.strategies.CacheFirst({ cacheName: "meme-images" }),
	"GET",
)

self.addEventListener("install", e => {
	self.skipWaiting()
	/* const channel = new BroadcastChannel('service-worker-channel')
	channel.postMessage({ promptToReload: true })
	
	channel.onmessage = (message) => {
		if (message.data.skipWaiting) {
		}
	} */
})