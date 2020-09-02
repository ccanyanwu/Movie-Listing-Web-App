
document.addEventListener('DOMContentLoaded', loadMovies);
function loadMovies(e){
  fetch('https://api.themoviedb.org/3/trending/all/day?api_key=08a4a9a41d4afbbd8893e3e58fbfe4b2')
   .then(response => response.json()) // Access and return response's text content
   .then(response => {
    //document.body.innerHTML = `<img src="https://image.tmdb.org/t/p/w300/9Qs9oyn4iE8QtQjGZ0Hp2WyYNXT.jpg">`;
    // Display file content in the console
    response.results.forEach(result=>{
      if(result.title){
      document.body.innerHTML += `<h1 style="background :" >${result.title}</h1><img src="https://image.tmdb.org/t/p/w300/oazPqs1z78LcIOFslbKtJLGlueo.jpg">`;
      
      }
    });
});
  e.preventDefault();
}
