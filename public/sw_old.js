'use strict';
const CACHE = "offline-cache"
const cache_file = [
  "./",
  "./asset-manifest.json",
  "./favicon.ico",
  "./google-translate.js",
  "./index.html",
  "./logo192.png",
  "./logo512.png",
  "./manifest.json",
  "./precache-manifest.3bd56a6737e0b85827bd57d59d08fb30.js",
  "./robots.txt"
]
const cache_files = [
  "./",
  "./asset-manifest.json",
  "./favicon.ico",
  "./google-translate.js",
  "./index.html",
  "./logo192.png",
  "./logo512.png",
  "./manifest.json",
  "./precache-manifest.3bd56a6737e0b85827bd57d59d08fb30.js",
  "./robots.txt",
  "./css",
  "./img",
  "./portfolio",
  "./types",
  "./fonts",
  "./google-translate.js",
  "./translate_a/element.js",
  "./translate_static/css/translateelement.css",
  "./translate_static/js/element/main_ru.js",
  "./img/close_form.png",
  "./img/logo_172.png",
  "./img/index_main_img.png",
  "./img/advantages_cool.png",
  "./img/advantages_pencil.png",
  "./img/advantages_cubok.png",
  "./img/advantages_tool.png",
  "./img/advantages_clock.png",
  "./img/advantages_patern.png",
  "./img/soc_face.png",
  "./img/soc_inst.png",
  "./img/soc_vk.png",
  "./img/lang_icon.png",
  "./img/phone_icon.png",
  "./img/mail_icon.png",
  "./fonts/Gilroy-ExtraBold.woff",
  "./fonts/Gilroy-Light.woff",
  "./element/TE_20200506_00/e/js/element/element_main.js",
  "./images/branding/product/1x/translate_24dp.png",
  "./images/branding/product/2x/translate_24dp.png",
  "./manifest.json",
  "./favicon.ico",
  "./logo192.png",
  "./img/about_1.jpg",
  "./img/photo1.jpg",
  "./img/photo2.jpg",
  "./portfolio/prev/picasso_studio.jpg",
  "./portfolio/prev/rec_hustle.jpg",
  "./portfolio/prev/kupimama.jpg",
  "./portfolio/prev/mary.jpg",
  "./portfolio/prev/metaldon.jpg",
  "./portfolio/prev/neroly.jpg",
  "./portfolio/prev/sayit.jpg",
  "./portfolio/prev/rykhlova.jpg",
  "./fonts/Gilroy-Regular.woff",
  "./portfolio/picasso-min.jpg",
  "./portfolio/rechustle-min.jpg",
  "./portfolio/kupimama-min.jpg",
  "./portfolio/mary-min.jpg",
  "./portfolio/prev/picasso_studio.jpg",
  "./portfolio/prev/kupimama.jpg",
  "./portfolio/prev/metaldon.jpg",
  "./portfolio/prev/neroly.jpg",
  "./portfolio/prev/sayit.jpg",
  "./portfolio/prev/rykhlova.jpg",
  "./portfolio/metaldon-min.jpg",
  "./portfolio/neroli-min.jpg",
  "./portfolio/sayit-min.jpg",
  "./portfolio/ruklova-min.jpg",
  "./img/prev_slide.png",
  "./img/next_slide.png",
  "./img/%D0%A3%D1%81%D0%BB%D1%83%D0%B3%D0%B8/web-%D1%…%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0.png",
  "./img/%D0%A3%D1%81%D0%BB%D1%83%D0%B3%D0%B8/web-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD.png",
  "./img/%D0%A3%D1%81%D0%BB%D1%83%D0%B3%D0%B8/%D0%98%D…%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3.png",
  "./img/%D0%A3%D1%81%D0%BB%D1%83%D0%B3%D0%B8/%D0%A2%D…%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0.png",
  "./img/%D0%A3%D1%81%D0%BB%D1%83%D0%B3%D0%B8/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD.png",
  "./img/Types/t1.png",
  "./types/%D0%9F%D1%80%D0%BE%D0%BC%D0%BE/1.jpg",
  "./types/%D0%9F%D1%80%D0%BE%D0%BC%D0%BE/2.jpg",
  "./img/Types/t2.png",
  "./types/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%…0%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/1.jpg",
  "./img/Types/t3.png",
  "./types/%D0%A1%D0%B0%D0%B9%D1%82%20%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D0%BA%D0%B0/1.jpg",
  "./types/%D0%A1%D0%B0%D0%B9%D1%82%20%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D0%BA%D0%B0/2.jpg",
  "./types/%D0%A1%D0%B0%D0%B9%D1%82%20%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D0%BA%D0%B0/3.jpg",
  "./types/%D0%A1%D0%B0%D0%B9%D1%82%20%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D0%BA%D0%B0/4.jpg",
  "./img/Types/t4.png",
  "./types/%D0%A1%D0%B0%D0%B9%D1%82%20%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE/1.jpg",
  "./types/%D0%A1%D0%B0%D0%B9%D1%82%20%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE/2.jpg",
  "./img/Types/t5.png",
  "./types/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%B8%D0%BA/1.jpg",
  "./types/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%B8%D0%BA/2.jpg",
  "./types/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%B8%D0%BA/3.jpg",
  "./img/Types/t6.png",
  "./types/%D0%9A%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%…0%BD%D1%8B%D0%B9%20%D1%81%D0%B0%D0%B9%D1%82/1.jpg",
  "./types/%D0%9A%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%…0%BD%D1%8B%D0%B9%20%D1%81%D0%B0%D0%B9%D1%82/2.jpg",
  "./types/%D0%9A%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%…0%BD%D1%8B%D0%B9%20%D1%81%D0%B0%D0%B9%D1%82/3.jpg",
  "./img/Types/t7.png",
  "./types/%D0%9B%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3/1.jpg",
  "./types/%D0%9B%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3/2.jpg",
  "./types/%D0%91%D0%BB%D0%BE%D0%B3/1.jpg",
  "./types/%D0%91%D0%BB%D0%BE%D0%B3/2.jpg",
  "./types/%D0%9F%D0%BE%D1%80%D1%82%D0%B0%D0%BB/1.jpg",
  "./types/%D0%9F%D0%BE%D1%80%D1%82%D0%B0%D0%BB/2.jpg",
  "./types/%D0%9F%D0%BE%D1%80%D1%82%D0%B0%D0%BB/3.jpg",
  "./fonts/Gilroy-Medium.woff"]
self.addEventListener('install', async e => {
  console.log('Установлен');
  const cached = await caches.open(CACHE);
	await cached.addAll(cache_files);
	return self.skipWaiting();
});

self.addEventListener('activate', e => {
  console.log('Активирован');
  self.clients.claim();
});

const fil = []
self.addEventListener('fetch', e => {
  console.log('Происходит запрос на сервер');
  const req = e.request;
  const url = new URL(req.url);
  //fil.push(url.pathname)
	if (url.origin === location.origin) {
		e.respondWith(cacheOnly(req));
	} else {
		e.respondWith(netAndCache(req));
  }
});

async function netAndCache (req) {
	const cached = await caches.open(CACHE);
	try {
		const res = await fetch(req);
		await cached.put(req, res.clone());
		return res;
	} catch(e) {
		const cacheRead = await cached.match(req);
		return cacheRead;
	}
}

async function cacheOnly (req) {
	const cached = await caches.open(CACHE);
	const cacheRespond = await cached.match(req);
	//return cacheRespond || fetch(req);
	return cacheRespond;
}