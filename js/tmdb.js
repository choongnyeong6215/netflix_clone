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

          firLine[i].addEventListener('click', (e) => {
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');

            modalImg.src = firLine[i].src;
            modalTitle.innerHTML = movieTitle;
            modalOverview.innerHTML = movieOverview;
            modalContents.innerHTML = `컨텐츠 : ${movieContents}`;
            modalReldate.innerHTML = `개봉일 :  ${movieRelDate}`;
            modalVote.innerHTML = `평점 : ${movieGrade}`;
          })


          // popular contents 제목 검색
          const searchRes = document.querySelector('.searchRes');
          const searchForm = document.getElementById('search_form');
          const searchResListsNames = movieTitle.toLowerCase();
          const searchResTxt = document.createElement('p');

          searchForm.addEventListener('keyup', (e) => {
            const keyword = e.target.value;

            console.log(`제목 : ${searchResListsNames}, ${searchResListsNames.indexOf(keyword)}`);

            if(searchResListsNames.indexOf(keyword) > -1 && keyword !== '') {
              searchResTxt.innerHTML = searchResListsNames;
              searchRes.appendChild(searchResTxt);
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
          const slideWidth1 = 270;
          const slideMargin1 = 8;
          let curIdx1 = 0;

          slide1.style.width = (slideWidth1 + slideMargin1) * slideCnt1 + 'px';

          slide1.style.left = 0 + 'px';

          function moveSlide(num) {

            if(-num * 500 == 0) {
              prevBtn1.classList.add('hidden');
            }

            else if (-num * 500 <= -1500) {
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

            console.log(slide1.style.left);
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

          secLine[i].addEventListener('click', (e) => {
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');

            modalImg.src = secLine[i].src;
            modalTitle.innerHTML = movieTitle;
            modalOverview.innerHTML = movieOverview;
            modalContents.innerHTML = `컨텐츠 : ${movieContents}`;
            modalReldate.innerHTML = `개봉일 :  ${movieRelDate}`;
            modalVote.innerHTML = `평점 : ${movieGrade}`;
          })

          // tv contents 제목 검색
          const searchRes = document.querySelector('.searchRes');
          const searchForm = document.getElementById('search_form');
          const searchResListsNames = movieTitle.toLowerCase();
          const searchResTxt = document.createElement('p');

          searchForm.addEventListener('keyup', (e) => {
            const keyword = e.target.value;

            console.log(`제목 : ${searchResListsNames}, ${searchResListsNames.indexOf(keyword)}`);

            if(searchResListsNames.indexOf(keyword) > -1 && keyword !== '') {
              searchResTxt.innerHTML = searchResListsNames;
              searchRes.appendChild(searchResTxt);
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
          const slideWidth2 = 270;
          const slideMargin2 = 8;
          let curIdx2 = 0;

          slide2.style.width = (slideWidth2 + slideMargin2) * slideCnt2 + 'px';

          slide2.style.left = 0 + 'px';

          function moveSlide(num) {

            if(-num * 500 == 0) {
              prevBtn2.classList.add('hidden');
            }

            else if (-num * 500 <= -1500) {
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

      thrLine[i].addEventListener('click', (e) => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

        modalImg.src = thrLine[i].src;
        modalTitle.innerHTML = movieTitle;
        modalOverview.innerHTML = movieOverview;
        modalContents.innerHTML = `컨텐츠 : ${movieContents}`;
        modalReldate.innerHTML = `개봉일 :  ${movieRelDate}`;
        modalVote.innerHTML = `평점 : ${movieGrade}`;
      })


      // current_movie contents 제목 검색
      const searchRes = document.querySelector('.searchRes');
      const searchForm = document.getElementById('search_form');
      const searchResListsNames = movieTitle.toLowerCase();
      const searchResTxt = document.createElement('p');

      searchForm.addEventListener('keyup', (e) => {
        const keyword = e.target.value;

        console.log(`제목 : ${searchResListsNames}, ${searchResListsNames.indexOf(keyword)}`);

        if(searchResListsNames.indexOf(keyword) > -1 && keyword !== '') {
          searchResTxt.innerHTML = searchResListsNames;
          searchRes.appendChild(searchResTxt);
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
      const slideWidth3 = 270;
      const slideMargin3 = 8;
      let curIdx3 = 0;

      slide3.style.width = (slideWidth3 + slideMargin3) * slideCnt3 + 'px';

      slide3.style.left = 0 + 'px';

          function moveSlide(num) {

            if(-num * 500 == 0) {
              prevBtn3.classList.add('hidden');
            }

            else if (-num * 500 <= -1500) {
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

      fourLine[i].addEventListener('click', (e) => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

        modalImg.src = fourLine[i].src;
        modalTitle.innerHTML = movieTitle;
        modalOverview.innerHTML = movieOverview;
        modalContents.innerHTML = `컨텐츠 : ${movieContents}`;
        modalReldate.innerHTML = `개봉일 :  ${movieRelDate}`;
        modalVote.innerHTML = `평점 : ${movieGrade}`;
      })

      // comming_soon contents 제목 검색
      const searchRes = document.querySelector('.searchRes');
      const searchForm = document.getElementById('search_form');
      const searchResListsNames = movieTitle.toLowerCase();
      const searchResTxt = document.createElement('p');

      searchForm.addEventListener('keyup', (e) => {
        const keyword = e.target.value;

        console.log(`제목 : ${searchResListsNames}, ${searchResListsNames.indexOf(keyword)}`);

        if(searchResListsNames.indexOf(keyword) > -1 && keyword !== '') {
          searchResTxt.innerHTML = searchResListsNames;
          searchRes.appendChild(searchResTxt);
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
      const slideWidth4 = 270;
      const slideMargin4 = 8;
      let curIdx4 = 0;

      slide4.style.width = (slideWidth4 + slideMargin4) * slideCnt4 + 'px';

      slide4.style.left = 0 + 'px';

          function moveSlide(num) {

            if(-num * 500 == 0) {
              prevBtn4.classList.add('hidden');
            }

            else if (-num * 500 <= -1500) {
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