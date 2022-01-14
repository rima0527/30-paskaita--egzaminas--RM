/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
      this.title = title;
      this.director = director;
      this.budget = budget;
      this.wasExpensive = function () {
        return this.budget > 1000000000;
      };
    }
  }
  
  let movies = [];
  let starWars = new Movie('Star Wars', 'James', 26200000);
  let matrix = new Movie("Matrix", "JordanX", 54000000000);
  let titanic = new Movie("Titanic", "Rezisierius2", 10000000000);
  let born = new Movie("Born", "Rezisierius3", 42000000);
  let harryPotter = new Movie("Harry potter", "Rezisierius4", 100000000);
  
  movies.push(starWars, matrix, titanic, born, harryPotter);
  
  var i = 0;
  
  for (i = 0; i < movies.length; i++) {
    console.log(movies[i].title + '   ' + movies[i].budget + ' mln   ' + movies[i].wasExpensive());
   }
      
    
  