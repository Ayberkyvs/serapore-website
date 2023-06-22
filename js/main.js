document.addEventListener("DOMContentLoaded", function() {
  var loader = document.getElementById('loader');
  var content = document.getElementById('content');

  loader.style.transition = 'opacity 0.3s ease-in-out';
  loader.style.opacity = 1;

  function hideLoader() {
    loader.style.opacity = 0;
    setTimeout(function() {
      loader.style.display = 'none';
    }, 300);
  }

  var fadeOutInterval = setInterval(function() {
    if (loader.style.opacity > 0) {
      loader.style.opacity -= 0.05;
    } else {
      clearInterval(fadeOutInterval);
      hideLoader();
    }
  }, 30);
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

jQuery(document).ready(function($) {
  // Scroll to the desired section on click
  // Make sure to add the `data-scroll` attribute to your `<a>` tag.
  // Example: `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top - 140 // Bottom değerini 140px olarak ayarlayın
    }, 500);
  }
  $('[data-scroll]').on('click', scrollToSection);

  // Linklere tıklandığında active sınıfını ekle, menüyü kapat
  $(".nav li a").click(function() {
    $(this).parent().addClass('active').siblings().removeClass('active');
    $("#navbar").removeClass("in");
  });
});


const idliButton = document.getElementById("readmore");
const readmoreText = document.getElementById("readmore-text");

let isDisplayed = false;

idliButton.addEventListener("click", function() {
  if (isDisplayed) {
    readmoreText.style.display = "none";
    idliButton.style.backgroundColor = "#f18f01";
    idliButton.style.color = "white";
    idliButton.textContent = "Daha Fazla";
    isDisplayed = false;
  } else {
    readmoreText.style.display = "flex";
    idliButton.textContent = "Daha Az";
    idliButton.style.backgroundColor = "transparent";
    idliButton.style.color = "#f18f01";
    isDisplayed = true;
  }
});
