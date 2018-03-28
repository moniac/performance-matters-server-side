var SW_CONSOLE_PREFIX = '[Service Worker]'
var PRE_CACHE_VERSION = '-v1'
var PRE_CACHE_NAME = 'precache'
var DYNAMIC_CACHE_VERSION = '-v1'
var DYNAMIC_CACHE_NAME = 'dynamiccache'

self.addEventListener('install', function(event) {
    console.log(SW_CONSOLE_PREFIX + 'Installing Service Worker ..', event)

    event.waitUntil(
        caches.open(PRE_CACHE_NAME + PRE_CACHE_VERSION)
        .then(function(cache) {
            console.log(SW_CONSOLE_PREFIX)
            cache.addAll([
                '/',
                '/offline/',
                'scripts/js/bundle.js'
            ])
        })
        .catch(function(error) {console.log(SW_CONSOLE_PREFIX + 'Issue while trying to precache ' + error)})
    )
})

self.addEventListener('activate', function(event) {
    console.log(SW_CONSOLE_PREFIX + ' Activating Service Worker ..', event)
    event.waitUntil(
        caches.keys()
        .then(function(keyList) {

            return Promise.all(keyList.map(function(key){
                if( key !== PRE_CACHE_NAME + PRE_CACHE_VERSION && key !== DYNAMIC_CACHE_NAME + DYNAMIC_CACHE_VERSION) {
                    console.log(SW_CONSOLE_PREFIX  + ' Removing old cache.', key)
                    return caches.delete(key)
                }
            })) 
        })
    )

    return self.clients.claim()
})


self.addEventListener('fetch', function(event){
    console.log(SW_CONSOLE_PREFIX + ' Fetching file ..', event)

    event.respondWith(

        caches.match(event.request)
        .then(function(response){
            if(response) {
                return response
            } else{
                return fetch(event.request)
                .then(function(newResponse){
                    return caches.open(DYNAMIC_CACHE_NAME + DYNAMIC_CACHE_VERSION)
                    .then(function(cache) {

                        cache.put(event.request.url, newResponse.clone())
                        return newResponse
                    })
                })
                .catch(function(error){
                    return caches.open(PRE_CACHE_NAME + PRE_CACHE_VERSION)
                    .then(function(cache) {
                        return cache.match('/offline')    
                    })
                })
            }
        })
    )
})