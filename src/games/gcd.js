import {
  getName,
  greeting,
  getRandomNum,
  getUserAnswer,
  check,
  congratulations,
} from "../index.js";
export const gcdGame = () => {
  const name = getName();
  const condition = "Find the greatest common divisor of given numbers.";
  greeting(name, condition);
  let toWin = 3;
  while (toWin > 0) {
    let min = 1;
    let max = 100;
    const firstNum = getRandomNum(min, max);
    const secondNum = getRandomNum(min, max);
    const question = `${firstNum} ${secondNum}`;
    let rightAnswer;
    let a = Math.max(firstNum, secondNum);
    let b = Math.min(firstNum, secondNum);
    let remainder;
    while (remainder !== 0) {
      remainder = a % b;
      if (remainder !== 0) {
        a = b;
        b = remainder;
      } else {
        rightAnswer = b;
      }
    }
    console.log(`Question: ${question}`);
    const answer = parseInt(getUserAnswer());
    const isRight = check(name, answer, rightAnswer);
    if (isRight) {
      toWin -= 1;
    } else {
      return;
    }
  }
  congratulations(name);
};
