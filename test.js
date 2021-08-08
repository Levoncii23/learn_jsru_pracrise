// let age = prompt('How you old?', 100);
// alert(`Тебе ${age} лет!`); // Тебе 100 лет!


// let isBoss = confirm("Your a here boss?")

// alert(isBoss)

// let s = "моя" + "string"
// alert(s)

// let apples = '2';
// let oranges = '3';

// // alert(apples + oranges);
// alert(+apples + +oranges);

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// alert(a)
// alert(b)
// alert(c)
// alert(d)


// "" + 1 + 0 //10
// "" - 1 + 0 //-1
// true + false //1
// 6 / "3" //2
// "2" * "3" //6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 //$45
// "4" - 2 //2
// "4px" - 2 //NaN
// 7 / 0 // infinity
// "  -9  " + 5 // -9  5
// "  -9  " - 5 // -14
// null + 1 //1
// undefined + 1 //NaN
// " \t \n" - 2 // -1


// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b) // 12

// let year = prompt("В каком году ты родился?");

// if (year == 1995) {
//     alert("Прям как Лёвчик");
// } else if (year < 1995) {
//     alert("рановато");
// } else {
//     alert("малыш");
// }

// let age = prompt("SDASD?")
// let accessAllowed = (age > 18) ? true : false;
// alert(accessAllowed)


// let align = prompt('What name?')
// let offname = (align == 'ECMAScript') ? 'True' : 'False';
// alert(offname);


// let num = prompt("input a value");
// if (num > 0) {
//     alert(1)
// } else if (num < 0) {
//     alert(-1)
// } else if (num == 0) {
//     alert(0)
// }

// let name = 'Ivan';
// alert(name  ?? "Аноним");

// let sum = 0;

// while (true) {
//     let value = +prompt("input value:")

//     if (!value) break;
    
//     sum += value
// }

// alert(sum)



// for (i = 2; i <= 10; i++) {
//     if(i % 2 == 0){
//         alert(i)
//     }
// }


// let i = 0;
// while(i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }


// while(true) {
//     num = prompt("input value");
//     if(!num || num > 100) {
//         break;
//     }
// }


// Объекты
// let user = {} // литерал объекта

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };

// varWithKey = "age";
// alert("name" in user);

// for (let key in user) {
//     alert(user[key])
// }

// user.isAdmin = true;
// delete user.age;

// alert( user.name );

// let key = prompt("Что хотите узнать о польлзователе?");
// alert(user[key]);

// alert("age" in user);
// alert("blabla" in user);

// let key = "age";
// alert( key in user );


// for (let key in user) {
//     // Ключи
//     alert(key);
//     // Значение ключей
//     alert(user[key]);
// }



// Задачи Объекты


// let user = [];
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;


// function isEmpty(obj) {
//     for (key in obj) {
//         return false;
//     }
//     return true;
// }

// schedule = {};
// schedule["8:30"] = "getup";

// alert( isEmpty(schedule) ); 


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pere: 130
// }

// let sum = 0;
// for (key in salaries) {
//     sum += salaries[key];
// }
// alert(sum);


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// }

// multiplyNumeric(menu);

// function multiplyNumeric(menu) {
//     for (let key in menu) {
//         if (typeof(menu[key]) === 'number') {
//             menu[key] *= 2
//             alert(menu[key]);
//         } 
//         continue;
//     }
// }