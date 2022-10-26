'use strict'

let randomNum
function randomGenerate() {                             // генератор рандомного числа от 1 до 100
    randomNum = (Math.round(Math.random() * 100));
}
randomGenerate();

let tries = 10;

function go() {
    tries--;
    if (tries >= 0) {

        let num = prompt('Угадай число от 1 до 100', 50); //  "Угадай число от 1 до 100"

        if (+num > randomNum) {
            alert('Загаданное число меньше, осталось попыток: ' + tries);
            go();

        } else if (+num < randomNum) {
            alert('Загаданное число больше, осталось попыток: ' + tries);
            go();

        } else if (+num == randomNum) {
            if (confirm('Поздравляю, Вы угадали! Хотите сыграть снова?')) {
                tries = 10;
                randomGenerate();
                go();

            } else {
                alert('До свидания!');
            }

        } else if (typeof num !== 'number') {
            alert('Введите число!');
            go();
        }
    } else if (tries == -1) {

        if (confirm('Закончились попытки, хотите сыграть снова?')) {
            tries = 10;
            randomGenerate();
            go();

        } else {
            alert('До свидания!');
        }
    }
}
go();