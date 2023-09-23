const cities = ["New York", "Washington", "Los Angeles", "Miami"];
const temp = [];
let list = document.getElementById("list");

for (let i = 0; i < cities.length; i++) {
  let tempCity = prompt(`Enter the temperature for ${cities[i]}`);
  tempCity = Number(tempCity);
  temp.push(tempCity);
}

for (let index = 0; index < cities.length; index++) {
  let listItem = document.createElement("li");
  listItem.textContent = `Temperarure in ${cities[index]} is ${temp[index]} C`;
  list.appendChild(listItem);
}

let maxTemp = temp[0];

for (let max of temp) {
  if (max > maxTemp) {
    maxTemp = max;
  }
}

let maxTempDiv = document.createElement("div");
maxTempDiv.textContent = `Max temperature is ${maxTemp} C`;
list.after(maxTempDiv);

let minTemp = temp[0];

for (let min of temp) {
  if (min < minTemp) {
    minTemp = min;
  }
}

let minTempDiv = document.createElement("div");
minTempDiv.textContent = `Min temperature is ${minTemp} C`;
maxTempDiv.after(minTempDiv);
