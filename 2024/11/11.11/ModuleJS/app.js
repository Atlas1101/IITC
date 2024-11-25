import { add, sub, divide, multiply } from "./maths.js";

console.log("we out hereeeeeee");
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(divide(1, 2));
console.log(multiply(3, 2));

function doIt(value) {
  //   let time = 1000;
  let current = value;
  let time = 1000;

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      if (i === 0) {
        console.log(current);
        // current += 1;
      } else console.log(current);
      current += 1;
    }, time);
    time += 500;
  }
}

doIt(1);
