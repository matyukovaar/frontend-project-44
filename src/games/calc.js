import {
  getName,
  greeting,
  getRandomNum,
  getUserAnswer,
  check,
  congratulations,
} from "../index.js";
export const calcGame = () => {
  const name = getName();
  const condition = "What is the result of the expression?";
  greeting(name, condition);
  let toWin = 3;
  while (toWin > 0) {
    const mathOper = ["+", "-", "+"];
    const randomIndex = Math.floor(Math.random() * mathOper.length);
    const oper = mathOper[randomIndex];
    let min = 1;
    let max = 100;
    const operand1 = getRandomNum(min, max);
    const operand2 = getRandomNum(min, max);
    const question = `${operand1} ${oper} ${operand2}`;
    let rightAnswer;
    switch (oper) {
      case "+":
        rightAnswer = operand1 + operand2;
        break;
      case "-":
        rightAnswer = operand1 - operand2;
        break;
      case "*":
        rightAnswer = operand1 * operand2;
        break;
    }
    console.log(`Question: ${question}`);
    const answer = parseInt(getUserAnswer());
    const isRight = check(name, answer, rightAnswer);
    if (isRight) {
      toWin -= 1;
    } else {
      return;
    }
    congratulations(name);
  }
};
