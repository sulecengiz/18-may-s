let currentSection = 0;
const sections = document.querySelectorAll('.section');
const audio = document.getElementById("background-music");

function nextSection() {
    if (currentSection === 0) {
        audio.play();  // Kullanıcı tıklayınca müziği başlat
    }
    if (currentSection < sections.length - 1) {
        sections[currentSection].classList.remove('active');
        currentSection++;
        sections[currentSection].classList.add('active');
    }
}

// Sayfa yüklendiğinde ilk bölüm gösterilir
document.addEventListener("DOMContentLoaded", function() {
    sections[0].classList.add('active');
});
