//Задание 1
// Выведите числа от 1 до 10 в консоль
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i += 1;
// }

//Задание 2
// // Выведите чётные числа от 1 до 20 в консоль
// let i = 2;
// while (i <= 20) {
//   console.log(i);
//   i += 2;
// }

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i -= 1;
// }

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
// let i = 1;
// while (i <= 10) {
//   console.log(`${i} * 5 = ${5 * i}`);
//   i += 1;
// }

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i += 1) console.log(array[i]);

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i <= numbers.length; i += 1) {
//   sum += i;
// }
// console.log(sum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
// let animals = ["Кот", "Рыба", "Лемур"];
// let perfectAnimals = [];
// for (let i = 0; i < animals.length; i += 1) {
//   perfectAnimals[i] = animals[i] + " - прекрасное животное";
// }
// console.log(perfectAnimals);

//Задание 9
// Выведите символы в строке в консоль
const str = "Hello";
// for (let i = 0; i < str.length; i += 1) console.log(str[i]);

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
// for (let item of array) {
//   console.log(item);
// }

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ["Hello, world!", "How are you?"];
// for (let sentence of sentences) {
//   let word = sentence.split("," && " ");
//   for (i = 0; i < word.length; i++) {
//     console.log(word[i]);
//   }
// }

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
// let sum = 0;
// for (let number of numbers) sum += number;
// console.log(sum);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ["apple", "banana", "cherry"];
// for (let item of list) {
//   console.log(item.length);
// }

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр

// for (let word of words) {
//   console.log(word.toUpperCase());
// }

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = "Hello, world!";
let vowelCount = 0;
const vowels = ["a", "e", "i", "o", "u"];
for (let vowel of vowels) {
  if (greeting.includes(vowel)) vowelCount += 1;
}
// console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ["Hello", "world", "!"];
// console.log(words.join(" "));

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i += 1;
// }

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
// let i = 10;

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, 4, 5];
let allPositive = true;
// let i = 0;
// while (i <= allNumbers.length && allPositive) {
//   if (allNumbers[i] < 0) allPositive = false;
//   i++;
// }
// if (allPositive) console.log("Все числа положительные");
// else console.log("Не все числа положительные");

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
// i = 0;
// do {
//   console.log(random[i]);
//   i++;
// } while (i <= random.length && random[i] > 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
// i = 1;
// do {
//   if (i % 3 !== 0) console.log(i);
//   i++;
// } while (i <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
// let digit = 0;
// let sum = 0;
// do {
//   digit = prompt("Введите число");
//   digit = Number(digit);
//   sum += digit;
// } while (sum <= 100);
// console.log(sum);

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
function changeBackgrd() {
  let h4 = document.getElementsByTagName("h4");
  for (item of h4) {
    item.style.background = "blue";
  }
}
document.addEventListener("click", changeBackgrd);

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
while (randomString.length < 6) {
  randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}
console.log(randomString);
