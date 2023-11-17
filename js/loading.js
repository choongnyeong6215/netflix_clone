// 로딩 이후 메인 페이지로 이동
setTimeout(movePage, 3000);

function movePage() {
    location.href = 'movie.html';
}

document.addEventListener('DOMContentLoaded', logoScale);

function logoScale() {
    const logo = document.getElementById('logo');
    logo.classList.remove('deactive');
    logo.classList.add('active');
}