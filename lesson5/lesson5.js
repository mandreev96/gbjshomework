// 1.	Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function sepOfNumber() {
    var num = document.getElementById('enterNum').value;
    var resultNum = document.getElementById('resultSepOfNumber');
    var result = {};
    if (num > 999) {
        resultNum.innerHTML = "Число больше 999";
    } else if (num < 0) {
        resultNum.innerHTML = 'Введите число больше 0';
    }
    else {
        result.Сотни = Math.floor(num/100);
        result.Десятки = Math.floor((num % 100)/10);
        result.Единицы = (num%100)%10;
        resultNum.innerHTML = 'Сотни: '+ result.Сотни+', Десятки: '+result.Десятки+', Единицы: '+result.Единицы; 
    }
}

// Дано натуральное число N. Вычислите сумму его цифр. При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).


function sumNumeral(num) {
    var result, num;
    var a,b,c;
    a = num / 10;
    b = a - Math.floor(a);
    c = b * 10;
    c=Math.round(c);
    num = num - c;
    num = num / 10;
    result = c; 
    if ((num / 10) >= 0.1) {
        result += sumNumeral(num);
    }
    return result;
}


function windowSumNumeral() {
    var num = document.getElementById('enterSumNumeral').value;
    var resultSumNumeral = document.getElementById('resultSumNumeral');
    resultSumNumeral.innerHTML = sumNumeral(num);
}

