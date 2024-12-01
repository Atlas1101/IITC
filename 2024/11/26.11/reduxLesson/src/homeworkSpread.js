const arry = [1, 2, 3, 4, 5];
const arry2 = [...arry];
console.log(arry2);

const merged = [...arry, ...arry2];
console.log(merged);

const addEl = [234333, ...arry];
console.log(addEl);

const addElend = [234333, ...arry];
console.log(addElend);

//5
const threeArry = [...arry, ...arry, ...arry];
console.log(threeArry);

//6 see three

//7
const arry3 = [...arry2.slice(1)];
console.log(arry3);

//8
const arry4 = [...arry2.slice(-3)];
console.log(arry4);
//9
const reversedArry = [...arry2].reverse();
console.log(reversedArry);

//10asd
console.log(arry2);

const replacedValArry = [arry2[0], 33, ...arry2.slice(2)];
console.log(replacedValArry);

//11
const aString = "hello";
const arry5 = [...aString];
console.log(arry5);

//12
const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const flatten = [...nestedArray[0], ...nestedArray[1], ...nestedArray[2]];
console.log(flatten);

//13
const dontLikeLast = [...flatten.slice(0, -1)];
console.log(dontLikeLast);

// 14???
console.log(dontLikeLast);
const shakeup = [...dontLikeLast.slice(0, 8)];
console.log(shakeup);

//15??
const arry6 = [1, 2, 2, 3, 4, 5, 5, 5, 5];
let uniqueArry = [...new Set(arry6)];
console.log(uniqueArry);

//16
const arry7 = [1, 2, 3, 4, 5];
const middle = [...arry7.slice(1, -1)];
console.log(middle);

//17
const arry8 = [1, 2, 3, 4, 5];
const last = [...arry8.slice(1), arry8[0]];
console.log(last);

//18
const arry9 = [1, 2, 3, 4, 5];
const newarry9 = ["hello", ...arry9];
console.log(newarry9);

//19
const mergeArrys = (...args) => {
  let newArry = [].concat(...args);
  return newArry;
};
console.log(mergeArrys([1, 2, 3], [4, 5, 6], [7, 8, 9]));

//20
const arry10 = [1, 2, 3, 4, 5];
const arry10new = [...arry10.sort(() => Math.random() - 0.5)];
console.log(arry10new);

//objects spread

//1
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
const objNew = { ...obj };
console.log(objNew);

//2
const obj3 = {
  a: 1,
  b: 2,
  c: 3,
};
const obj3B = { f: 4, g: 5, h: 6 };
const obj3New = { ...obj3, ...obj3B };
console.log(obj3New);

//3
const fruit = { apple: 1, banana: 2, orange: 3 };
const fruity = { ...fruit, apple: 4 };
console.log(fruity);
console.log(fruit);

//4

const fruit2 = { apple: 1, banana: 2, orange: 3 };
const fruity2 = { ...fruit2, grape: 5 };
console.log(fruity2);
console.log(fruit2);

//5
const stones = { ruby: 1, emerald: 2, diamond: 3 };
const rocks = {
  igneous: 1,
  sedimentary: 2,
  metamorphic: 3,
};
const clouds = {
  cirrus: 1,
  stratus: 2,
  cumulus: 3,
};

const rocksAnd = { ...stones, ...rocks, ...clouds };
console.log(rocksAnd);
console.log(stones);

//6

const obj4 = { a: 1, b: 2, c: 3 };
const shallowCopy = { ...obj4 };
console.log(shallowCopy);

//7
let cutlery = { fork: 0, spoon: 39, knife2: 48 };
const { fork, ...objNoFork } = cutlery;
console.log(objNoFork);

//8
let plants = { rose: 1, daisy: 2, lily: 3 };
const { rose, daisy, ...objNoRose } = plants;
console.log(objNoRose);
const swappedPlants = { ...plants, rose: daisy, daisy: rose };
console.log(swappedPlants);

//9
let green2 = { rose: 1, daisy: 2, lily: 3 };
const { daisy: daisyobj, ...plants3 } = green2;
console.log(plants3);
console.log(daisyobj);

//10
