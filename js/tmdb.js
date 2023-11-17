// tmdb api
const firLine = document.getElementsByClassName('firLine');
const secLine = document.getElementsByClassName('secLine');
const thrLine = document.getElementsByClassName('thrLine');
const fourLine = document.getElementsByClassName('fourLine');

// tmdb data - popular
const options1 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDM0Yzg2ODljMGYwYTI4OTQ1Nzk4MTFmMTlkNjJkNyIsInN1YiI6IjY1MTVjMWM0ZDQ2NTM3MDBjNjdiMmIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N1Y9ebXr4rKK0JWVcrW6N4ISOyHAuwdqpuXQsUG7N00'
    }
  };
  
  for(let i = 0; i < 10; i++) {
    fetch('https://api.themoviedb.org/3/trending/all/day?language=ko-KR&page=1', options1)
        .then(response => response.json())
        .then(data => {
          let movies = data;

          let movieImg = movies.results[i].poster_path;
          let movieTitle = movies.results[i].title;
          let movieContents = movies.results[i].media_type;
          let movieOverview = movies.results[i].overview;
          let movieRelDate = movies.results[i].release_date;
          let movieGrade = movies.results[i].vote_average.toFixed(1);

          if(movieTitle === undefined) {
            movieTitle = movies.results[i].name;
          }

          if(movieContents === undefined) {
            movieContents = '';
          }

          if(movieRelDate === undefined) {
            movieRelDate = '';
          }

          firLine[i].src = `https://image.tmdb.org/t/p/w500/${movieImg}`;

          // 스크롤 위치 별로 모달창 표시
          // let tPos1;

          // window.addEventListener('scroll', () => {
          //   tPos1 = document.documentElement.scrollTop;

          //   console.log(tPos1);
          // })

          // 포스터 모달창
          firLine[i].addEventListener('click', (e) => {

            let y = e.offsetY;

            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');

            // modal.style.transform = `translate(-50%, ${tPos1 + (y / 2)}px)`;

            modalImg.src = firLine[i].src;
            modalTitle.innerHTML = movieTitle;
            modalOverview.innerHTML = movieOverview;
            modalContents.innerHTML = `컨텐츠 : ${movieContents}`;
            modalReldate.innerHTML = `개봉일 :  ${movieRelDate}`;
            modalVote.innerHTML = `평점 : ${movieGrade}`;
          })

          // popular contents 제목 검색
          const searchResults = document.querySelector('.searchResults');
          const searchForm = document.getElementById('search_form');
          const searchResListsNames = movieTitle.toLowerCase();
          const searchResTxt = document.createElement('p');

          searchForm.addEventListener('keyup', (e) => {
            const keyword = e.target.value;

            if(searchResListsNames.indexOf(keyword) > -1 && keyword !== '') {
              searchResTxt.innerHTML = searchResListsNames;
              searchResults.appendChild(searchResTxt);
            }
            else {
              searchResTxt.remove();
            }
          })


          // 캐러셀
          const slide1 = document.querySelector('.popular');
          const slideList1 = document.querySelectorAll('.popular div');
          const slideCnt1 = slideList1.length;
          const prevBtn1 = document.querySelector('.pbt1');
          const nextBtn1 = document.querySelector('.nbt1');
          const slideWidth1 = 300;
          const slideMargin1 = 64;
          let curIdx1 = 0;

          slide1.style.width = (slideWidth1 + slideMargin1) * slideCnt1 + 'px';

          slide1.style.left = 0 + 'px';

          function moveSlide(num) {

            if(-num * 500 == 0) {
              prevBtn1.classList.add('hidden');
            }

            else if (-num * 500 <= -2000) {
              nextBtn1.classList.add('hidden');
            }
            else {
              prevBtn1.classList.remove('hidden');
              nextBtn1.classList.remove('hidden');
            }         

            slide1.style.left = -num * 500 + 'px';
            curIdx1 = num;
          }

          prevBtn1.addEventListener('click', () => {
            if(curIdx1 !== 0) {
              moveSlide(curIdx1 - 1);
              slide1.classList.add('moved');
            }
          })

          nextBtn1.addEventListener('click', () => {

            if(curIdx1 !== slideCnt1 - 1) {
              moveSlide(curIdx1 + 1);
              slide1.classList.add('moved');
            }
          })
        })
  }


