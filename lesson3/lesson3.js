// Задание 1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);          // 1
c = (2+ ++a); alert(c);  // 5
d = (2+ b++); alert(d); // 4
alert(a);                        // 3
alert(b);                        // 3

// Ответ:
// при использовании префикса переменная изменяет свое значение сразу же, 
// при использовании постфикса переменная изменит свое значение при следующем обращении к ней.

// Задание 2

var a = 2;
var x = 1 + (a *= 2);
console.log(x);

// x = 1 + (a * 2) = 5

// Задание 3 
/* 3.	Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
o	если a и b положительные, вывести их разность;
o	если а и b отрицательные, вывести их произведение;
o	если а и b разных знаков, вывести их сумму;
ноль можно считать положительным числом. */

var a=prompt('vvedi a = '), b=prompt('vvedi b =');
a=+a; 
b=+b;
var result;
if (a>=0 && b>=0) {
    result = a - b;
} else 
    if (a<0 && b<0){
        result = a * b;
    } else 
        if ((a<0 && b>=0) || (a>=0 && b<0)) {
            result = a + b;
        }
console.log(result);

// Задание 4 
/* 4.	Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. */
// Эту задачу можно решить гораздо проще использовав циклы, 45 строчек кода превратятся в 5-6

var a=prompt('Vvedi a ot 0 do 15 = '), i = 0;
a= +a;
while(i != 16) {
    if (i>=a) {
        console.log(i);
    };
    ++i;
}

// Задание 5
// 5.	Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.


function sum(firstNum, secNum) {
    return firstNum + secNum;
}

function dif(firstNum, secNum) {
    return firstNum - secNum;
}

function mul(firstNum, secNum) {
    return firstNum * secNum;
}

function div(firstNum, secNum) {
    return firstNum / secNum;
}

// Задание 6 
//6.	Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'sum':
            return arg1 + arg2;
            break;
        case 'dif':
            return arg1 - arg2;
            break;
        case 'mul':
            return arg1 * arg2;
            break;
        case 'div':
            return arg1 / arg2;
            break;
    }
}

// Задание 7 
// 7.	* Сравнить null и 0. Попробуйте объяснить результат.

/* null это отсутствие значения, по сути то же самое что и undefined, но при явном преобразовании этих значений в числа null станет = 0, а undefined станет NaN


// Задание 8
//8.	*С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.*/

function power(val, pow) {
    if (pow == 0){
        return 1;
    }
    else if (pow < 0) {
        val = 1/val;
        pow *= -1;
        return power(val, pow);
    }
    else if (pow > 0) {
        --pow;
        return val * power(val, pow);
    }
}
    