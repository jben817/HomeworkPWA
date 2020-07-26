self.addEventListener("install", e =>{
    e.waitUntil(
        caches.open("static").then(cache => {
            console.log (cache);
           return cache.addAll(["./", "./index.html","./index.js","./styles.css"]) 
        })
    );
});

self.addEventListener("fetch", e => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch (e.request);
        })
    );
})