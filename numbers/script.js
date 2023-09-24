i = -10;
const numbers = [];
while (i <= 10) {
  numbers.push(i++);
}

// for (i=0; i<numbers.length; i++)
// {if (numbers[i]<0) {
//   numbers.splice(i,1)
//   i--
// }
// }

for (i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] ** 2;
}

for (i = 1; i < numbers.length; i++)
  for (j = 0; j < i; j++)
    if (numbers[i] < numbers[j]) {
      let x = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = x;
    }

const result = [];
for (let i of numbers) {
  let noRepeat = true;
  for (let j of result) {
    if (i === j) {
      noRepeat = false;
      break;
    }
  }
  if (noRepeat) {
    result.push(i);
  }
}

console.log(numbers);
console.log(result);
