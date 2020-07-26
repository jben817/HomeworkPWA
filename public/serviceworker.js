self.addEventListener("install", e =>{
    e.waituntil(
        caches.open("static").then(cache => {
           return cache.addAll("/", "/index.html","/index.js","/styles.css") 
        })
    );
});