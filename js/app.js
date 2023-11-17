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


// 반응형 메인메뉴파트
// const resBar = document.getElementById('resBar');
// const mainPartLists = document.querySelectorAll('.mainPart li');
// const resMenuParts = document.querySelectorAll('.resMenuPart p');
// const resMenuPart = document.querySelector('.resMenuPart');


// resBar.addEventListener('click', () => {
    
//     for(let i = 0; i < mainPartLists.length; i++) {
//         resMenuParts[i].textContent = mainPartLists[i].textContent;
//     }
//     resMenuPart.classList.toggle('hidden');

//     console.log(resMenuPart.width);
// })


// 모달
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modalImg');
const closeModalBtn = document.querySelector('.closeModalBtn');     // 영화 모달 닫기버튼
const modalTitle = document.getElementById('modalTitle');           // 모달 보여질 제목
const modalContents = document.getElementById('modalContents');     // 모달 보여질 컨텐츠 구분
const modalOverview = document.getElementById('modalOverview');     // 모달 보여질 줄거리
const modalReldate = document.getElementById('modalReldate');       // 모달 보여질 개봉일
const modalVote = document.getElementById('modalVote');             // 모달 보여질 평점

// close modal
closeModalBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
})


// 제목 검색 모달
const search = document.getElementById('search');
const searchSideBar = document.querySelector('.searchSideBar');
const closeSearchModalBtn = document.querySelector('.closeSearchModal');


search.addEventListener('click', (e) => {
    searchSideBar.classList.add('active');
    searchSideBar.classList.remove('deactive');
})
closeSearchModalBtn.addEventListener('click', () => {
    searchSideBar.classList.remove('active');
    searchSideBar.classList.add('deactive');
})

window.addEventListener('click', (e) => {
    if(e.target === overlay) {
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