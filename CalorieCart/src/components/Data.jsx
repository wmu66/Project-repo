import Papa from "papaparse";
import jsonData from "../data/data.json";
let curList = {};
let sliders = {
  "Caloric Value": [0, 1000],
  Fat: [0, 1000],
  Protein: [0, 1000],
  Carbohydrates: [0, 1000],
  "Dietary Fiber": [0, 1000],
  Sugars: [0, 1000],
};
let searchText = "";
let days = 1;

let defaultHealthAmounts;

export function setdefaultHealthAmount(gender) {
if (gender == "Male") {
  defaultHealthAmounts = {
    cals: 2500,
    fats: 80,
    fibers: 38,
    carbs: 400,
    sugars: 60,
    proteins: 55,
  }} else {
  defaultHealthAmounts = {
    cals: 2000,
    fats: 55,
    fibers: 25,
    carbs: 300,
    sugars: 40,
    proteins: 45,
  }
}}

let healthAmounts = {
  cals: 2000,
  fats: 70,
  fibers: 30,
  carbs: 400,
  sugars: 200,
  proteins: 55,
};

export function getHealthAmounts() {
  let calced = {
    cals: healthAmounts.cals * days,
    fats: healthAmounts.fats * days,
    fibers: healthAmounts.fibers * days,
    carbs: healthAmounts.carbs * days,
    sugars: healthAmounts.sugars * days,
    proteins: healthAmounts.proteins * days,
  };
  return calced;
}

export function getDefaultHealthAmounts() {
  return defaultHealthAmounts;
}
export function getListAmounts() {
  let cals = 0;
  let fats = 0;
  let proteins = 0;
  let carbs = 0;
  let fibers = 0;
  let sugars = 0;
  for (let i in curList) {
    if (curList[i].amount > 0) {
      cals += parseInt(curList[i]["Caloric Value"] * curList[i].amount);
      fats += parseInt(curList[i]["Fat"] * curList[i].amount);
      proteins += parseInt(curList[i]["Protein"] * curList[i].amount);
      carbs += parseInt(curList[i]["Carbohydrates"] * curList[i].amount);
      fibers += parseInt(curList[i]["Dietary Fiber"] * curList[i].amount);
      sugars += parseInt(curList[i]["Sugars"] * curList[i].amount);
    }
  }
  return {
    cals: cals,
    fats: fats,
    proteins: proteins,
    carbs: carbs,
    fibers: fibers,
    sugars: sugars,
  };
}

export function updateHealthAmounts(item, amount) {
  healthAmounts[item] = amount;
  console.log(healthAmounts);
}

export function resetSlider() {
  sliders = {
    "Caloric Value": [0, 1000],
    Fat: [0, 1000],
    Protein: [0, 1000],
    Carbohydrates: [0, 1000],
    "Dietary Fiber": [0, 1000],
    Sugars: [0, 1000],
  };
}
export function getData() {
  return jsonData;
}
export function setDays(i) {
  days = i;
}

export function getDays() {
  return days;
}

export function setList(list) {
  curList = list;
}
export function getList() {
  console.log("curlist");
  console.log(curList);
  return curList;
}
export function resetList() {
  curList = {};
}
export function addToList(i) {
  if (curList[i]) {
    curList[i].amount++;
  } else {
    curList[i] = jsonData[i];
    curList[i].amount = 1;
  }
  console.log(curList);
}
export function removeFromList(i) {
  if (curList[i]) {
    curList[i].amount--;
  }

  if (curList[i] && curList[i].amount === 0) {
    delete curList[i];
  }
}
export function updateSlider(substance, values) {
  sliders[substance] = values;
  console.log(sliders);
}

export function setSearch(text) {
  searchText = text;
}

export function getFilteredList() {
  let res = {};
  for (let i in jsonData) {
    let add = true;
    if (i.includes(searchText)) {
      for (let j in sliders) {
        if (jsonData[i][j] < sliders[j][0] || jsonData[i][j] > sliders[j][1]) {
          add = false;
        }
      }
      if (add) {
        res[i] = jsonData[i];
      }
    }
  }
  return res;
}

export default getData;
