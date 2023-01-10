let numberOfFilms = +prompt("сколько вильмов вы уже посмотрели", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const a = prompt("last seen film", ''),
      b = prompt('score', ''),
      c = prompt("last seen film", ''),
      d = prompt('score', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);