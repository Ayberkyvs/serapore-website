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

  
  