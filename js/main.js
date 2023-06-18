var preloader = document.getElementById('loader');
      function preLoaderHandler(){
          preloader.style.display = 'none';
      }


var loader;

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 30);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(3);
});

var sayiElementleri = document.querySelectorAll(".sayi");

function animasyonluArtis(sayiElementi, hedefSayi) {
  var sayi = 0;
  var adim = 5;

  var animasyon = setInterval(function() {
    sayi += adim;
    sayiElementi.innerHTML = sayi;

    if (sayi >= hedefSayi) {
      clearInterval(animasyon);
    }
  }, 10);
}

function scrollOlayDinleyicisi() {
  sayiElementleri.forEach(function(sayiElementi) {
    var sayiYukseklik = sayiElementi.getBoundingClientRect().top;
    var ekranYukseklik = window.innerHeight;

    if (sayiYukseklik < ekranYukseklik) {
      var hedefSayi = parseInt(sayiElementi.getAttribute("data-hedef"));

      if (!sayiElementi.classList.contains("basladi")) {
        animasyonluArtis(sayiElementi, hedefSayi);
        sayiElementi.classList.add("basladi");
      }
    }
  });
}

window.addEventListener("scroll", scrollOlayDinleyicisi);
