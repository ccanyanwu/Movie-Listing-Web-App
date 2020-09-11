//page load event listener 
document.addEventListener('DOMContentLoaded', loadMovies);
function loadMovies(e){
  fetch('https://api.themoviedb.org/3/trending/all/day?api_key=08a4a9a41d4afbbd8893e3e58fbfe4b2')
   .then(response => response.json()) 
   .then(
     response => {
       //select the main poster image 
      const UIjumbo = document.querySelector('.poster div a'),
            UItitle = document.querySelector('.poster div p') ;
            //attach the image to the ui
            UIjumbo.innerHTML = `<img src="https://image.tmdb.org/t/p/w300/${response.results[0].poster_path}" alt="${response.results[0].poster_path}" onClick="moviesSelected(${response.results[0].id})">`;
            //condition to check if object has the name or title property 
      if(response.results[0].title){
        UItitle.innerHTML =`<p>${response.results[0].title}</p>`;
      } else if(response.results[0].name){
        UItitle.innerHTML =`<p>${response.results[0].name}</p>`;
      }
      //slice the response array to get the next 6 trending movies 
    
      const sixTrendings = response.results.slice(1,7);
      //loop through sixTrendings and append selected property values to the DOMContentLoaded
      sixTrendings.forEach(sixTrending => {
        const UIothers = document.querySelector('section.others');
        //convert dates to month and year 
        let releaseDate = `${new Date(sixTrending.release_date).toLocaleString('default', {month:'long'})} ${new Date(sixTrending.release_date).getFullYear()}` ;
        let firstAirDate = `${new Date(sixTrending.first_air_date).toLocaleString('default', {month:'long'})} ${new Date(sixTrending.first_air_date).getFullYear()}` ;
        //check for the name, title, firstairdate and release date property 
        if(sixTrending.name && sixTrending.first_air_date){
          UIothers.innerHTML += `
            <a  onClick="moviesSelected(${sixTrending.id})" class="others_content">
              <img src="https://image.tmdb.org/t/p/original/${sixTrending.poster_path}">
              <div>
                <p>${sixTrending.name}</p>
                <p>Aired : ${firstAirDate}</p>
              </div>
            </a>`
            
        } else if(sixTrending.title && sixTrending.release_date) {
          UIothers.innerHTML += `
            <a  onClick="moviesSelected(${sixTrending.id})"  class="others_content">
              <img src="https://image.tmdb.org/t/p/original/${sixTrending.poster_path}">
              <div>
                <p>${sixTrending.title}</p>
                <p>Released : ${releaseDate}</p>
              </div>
            </a>`
        }
        
      });
 })
 .catch(err => {
   console.log(err);
 });
 
  e.preventDefault();
} 

//run movie selected function 
const moviesSelected = movie =>{
  sessionStorage.setItem('movieId', movie);
  window.location.href = 'assets/details.html';
  return false;
 } 
