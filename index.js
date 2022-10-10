const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?',
]


function titleCased() {
  const newArr = [...tutorials]

  for (let i = 0; i < newArr.length; i++) {
    let words = newArr[i].split(' ')

    for (let index = 0; index < words.length; index++) {
      words[index] = words[index][0].toUpperCase() + words[index].slice(1)
    }
    newArr[i] = words.join(' ')
  }
  return newArr
}
console.log(titleCased())
