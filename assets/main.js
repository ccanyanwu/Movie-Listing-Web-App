
document.addEventListener('DOMContentLoaded', loadMovies);
function loadMovies(e){
  fetch('https://api.themoviedb.org/3/trending/all/day?api_key=08a4a9a41d4afbbd8893e3e58fbfe4b2')
   .then(response => response.json()) 
   .then(
     response => {
       //select the main poster image 
      const UIjumbo = document.querySelector('.poster div a'),
            UItitle = document.querySelector('.poster div p') ;
      if(response.results[0].title){
        UIjumbo.innerHTML = `<img src="https://image.tmdb.org/t/p/w300/${response.results[0].backdrop_path}">  `;
        UItitle.innerHTML =`<p style="color:yellow" >${response.results[0].title}</p>`;
      } else if(response.results[0].name){
        UIjumbo.innerHTML = `<img src="https://image.tmdb.org/t/p/original> <p style="color:yellow" >${response.results[0].name}</p> `;
      }
 });
  e.preventDefault();
} 
//document.body.innerHTML = `<img src="https://image.tmdb.org/t/p/w300/9Qs9oyn4iE8QtQjGZ0Hp2WyYNXT.jpg">`;
    // Display file content in the console
    /*response.results.forEach(result=>{
      if(result.title){
      document.querySelector('.poster div a').innerHTML += `<img src="https://image.tmdb.org/t/p/original/oazPqs1z78LcIOFslbKtJLGlueo.jpg"><p>"${result.title}</p>`;
      //document.querySelector('.others div p').innerText = `${result.release_date}`;
      }
    });*/