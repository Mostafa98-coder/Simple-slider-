var imgList = Array.from(document.querySelectorAll('.item img'));
var lightBoxContainer = document.getElementById('lightBoxContainer');
var lightbox = document.getElementById('lightbox');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var closebtn = document.getElementById('closebtn');
var currentIndex = 0;

for (var i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener('click', function(e) {
        lightBoxContainer.classList.remove('d-none');
        var imgSrc = e.target.getAttribute('src');
        lightbox.style.backgroundImage = `url(${imgSrc})`;
        currentIndex = imgList.indexOf(e.target);
        console.log(currentIndex);

    })
}

function nextSlide() {
    currentIndex++;
    if (currentIndex == imgList.length - 1) { currentIndex = 0; }
    var imgSrc = imgList[currentIndex].getAttribute('src');
    lightbox.style.backgroundImage = `url(${imgSrc})`;
}

function prevSlide() {
    currentIndex--;
    if (currentIndex <= 0) { currentIndex = imgList.length - 1; }
    var imgSrc = imgList[currentIndex].getAttribute('src');
    lightbox.style.backgroundImage = `url(${imgSrc})`;
}

function closeSlide() {
    lightBoxContainer.classList.add('d-none');
}
next.addEventListener('click', function(e) {
    nextSlide();
})
prev.addEventListener('click', function(e) {
    prevSlide();
})
closebtn.addEventListener('click', function(e) {
    closeSlide();
})

document.addEventListener('keydown', function(e) {
    if (e.code == 'ArrowRight') {
        nextSlide();
    } else if (e.code == 'ArrowLeft') {
        prevSlide();
    } else if (e.code == 'Escape') {
        closeSlide();
    }
})