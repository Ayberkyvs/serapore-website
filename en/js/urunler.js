document.addEventListener('DOMContentLoaded', function() {
var tarih = document.lastModified;
var h3Elements = document.querySelectorAll('.text-muted');
h3Elements.forEach(function(element) {
    element.textContent = 'Last Edit Date: ' + tarih;
    });
});

