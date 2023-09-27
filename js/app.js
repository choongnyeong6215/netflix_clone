// 헤더바 숨기기
const headerContainer = document.getElementsByClassName('header_container')[0];
let preScroll = 0;

console.log(headerContainer);

window.addEventListener('scroll', () => {
    let curScroll = document.documentElement.scrollTop;
    if(curScroll > 50) {
        headerContainer.classList.add('hidden');
    }
    else {
        headerContainer.classList.remove('hidden');
    }
})

// 모달
const thumbnails = document.getElementsByClassName('thumbnail');
const thumbnailContainer = document.querySelector('.thumbnailContainer');
const modal = document.querySelector('.modal');
const thumbnailElement = document.querySelector('.thumbnailElement');
const closeModalBtn = document.querySelector('.cloModal');

for(let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function() {
        const perSrc = this.src;
        
        thumbnailElement.src = perSrc;

        modal.classList.remove('hidden');
    })
}


closeModalBtn.addEventListener('click', function() {
    modal.classList.add('hidden');
})


// 캐러셀