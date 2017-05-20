// Задание 2

var nameSite = "Name site";
var menuSite = ['Main', 'Contacts', 'Catalog'];
var amountArticle = 5;
var topic = "В мире животных";
var usualArticleText = "Lorem";
var hotArticleText = "Lorem";
var humorArticleText = "lorem";
var seriousArticleText = "lorem";
var imageArticle = true;
var priceProduct = 1001;



// Задание 3

var sad = 'This is Sparta!!!';
var result = "true";
var entage = 20;
var header = 'Заголовок новой статьи';
var zipCode = 983456;
prompt('Введите хоть что-нибудь');
alert('Вы точно все ввели?');
var var1 = 25;
var var2 = 'Орехов';
alert('Вы нашли var1 var2');
var var3 = '45';
var3 = +var3;
var var4 = 20;
console.log (var3+var4);   // Этот результат проверить. Должно получиться 65.

// Задание 4

var art = "25 / 5";  // String
var same = null;  // object
var scoop;  // undefined
var flag = 0; // number
var plat = true; // boolean
var devid = 34 / 7;  //number
var person = {'lastname': 'Ivan'}; // object
var fruits = ['apple']; // object
var iceCream = function() { alert('Я люблю мороженое') }; // function
iceCream();

// Задание 5

alert('В первой строке ' + '“JavaScript is a high-level, dynamic, untyped, and interpreted programming language”.'.length +' символов');
alert('Во второй строке ' + '“Netscape Communications realized that the Web needed to become more dynamic”.'.length +' символов');
alert('В третьей строке ' + '“JavaScript was realized in ten days”.'.length +' символов');

// Задание 6

var string1 = "console.log";
var string2 = "Hello World!";
var string3 = "I need more code on JavaScript";

var task6String1 = string1.toUpperCase();
var task6String2 = string2.toUpperCase();
var task6String3 = string3.toUpperCase();

// Задание 7

var task7String1 = string1.toLowerCase();
var task7String2 = string2.toLowerCase();
var task7String3 = string3.toLowerCase();

// Задание 8

var task8String1 = string1[0].toUpperCase();
var task8String2 = string2[0].toUpperCase();
var task8String3 = string3[0].toUpperCase();


// Задания из методички

/* 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в
градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf –
температура по Фаренгейту, Tc – температура по Цельсию */

var Tc = prompt('Введи температуру по Цельсию', 0);
var Tf = (9/5)*Tc+32;
alert('Вот температура по Фаренгейту = ' + Tf);

/* 3. Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать
 значение из name в admin. Вывести admin (должно вывести «Василий»). */

var admin, name;
name = "Василий";
admin = name;
console.log(admin);

/* 4. Чему будет равно JS-выражение 1000 + "108";
    Будет равно 1000108 */

var a = 1000;
var b = '108';
console.log(a+b);

