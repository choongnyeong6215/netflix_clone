// 헤더바 숨기기
const headerContainer = document.getElementsByClassName('header_container')[0];
let preScroll = 0;

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
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modalImg');
const closeModalBtn = document.querySelector('.closeModalBtn');     // 닫기버튼
const modalTitle = document.getElementById('modalTitle');           // 모달 보여질 제목
const modalContents = document.getElementById('modalContents');     // 모달 보여질 컨텐츠 구분
const modalOverview = document.getElementById('modalOverview');     // 모달 보여질 줄거리
const modalReldate = document.getElementById('modalReldate');       // 모달 보여질 개봉일
const modalVote = document.getElementById('modalVote');             // 모달 보여질 평점

// close modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})


// 제목 검색 모달
const search = document.getElementById('search');
const searchModal = document.querySelector('.search_modal');
const closeSearchModalBtn = document.querySelector('.closeSearchModal');


search.addEventListener('click', (e) => {
    searchModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
})
closeSearchModalBtn.addEventListener('click', () => {
    searchModal.classList.add('hidden');
    overlay.classList.add('hidden');
})

window.addEventListener('click', (e) => {
    if(e.target === overlay) {
        searchModal.classList.add('hidden');
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})


// 포스터 썸네일 자동 슬라이드
const mainPosterImg = document.querySelector('.mainPosterImg');
const MainThumbnails = document.getElementsByClassName('MainThumbnail');
let curIdx = 0;

function chgPoster() {
    for(let i = 0; i < MainThumbnails.length; i++) {
        MainThumbnails[i].style.display = 'none';
    }
    curIdx++;

    if(curIdx > MainThumbnails.length) {
        curIdx = 1;
    }

    MainThumbnails[curIdx - 1].style.display = 'block';
}

setInterval(chgPoster, 5000);