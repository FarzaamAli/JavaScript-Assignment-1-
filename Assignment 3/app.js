(async ()=>{
    const response = await fetch("./data.json");
    const movies = await response.json();
    console.log(movies);

    const genreBtn = document.getElementById("genre");
    const yearBtn = document.getElementById("year");
    const languageBtn = document.getElementById("language");
    const ratingBtn = document.getElementById("rating");
   

function displaySearchResult(results){
  table.innerHTML =" ";
  counter = 1;
  results.forEach((movie)=>{
      let date =movie.release_date.split("-");
      let year = date[0];
      table.innerHTML += `
       <tr class="bg-white border-b dark:bg-gray-200 text-gray-900 dark:border-gray-700">
           <td class="px-6 py-3">${counter}</td>
           <td class="px-6 py-3">${movie.title}</td>
           <td class="px-6 py-3">${year}</td>
       </tr>
    `;
   counter++;
  
  })
}
    

function search(){
 
  let genre = document.getElementById("genre").value.toLowerCase();
  let year1 = document.getElementById("year").value.toLowerCase();
  let lang = document.getElementById("language").value.toLowerCase();
  let rate = document.getElementById("rating").value.toLowerCase();
  const results = movies.filter(function(movie){
    let date =movie.release_date.split("-");
    let year = date[0];
    return (
      movie.original_language.toLowerCase().includes(lang) &&
      movie.vote_average >= rate && movie.genres.toString(" ").toLowerCase().includes(genre) && year == year1
    )
  })

 console.log(genre);
 console.log(year1);
 console.log(lang);
 console.log(rate);
 displaySearchResult(results);
}
btnElem.addEventListener("click", search);

})();

