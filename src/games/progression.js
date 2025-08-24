import {
  getName,
  greeting,
  getRandomNum,
  getUserAnswer,
  check,
  congratulations,
} from "../index.js";

export const progressionGame = () => {
  const name = getName();
  const condition = "What number is missing in the progression?";
  greeting(name, condition);
  let toWin = 3;
  while (toWin > 0) {
    const minLength = 5;
    const maxLength = 10;
    let progressionLength = getRandomNum(minLength, maxLength);
    let progression = [];
    let start = getRandomNum(1, 100);
    progression[0] = start;
    let step = getRandomNum(-10, 10);
    for (let i = 1; i < progressionLength; i++) {
      progression[i] = start + step * i;
    }
    let missingIndex = getRandomNum(0, progressionLength - 1);
    let missingElement = progression[missingIndex];
    let rightAnswer = missingElement;
    progression[missingIndex] = "..";
    let question = `Question: ${progression[0]}`;
    for (let i = 1; i < progressionLength; i++) {
      question = `${question} ${progression[i]}`;
    }
    console.log(question);
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
