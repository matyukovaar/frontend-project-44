import readlineSync from 'readline-sync'

export const getName = () => {
  const name = readlineSync.question('May I have your name? ')
  return name
}
export const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const greeting = (name, condition) => {
  console.log(`Hello, ${name}!`)
  console.log(condition)
}
export const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ')
  return answer
}
export const check = (name, answer, rightAnswer) => {
  if (rightAnswer === answer) {
    console.log('Correct!')
    return true
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`,
    )
    console.log(`Let's try again, ${name}!`)
    return false
  }
}
export const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`)
}
