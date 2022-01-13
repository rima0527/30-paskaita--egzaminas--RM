/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor(title, director, budget) {
        this.title = title;
        this.director =director;
        this.budget = budget;
}

wasExpensive(movie){
    if (movie.budget > 100){
      return true
      }
    else{
      return false
      }
    }

    logQuote(movie){
      console.log();
    }
  }

  function createMovie(title, director, budget){
    return{
        title:title,
        director:director,
        budget:budget,
        wasExpensive(movie){ 
            console.log(this.budget);
            return movie.budget < this.budget
            console.log(this.budget);
        }

  }

let movies = [];
let starWars = newMovie("Star Wars", "James", 262);
let matrix = newMovie("Matrix", "JordanX", 54);
let titanic = newMovie("Titanic", "Rezisierius2", 1000);
let born = newMovie("Born", "Rezisierius3", 42);
let harryPotter = newMovie("Harry potter", "Rezisierius4", 100);


movies.push(starWars, matrix, titanic, born, harryPotter);
console.log(movies);

function wasExpensive(movie){
    for (i = 0; i < movies.length; i++){
      if (movies[i].budget >1000){
        return true
      }
      else {
        return false
      }
    }
  }
  
