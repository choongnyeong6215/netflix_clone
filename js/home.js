// FAQ 아코디언 스타일 - 버튼으로 작동
const perfaqs = document.getElementsByClassName('perfaq');

let cnt = 0;

for(let i = 0; i < perfaqs.length; i++) {
    perfaqs[i].addEventListener('click', function() {

        const perAns = this.nextElementSibling;     // 답변
        const btnTxt = this.childNodes[3];          // 버튼 형태 변경

        perAns.classList.toggle('active');

        cnt++;

        if(cnt % 2 !== 0 ) {
            btnTxt.textContent = '-';
        }
        else {
            btnTxt.textContent = '+';
        }

    })
}


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