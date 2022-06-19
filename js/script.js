// "use strict"; Уроки 7 - 10

// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);
// var name = 'Ivan';

// {
//     let result = 50;
// }

// console.log(result);

// "use strict"; Урок 12 упражнение

// let storeName = "SimpleName";
// const storeDescription = {
//     budget: 10000,
//     employees: ["NameOne","NameTwo","NameThree"],
//     products: {
//         productOne: 5000,
//         productTwo: 4000,
//     },
//     open: true
// };

// "use strict"; Урок 13 самостоятельная работа

// const answers = [];
// answers [0] = prompt ("Как ваше имя", " ");
// answers [1] = +prompt ("Сколько вам лет", " ");
// answers [2] = prompt ("Введите желаемое имя пользователя", " ");

// let ageSUM = answers[1] + 5;
// let result = alert( answers[0] + ", Ваше предполагаемое имя: " + answers[2] + ageSUM);

// console.log(result);

// "use strict"; //Урок 14 самостоятельная работа (интерволяция в 62 строчке)

// const answers = [];
// answers [0] = prompt ("Как ваше имя", " ");
// answers [1] = +prompt ("Сколько вам лет", " ");
// answers [2] = prompt ("Введите желаемое имя пользователя", " ");

// let ageSUM = answers[1] + 5;
// let result = alert( `${answers[0]}, Ваше предполагаемое имя: ${answers[2] + ageSUM}`);

// console.log(result);

//3 commit
 "use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");

let personalMovieDB = {
    count : numberOfFilms,
    movies : {

    },
    actots : {

    },
    genres : [],
    privat : false
};

personalMovieDB.movies.last = prompt ('Один из последних просмотренных фильмов?', '');
personalMovieDB.movies.score = prompt ('На сколько оцените его?', '');

console.log (personalMovieDB.movies);


