import readlineSync from "readline-sync";

export const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const evenGame = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let toWin = 3;
  const minNum = 1;
  const maxNum = 100;

  while (toWin > 0) {
    const question = getRandomNum(minNum, maxNum);
    console.log(`Question: ${question}`);
    const rightAnswer = question % 2 === 0 ? "yes" : "no";
    const answer = readlineSync.question("Your answer: ");

    if (rightAnswer === answer) {
      toWin -= 1;
      console.log("Correct!");
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  if (toWin === 0) {
    console.log(`Congratulations, ${name}!`);
  }
};
