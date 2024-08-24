
let nextbtn = document.getElementById('next');
let prevbtn = document.getElementById('prev');
let carouselclass = document.querySelector('.carousel');
let listitem = document.querySelector('.carousel .list');
let thumbnailclass = document.querySelector('.carousel .thumbnail');

nextbtn.onclick = function () {
    showSlider('next');
};
prevbtn.onclick = function () {
    showSlider('prev');
};


let runTimeOut;
//time for auto change
let timeautoNext = 7000;
let AutoRun;
function startAutoRun() {
    AutoRun = setTimeout(() => {
        nextbtn.click();
    }, timeautoNext);
}

function resetAutoRun() {
    clearTimeout(AutoRun);
    startAutoRun();
}

function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carousel .list .items');
    let itemthumbnail = document.querySelectorAll('.carousel .thumbnail .items');

    if (type === 'next') {
        listitem.appendChild(itemSlider[0]);
        thumbnailclass.appendChild(itemthumbnail[0]);
        carouselclass.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listitem.prepend(itemSlider[positionLastItem]);
        thumbnailclass.prepend(itemthumbnail[positionLastItem]);
        carouselclass.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselclass.classList.remove('next');
        carouselclass.classList.remove('prev');
    }, );
    resetAutoRun(); 
}
startAutoRun();
