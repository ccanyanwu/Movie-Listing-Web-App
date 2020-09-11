   //function to get movie details 
   const getMovieDetails = () =>{
     let movieID = sessionStorage.getItem('movieId');
     //fetch movie details using the ID
     fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=08a4a9a41d4afbbd8893e3e58fbfe4b2&language=en-US`)
    .then(response => response.json())
     .then(response => {
       //get image poster 
       const poster = response.poster_path;
      
      // document.body.innerHTML =`<img src="https://image.tmdb.org/t/p/original/${poster}">`;
       const title = response.title,
             overView = response.overview, 
             releaseDate = response.release_date,
             voteAverage = response.vote_average,
             runTime = response.runtime; ;
      
       //get movie genrw
       let UIgenre ='';
       response.genres.forEach(genre =>{
         UIgenre += genre.name + ", ";
       });
        
       //get spoken languages 
       let spokenLanguage ='';
       response.spoken_languages.forEach(language =>{
         spokenLanguage += language.name + ", ";
       });
       
     //insert all variables into the DOM 
     document.querySelector('article').innerHTML = `
     <img src="https://image.tmdb.org/t/p/original/${poster}">
     <section>
     <h1>${title}</h1> 
     <ul>
       <li>Overview <span>: ${overView}</span></li>
       <li>Genre(s) <span>: ${UIgenre}</span></li>
       <li>Release date <span> : ${releaseDate} </span></li>
       <li>Language <span>: ${spokenLanguage} </span></li>
       <li>Vote Average <span> :  ${voteAverage} / 10</span></li>
       <li>Runtime <span>:  ${runTime} minutes </span></li>
     </ul> 
    </section>
     `;
     }) 
   } 
   

//add event listener to dom
document.addEventListener('DOMContentLoaded', getMovieDetails);
