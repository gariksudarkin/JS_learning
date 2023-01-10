let numberOfFilms = +prompt("сколько вильмов вы уже посмотрели", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// const a = prompt("last seen film", ''),
//       b = prompt('score', ''),
//       c = prompt("last seen film", ''),
//       d = prompt('score', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


for (let i = 0; i < 2; i++) {
    const a = prompt("last seen film", ''),
        b = prompt('score', '');


    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('пользователь все ввел правильно');
    } else {
        i--;
        console.log 
    }
       
}

console.log(personalMovieDB);