document.addEventListener('DOMContentLoaded', function(){
  //alert('cjai');
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=08a4a9a41d4afbbd8893e3e58fbfe4b2&language=en-US&page=10').
  then(res => res.json()).
  then(
    res => {
      res.page = 2;
      //document.body.innerHTML = `${res.results[0].popularity}`
      res.results.forEach(re =>{
      document.body.innerHTML += `${re.title}<br>`;
     });
    });
});