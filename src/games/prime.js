import {
  getName,
  greeting,
  getRandomNum,
  getUserAnswer,
  check,
  congratulations,
} from '../index.js'
const isPrime = (num) => {
  if (num < 2) {
    return false
  }

  if (num % 2 === 0) {
    return false
  }
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
export const primeGame = () => {
  const name = getName()
  const condition =
    'Answer "yes" if given number is prime. Otherwise answer "no"'
  greeting(name, condition)
  let toWin = 3
  while (toWin > 0) {
    let min = 1
    let max = 100
    const num = getRandomNum(min, max)
    const question = `${num}`
    let rightAnswer
    if (isPrime(num)) {
      rightAnswer = 'yes'
    } else {
      rightAnswer = 'no'
    }
    console.log(`Question: ${question}`)
    const answer = getUserAnswer()
    const isRight = check(name, answer, rightAnswer)
    if (isRight) {
      toWin -= 1
    } else {
      return
    }
  }
  congratulations(name)
}