// tmdb data - tv
const options2 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDM0Yzg2ODljMGYwYTI4OTQ1Nzk4MTFmMTlkNjJkNyIsInN1YiI6IjY1MTVjMWM0ZDQ2NTM3MDBjNjdiMmIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N1Y9ebXr4rKK0JWVcrW6N4ISOyHAuwdqpuXQsUG7N00'
    }
  };
  
  for(let i = 0; i < 10; i ++) {
    fetch(`https://api.themoviedb.org/3/trending/tv/day?language=ko-KR&page=3`, options2)
        .then(response => response.json())
        .then(data => {
          let movies = data;

          let movieImg = movies.results[i].poster_path;
          let movieTitle = movies.results[i].title;
          let movieContents = movies.results[i].media_type;
          let movieOverview = movies.results[i].overview;
          let movieRelDate = movies.results[i].release_date;
          let movieGrade = movies.results[i].vote_average.toFixed(1);

          if(movieTitle === undefined) {
            movieTitle = movies.results[i].name;
          }

          if(movieContents === undefined) {
            movieContents = '';
          }

          if(movieRelDate === undefined) {
            movieRelDate = '';
          }

          secLine[i].src = `https://image.tmdb.org/t/p/w500/${movieImg}`;

          // 스크롤 위치 별로 모달창 표시
          // let tPos2;

          // window.addEventListener('scroll', () => {
          //   tPos2 = document.documentElement.scrollTop;
          // })

          // 포스터 모달창
          secLine[i].addEventListener('click', (e) => {

            // let y = e.offsetY;

            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');

            // modal.style.transform = `translate(-50%, ${tPos2 + (y / 2)}px)`;

            modalImg.src = secLine[i].src;
            modalTitle.innerHTML = movieTitle;
            modalOverview.innerHTML = movieOverview;
            modalContents.innerHTML = `컨텐츠 : ${movieContents}`;
            modalReldate.innerHTML = `개봉일 :  ${movieRelDate}`;
            modalVote.innerHTML = `평점 : ${movieGrade}`;
          })

          // tv contents 제목 검색
          const searchResults = document.querySelector('.searchResults');
          const searchForm = document.getElementById('search_form');
          const searchResListsNames = movieTitle.toLowerCase();
          const searchResTxt = document.createElement('p');

          searchForm.addEventListener('keyup', (e) => {
            const keyword = e.target.value;

            console.log(`제목 : ${searchResListsNames}, ${searchResListsNames.indexOf(keyword)}`);

            if(searchResListsNames.indexOf(keyword) > -1 && keyword !== '') {
              searchResTxt.innerHTML = searchResListsNames;
              searchResults.appendChild(searchResTxt);
            }
            else {
              searchResTxt.remove();
            }
          })

          // 캐러셀
          const slide2 = document.querySelector('.tv');
          const slideList2 = document.querySelectorAll('.tv div');
          const slideCnt2 = slideList2.length;
          const prevBtn2 = document.querySelector('.pbt2');
          const nextBtn2 = document.querySelector('.nbt2');
          const slideWidth2 = 400;
          const slideMargin2 = 64;
          let curIdx2 = 0;

          slide2.style.width = (slideWidth2 + slideMargin2) * slideCnt2 + 'px';

          slide2.style.left = 0 + 'px';

          function moveSlide(num) {

            if(-num * 500 == 0) {
              prevBtn2.classList.add('hidden');
            }

            else if (-num * 500 <= -2000) {
              nextBtn2.classList.add('hidden');
            }
            else {
              prevBtn2.classList.remove('hidden');
              nextBtn2.classList.remove('hidden');
            }
            slide2.style.left = -num * 500 + 'px';
            curIdx2 = num;
          }

          prevBtn2.addEventListener('click', () => {
            if(curIdx2 !== 0) {
              moveSlide(curIdx2 - 1);
              slide2.classList.add('moved');
            }
          })

          nextBtn2.addEventListener('click', () => {
            if(curIdx2 !== slideCnt2 -1) {
              moveSlide(curIdx2 + 1);
              slide2.classList.add('moved');
            }
          })
        })
  }

