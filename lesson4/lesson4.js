// Задание 1 
//Написать в браузере калькулятор (с кнопками и полями ввода).

function sum() {
    var arg1 = document.getElementById('arg1').value;
    var arg2 = document.getElementById('arg2').value;
    var result = document.getElementById('result');
    var sum = +arg1 + +arg2;
    result.innerHTML = sum;
}

function dif() {
    var arg1 = document.getElementById('arg1').value;
    var arg2 = document.getElementById('arg2').value;
    var result = document.getElementById('result');   
    var dif = +arg1 - +arg2;
    result.innerHTML = dif;
}

function mul() {
    var arg1 = document.getElementById('arg1').value;
    var arg2 = document.getElementById('arg2').value;
    var result = document.getElementById('result');    
    var mul = +arg1 * +arg2;
    result.innerHTML = mul;
}

function div() {
    var arg1 = document.getElementById('arg1').value;
    var arg2 = document.getElementById('arg2').value;
    var result = document.getElementById('result');    
    var div = +arg1 / +arg2;
    result.innerHTML = div;
}




// Задание 2 
// Добавить в задании "Угадай число" счетчик ходов.

var randNum = Math.round(Math.random() * 10000);
var score = 0;

function guessNumber(userNum){
    var userNum = prompt('Введите ваше число = ');
    +userNum;
    ++score;
    if (userNum==randNum) {
        alert('Вы угадали число!'+' Количество попыток - ' + score);   
        location.reload();
    } else if (userNum == 0 || isNaN(userNum)) {
        alert('Вы не ввели число');
        guessNumber();
    } else {
        if (userNum > randNum) {
            alert('Загаданное число меньше');
        }
        else {
            alert('Загаданное число больше');
        }
        guessNumber();
    }   
}


// Задание 3 
/*а) Напишите функцию, которая проверяет натуральное число или нет. Ввод числа выполнить из поля input. Добавить кнопку, которая будет выводить результат.*/

function naturalNum() {
    var number = document.getElementById('enterNum').value;
    var place = document.getElementById('placeForResult');
    if (+number == Math.round(number)) {
        place.innerHTML = ('Число натуральное')
    } else {
        place.innerHTML = ('Число ненатуральное');
    }
}

/* б) Выполните побитовые операции, сверьте результаты и объясните почему в следующих примерах именно указанные ответы:
5 & 3; // результат 1
10 & 8; // результат 8
3 | 6; // результат 7
8 | 9; // результат 9
~7; // -8
3 ^ 3; // 0
7 ^ 7; // 0
3 ^ 7; // 4
4 ^ 6; // 2
8 ^ 10; // 2
~3 & 4; // 4 
*/

// тут все понятно

/*в) Напишите функцию, которая будет генерировать пароль. Сгенерированный пароль должен выводиться в поле input.*/

function randomInt(min, max) {
    var rand = min + Math.random() * (max-min);
    rand = Math.round(rand);
    return rand;
}

function passGenerate() {
    var windowForPass = document.getElementById('resultPass');
    var elementsPass = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*";
    var numberSigns = elementsPass.length-1;
    var pass = '';
    for (i = 0; i < 10; i++) {
        pass = pass + elementsPass.charAt(randomInt(0,numberSigns));
    }
    windowForPass.setAttribute('value', pass);
    
}

//  Пользователь вводит слово (это может быть prompt или input). Напишите функцию, которая будет последнюю букву в слове делать заглавной. 

function lastSign() {
    var useWord = document.getElementById('enterUserWord');
    var returnWord = document.getElementById('returnWord');
    var useWordLen = useWord.length - 1;
    useWord = useWord.slice(0, useWordLen-1) + useWord[useWordLen].toUpperCase();
    returnWord.innerHTML = useWord;
}

/* д) Напишите функцию, которая будет преобразовывать текст такого вида var_test_start в CamelCase-нотацию (по другому в такой вид varTestStart). */

function CamelCaseText() {
    var userText = document.getElementById('enterCamelCaseText').value;
    var returnText = document.getElementById('returnCamelCaseText');
    var quanSigns = userText.length - 1;
    for (i=0; i<quanSigns; i++) {
        if (userText[i] == '_') {
            userText = userText.replace('_'+userText[i+1], userText[i+1].toUpperCase());
        }
    }
    returnText.innerHTML = userText;
}