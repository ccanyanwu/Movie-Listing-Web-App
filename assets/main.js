
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
            UIjumbo.innerHTML = `<img src="https://image.tmdb.org/t/p/w300/${response.results[0].backdrop_path}">`;
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
        //check for the name, title, firstairdate and release date property 
        
        const UIothers = document.querySelector('section.others');
        if(sixTrending.name && sixTrending.first_air_date){
          UIothers.innerHTML += `
            <a href="" class="others_content">
              <img src="https://image.tmdb.org/t/p/w300/${sixTrending.backdrop_path}">
              <div>
                <p>${sixTrending.name}</p>
                <p>Release date :${sixTrending.first_air_date}</p>
              </div>
            </a>`
        } else {
          UIothers.innerHTML += `
            <a href="" class="others_content">
              <img src="https://image.tmdb.org/t/p/w300/${sixTrending.backdrop_path}">
              <div>
                <p>${sixTrending.title}</p>
                <p>Release date :${sixTrending.release_date}</p>
              </div>
            </a>`
        }
      });
 });
  e.preventDefault();
} 