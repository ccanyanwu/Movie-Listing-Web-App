//event when page is loaded
document.addEventListener('DOMContentLoaded', function(){
  //alert('cjai');
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=08a4a9a41d4afbbd8893e3e58fbfe4b2&language=en-US').
  then(res => res.json()).
  then(
    res => {
      let allMovies = res.results;
      //loop through the result array to display movies 
      allMovies.forEach(movie =>{
      document.querySelector('section.movies').innerHTML += `<div>
        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie poster"/>
        <p>${movie.title}</p>
        <a  onClick="moviesSelected(${movie.id})" class="movie-details">Movie Details </a>
      </div>`;
     });
    });
});

//filter event 
const searchInput = document.querySelector('.searchTerm');
const search = document.querySelector('.searchButton');
searchInput.addEventListener('keydown', function(){
  document.querySelector('section.movies').innerHTML = ''
  searchValue = searchInput.value.toLowerCase();
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=08a4a9a41d4afbbd8893e3e58fbfe4b2&query=${searchValue}&adult=true`)
    .then(res => res.json())
      .then(
        res =>{
          let allMovies = res.results;
      //loop through the result array to display movies 
      allMovies.forEach(movie =>{
        if(movie.poster_path){
            document.querySelector('section.movies').innerHTML += `
            <div>
              <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="movie poster"/>
              <p>${movie.title}</p>
              <a  onClick="moviesSelected(${movie.id})" class="movie-details">Movie Details </a>
            </div>`;
        } else if(movie.backdrop_path){
          document.querySelector('section.movies').innerHTML += `
          <div>
            <img src="https://image.tmdb.org/t/p/w300/${movie.backdrop_path}" alt="movie poster"/>
            <p>${movie.title}</p>
            <a  onClick="moviesSelected(${movie.id})" class="movie-details">Movie Details </a>
          </div>`; 
        }
        
    })
  })
});
//run movie selected function 
const moviesSelected = movie =>{
  sessionStorage.setItem('movieId', movie);
  window.location.href = 'details.html';
  return false;
 } 
