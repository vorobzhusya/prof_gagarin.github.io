let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;


function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
    });
}


function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateSlides();
}

updateSlides();


setInterval(nextSlide, 3000); 

var map = L.map('map').setView([51.768205, 55.097000], 5); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    var marker = L.marker([51.768205, 55.097000]).addTo(map); 

    function changeLocation(lat, lon) {
        map.setView([lat, lon], 13); 
        marker.setLatLng([lat, lon]); 
    }

    document.getElementById('arrowUp').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
  

   