// tmdb data - current_movie
const options3 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDM0Yzg2ODljMGYwYTI4OTQ1Nzk4MTFmMTlkNjJkNyIsInN1YiI6IjY1MTVjMWM0ZDQ2NTM3MDBjNjdiMmIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N1Y9ebXr4rKK0JWVcrW6N4ISOyHAuwdqpuXQsUG7N00'
    }
  };
  
  for(let i = 0; i < 10; i ++) {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=2`, options3)
    .then(response => response.json())
    .then(data => {
      let movies = data;

      let movieImg = movies.results[i].poster_path;
      let movieTitle = movies.results[i].title;
      let movieContents = movies.results[i].media_type;
      let movieOverview = movies.results[i].overview;
      let movieRelDate = movies.results[i].release_date;
      let movieGrade = movies.results[i].vote_average.toFixed(1);

      if(movieTitle === undefined) {
        movieTitle = movies.results[i].name;
      }

      if(movieContents === undefined) {
        movieContents = '';
      }

      if(movieRelDate === undefined) {
        movieRelDate = '';
      }

      thrLine[i].src = `https://image.tmdb.org/t/p/w500/${movieImg}`;

      // 스크롤 위치 별로 모달창 표시
      // let tPos3;

      // window.addEventListener('scroll', () => {
      //   tPos3 = document.documentElement.scrollTop;
      // })

      // 포스터 모달창
      thrLine[i].addEventListener('click', (e) => {

        // let y = e.offsetY;

        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

        // modal.style.transform = `translate(-50%, ${tPos3 + (y / 2)}px)`;

        modalImg.src = thrLine[i].src;
        modalTitle.innerHTML = movieTitle;
        modalOverview.innerHTML = movieOverview;
        modalContents.innerHTML = `컨텐츠 : ${movieContents}`;
        modalReldate.innerHTML = `개봉일 :  ${movieRelDate}`;
        modalVote.innerHTML = `평점 : ${movieGrade}`;
      })


      // current_movie contents 제목 검색
      const searchResults = document.querySelector('.searchResults');
      const searchForm = document.getElementById('search_form');
      const searchResListsNames = movieTitle.toLowerCase();
      const searchResTxt = document.createElement('p');

      searchForm.addEventListener('keyup', (e) => {
        const keyword = e.target.value;

        console.log(`제목 : ${searchResListsNames}, ${searchResListsNames.indexOf(keyword)}`);

        if(searchResListsNames.indexOf(keyword) > -1 && keyword !== '') {
          searchResTxt.innerHTML = searchResListsNames;
          searchResults.appendChild(searchResTxt);
        }
        else {
          searchResTxt.remove();
        }
      })
    
      
      // 캐러셀
      const slide3 = document.querySelector('.curr');
      const slideList3 = document.querySelectorAll('.tv div');
      const slideCnt3 = slideList3.length;
      const prevBtn3 = document.querySelector('.pbt3');
      const nextBtn3 = document.querySelector('.nbt3');
      const slideWidth3 = 400;
      const slideMargin3 = 64;
      let curIdx3 = 0;

      slide3.style.width = (slideWidth3 + slideMargin3) * slideCnt3 + 'px';

      slide3.style.left = 0 + 'px';

          function moveSlide(num) {

            if(-num * 500 == 0) {
              prevBtn3.classList.add('hidden');
            }

            else if (-num * 500 <= -2000) {
              nextBtn3.classList.add('hidden');
            }
            else {
              prevBtn3.classList.remove('hidden');
              nextBtn3.classList.remove('hidden');
            }
            slide3.style.left = -num * 500 + 'px';
            curIdx3 = num;
          }

      prevBtn3.addEventListener('click', () => {
        if(curIdx3 !== 0) {
          moveSlide(curIdx3 - 1);
          slide3.classList.add('moved');
        }
      })

      nextBtn3.addEventListener('click', () => {
        if(curIdx3 !== slideCnt3 -1) {
          moveSlide(curIdx3 + 1);
          slide3.classList.add('moved');
        }
      })
  })
}


