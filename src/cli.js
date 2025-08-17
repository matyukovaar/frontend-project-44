import readlineSync from "readline-sync";
export default () => {
  const name = readlineSync.question("May I have your name? ");
  let greeting = "Hello, " + name + "!";
  console.log(greeting);
};
