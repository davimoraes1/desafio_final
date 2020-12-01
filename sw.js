const cacheName = "portfolio-v1.1"
const files = [
  '/desafio_final/',
  '/desafio_final/index.html',
  '/desafio_final/script.js',
  '/desafio_final/style.css',
  '/desafio_final/slider.html',
  '/desafio_final/styleS.css',
  '/desafio_final/relogio.html',
  '/desafio_final/styleR.css',
  '/desafio_final/scriptR.js',
  '/desafio_final/DNewS/index.html',
  '/desafio_final/DNewS/destaque.html',
  '/desafio_final/DNewS/contato.html',
  '/desafio_final/DNewS/n1.html',
  '/desafio_final/DNewS/n2.html',
  '/desafio_final/DNewS/n3.html',
  '/desafio_final/DNewS/n4.html',
  '/desafio_final/DNewS/n5.html',
  '/desafio_final/DNewS/n6.html',
  '/desafio_final/DNewS/sobre.html',
  '/desafio_final/DNewS/style.css',
  '/desafio_final/calculadora.html',
  '/desafio_final/styleC.css',
  '/desafio_final/scriptC.js',
  '/desafio_final/tabela.html',
  '/desafio_final/styleT.css',
  '/desafio_final/scriptT.js',
  '/desafio_final/tabuada.html',
  '/desafio_final/styleTAB.css',
  '/desafio_final/scriptTAB.js',
  'https://code.jquery.com/jquery-3.2.1.slim.min.js',
  'https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js',
  'https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
  'https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css'
]

self.addEventListener('install', function(evt){
  console.log("install sw");
  evt.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log('colocando arquivos na cache')
      cache.addAll(files)
    })
  )
})

self.addEventListener('activate', function(evt){
  console.log("activate sw");
  evt.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys
        .filter(key => key !== cacheName)
        .map(key => caches.delete(key))
      )
    })
  )
})

self.addEventListener('fetch', function(evt){
  console.log("fetch sw");
  evt.responseWith(
    caches.match(evt.request).then(function(res){
      return res || fetch(evt.request)
    })
  )
})
