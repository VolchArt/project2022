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
//  "use strict";

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");

// let personalMovieDB = {
//     count : numberOfFilms,
//     movies : {

//     },
//     actots : {

//     },
//     genres : [],
//     privat : false
// };

// // personalMovieDB.movies.last = prompt ('Один из последних просмотренных фильмов?', '');
// // personalMovieDB.movies.score = prompt ('На сколько оцените его?', '');
// // personalMovieDB.movies.last1 = prompt ('Один из последних просмотренных фильмов?', '');
// // personalMovieDB.movies.score1 = prompt ('На сколько оцените его?', '');
//  const last = prompt ('Один из последних просмотренных фильмов?', ''),
//  score = prompt ('На сколько оцените его?', ''),
//  last1 = prompt('Один из последних просмотренных фильмов?', ''),
//  score1 = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[last] = score;
// personalMovieDB.movies[last1] = score1;
// console.log (personalMovieDB);

// "use strict"; //урок 20 условия

// if (4==9) { //условие превращает любой тип данных в булиновый
//     console.log('Ok');
// } else {
//     console.log ('Error');
// }

//const num = 100;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Error too much');
// } else {
//     console.log('Ok!');
// }

//(num === 50) ? console.log('Ok!') : console.log('Error');

// const num = 100;
// switch (num) { //всегда строгое соответствие
//     case 49:
//         console.log('Error');
//         break;
//     case 100:
//         console.log('Too much')
//         break;
//     case 50:
//         console.log('Great!');

// }

//урок 21 логические операторы.
// оператор && всегда возвращает первое ложное значение если оно есть, дальше код не идет
// если все аргументы true, то он возвращает последний такой аргумент. "И" запинается на лжи, "Или запинается на правде"

//урок 22 циклы + урок 23. Практические задачи

//"use strict";
//ЗАДАНИЕ 1
//let result = 4;
// while (result < 10) {
//     result++;
//     console.log(result);
// }

// do {
//     result++;
//     console.log(result);
// } while (result < 10);

// for (let i=5; i<=10; i++) {
//     console.log(i);
// }
//ЗАДАНИЕ 2
// for (let i = 20; i >= 10; i--) {

//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }
//ЗАДАНИЕ 3
// for (let i = 2; i <= 10; i++) {

//     if (i % 2 == true) {
//         continue;
//     } 
//         console.log(i);
// }


//ЗАДАНИЕ 4
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i < 16) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
    
// }

// let result = [];
// for (let i = 5; i <= 10; i++) {
//     result[i - 5] = i;
// }
// console.log(result);

//НИКИТЫ ПРАКТИКА
// "use strict";

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
        
//     }
//     if (i === lenght-1) {
//         result += '\n';
//         for (let k = lenght-1; k >= 0; k--) {
//             for (let l = 0; l<k; l++) {
//                 result+="*";
//             }
//             result += "*";
//             result += '\n';
//         }
        
//     }
//     result += '\n';
// }
// console.log(result);

//Практика с *

//ЗАДАНИЕ1
// "use strict";

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i<arr.length; i++) {
//     result[i]=arr[i];
// }
// console.log(result);

//ЗАДАНИЕ2
// "use strict";
// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i<data.length; i++) {
//     if (typeof data[i] === 'string') {
//         data[i] += ' - done';
//     } else {
//     data[i]= data[i] * 2;
//     }
// }
// console.log(data);
//ЭКСПЕРИМЕНТЫ
// let a='2';
// const arr =  [0,'2'];

// if (a && arr[1] == true) {
//     console.log ('Ура!');
// } else {
//     console.log (typeof arr[1], typeof a );
// }

//ЗАДАНИЕ 3
// "use strict";
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i-1]=data[data.length-i];
  
// }
// console.log(result);

//Практика с **
// const lines = 5;
// let result = '';

// for (let i = 0; i<=lines;i++) {
//     for (let j = 0; j<lines-i;j++) {
//         result += " ";
//     }
//     for (let k = 0; k <2*i+1; k++) {
//         result +="*";
//     }
//     result += "\n";
// }
// console.log(result);

//УРОК 24 ПРАКТИКА
//  "use strict";

//  const questions = ['Сколько фильмов вы уже посмотрели?',
//      'Один из последних просмотренных фильмов?',
//      'На сколько оцените его?'
//  ];
//  let personalMovieDB = {
//      count: '',
//      movies: {

//      },
//      actors: {

//      },
//      genres: [],
//      privat: false
//  };

//  first: for (let i = 0; i < 2; i++) {
//      if (i==0) {
//          personalMovieDB.count = prompt(questions[i] + '');
//          personalMovieDB.movies[prompt(questions[i + 1] + '')] = prompt(questions[i + 2] + '');
//      } else {
//          //if (i >= 1 && personalMovieDB.count != '')  {
//              personalMovieDB.movies[prompt(questions[i] + '')] = prompt(questions[i + 1] + '');
//          //}
//      }
//     //  if (personalMovieDB.count != null || personalMovieDB.movies !=null || personalMovieDB.movies !='' || personalMovieDB.count !='') {
//     //     console.log('Great!');
//     //  } else {
//     //     console.log ('Error');
//     //     i--;
//     //  }
//  }
//  console.log(personalMovieDB.movies);
//  console.log(personalMovieDB.count);

// personalMovieDB.movies[last] = score;
// personalMovieDB.movies[last1] = score1;
// console.log (personalMovieDB);

//Практика по учебнику, урок 24

 "use strict";

 const questions = ['Сколько фильмов вы уже посмотрели?',
     'Один из последних просмотренных фильмов?',
     'На сколько оцените его?'
 ];
 let personalMovieDB = {
     count: '',
     movies: {

     },
     actors: {

     },
     genres: [],
     privat: false
 };

 const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
 personalMovieDB.count = numberOfFilms;
 for (let i = 0; i < 2; i++) {
     const whatFilm = prompt('Один из последних просмотренных фильмов?', ''),
         filmScore = prompt('На сколько оцените его', '');
     if (whatFilm != null && whatFilm != '' && filmScore != null && filmScore != '' && whatFilm.length < 50) {
         personalMovieDB.movies[whatFilm] = filmScore;
         console.log('Done');
     } else {
         i--;
         console.log('Error');
     }
 }
 console.log(personalMovieDB.count);
 if (personalMovieDB.count < 10) {
    console.log ('Мало фильмов'); 
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log ('Нормально!');
 } else if (personalMovieDB.count >= 30) {
    console.log ('Ого как много');
 } else {
    console.log('Ошибка');
 }
 console.log(personalMovieDB);