// // tmdb data - comming_soon
const options4 = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDM0Yzg2ODljMGYwYTI4OTQ1Nzk4MTFmMTlkNjJkNyIsInN1YiI6IjY1MTVjMWM0ZDQ2NTM3MDBjNjdiMmIyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N1Y9ebXr4rKK0JWVcrW6N4ISOyHAuwdqpuXQsUG7N00'
    }
  };
  
  for(let i = 0; i < 10; i ++) {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1`, options4)
    .then(response => response.json())
    .then(data => {
      let movies = data;

      let movieImg = movies.results[i].poster_path;
      let movieTitle = movies.results[i].title;
      let movieContents = movies.results[i].media_type;
      let movieOverview = movies.results[i].overview;
      let movieRelDate = movies.results[i].release_date;
      let movieGrade = movies.results[i].vote_average.toFixed(1);

      if(movieTitle === undefined) {
        movieTitle = movies.results[i].name;
      }

      if(movieContents === undefined) {
        movieContents = '';
      }

      if(movieRelDate === undefined) {
        movieRelDate = '';
      }

      fourLine[i].src = `https://image.tmdb.org/t/p/w500/${movieImg}`;

      // 스크롤 위치 별로 모달창 표시
      // let tPos4;

      // window.addEventListener('scroll', () => {
      //   tPos4 = document.documentElement.scrollTop;
      // })

      // 포스터 모달창
      fourLine[i].addEventListener('click', (e) => {

        // let y = e.offsetY;

        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

        // modal.style.transform = `translate(-50%, ${tPos4 + (y / 2)}px)`;

        modalImg.src = fourLine[i].src;
        modalTitle.innerHTML = movieTitle;
        modalOverview.innerHTML = movieOverview;
        modalContents.innerHTML = `컨텐츠 : ${movieContents}`;
        modalReldate.innerHTML = `개봉일 :  ${movieRelDate}`;
        modalVote.innerHTML = `평점 : ${movieGrade}`;
      })

      // comming_soon contents 제목 검색
      const searchResults = document.querySelector('.searchResults');
      const searchForm = document.getElementById('search_form');
      const searchResListsNames = movieTitle.toLowerCase();
      const searchResTxt = document.createElement('p');

      searchForm.addEventListener('keyup', (e) => {
        const keyword = e.target.value;

        console.log(`제목 : ${searchResListsNames}, ${searchResListsNames.indexOf(keyword)}`);

        if(searchResListsNames.indexOf(keyword) > -1 && keyword !== '') {
          searchResTxt.innerHTML = searchResListsNames;
          searchResults.appendChild(searchResTxt);
        }
        else {
          searchResTxt.remove();
        }
      })
    
      
      // 캐러셀
      const slide4 = document.querySelector('.comming');
      const slideList4 = document.querySelectorAll('.tv div');
      const slideCnt4 = slideList4.length;
      const prevBtn4 = document.querySelector('.pbt4');
      const nextBtn4 = document.querySelector('.nbt4');
      const slideWidth4 = 400;
      const slideMargin4 = 64;
      let curIdx4 = 0;

      slide4.style.width = (slideWidth4 + slideMargin4) * slideCnt4 + 'px';

      slide4.style.left = 0 + 'px';

          function moveSlide(num) {

            if(-num * 500 == 0) {
              prevBtn4.classList.add('hidden');
            }

            else if (-num * 500 <= -2000) {
              nextBtn4.classList.add('hidden');
            }
            else {
              prevBtn4.classList.remove('hidden');
              nextBtn4.classList.remove('hidden');
            }
            slide4.style.left = -num * 500 + 'px';
            curIdx4 = num;
          }

      prevBtn4.addEventListener('click', () => {
        if(curIdx4 !== 0) {
          moveSlide(curIdx4 - 1);
          slide4.classList.add('moved');
        }
      })

      nextBtn4.addEventListener('click', () => {
        if(curIdx4 !== slideCnt4 -1) {
          moveSlide(curIdx4 + 1);
          slide4.classList.add('moved');
        }
      })
    })
}