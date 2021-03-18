const readline = require('readline-sync')
let note = 0

console.log('bienvenue mousaillon dans le jeux de folie le plus folisant du monde')


/*--------------------QUESTION 1-------------------------*/
console.log('Question 1: Le C++ est un:\n1: langage\n2: compilateur')

let answer = readline.question('Réponse :')
while(Number(answer) < 1 || Number(answer) > 2 || isNaN(Number(answer))) {
  console.log('\nVeuillez choisir entre la réponse \"1\" ou \"2\"')
  answer = readline.question('Réponse :')
}

answer === '1' ? note += 1 : note += 0

/*--------------------QUESTION 2-------------------------*/
console.log('\nQuestion 2: TypeScript est une évolution de Javascript:\n1: Vrai\n2: Faux')

answer = readline.question('Réponse :')
while(Number(answer) < 1 || Number(answer) > 2 || isNaN(Number(answer))) {
  console.log('\nVeuillez choisir entre la réponse \"1\" ou \"2\"')
  answer = readline.question('Réponse :')
}

answer === '1' ? note += 1 : note += 0

/*--------------------QUESTION 3-------------------------*/
console.log('\nQuestion 3: Lire les cours avant de faire les exercices est inutile:\n1: Vrai\n2: Faux')

answer = readline.question('Réponse :')
while(Number(answer) < 1 || Number(answer) > 2 || isNaN(Number(answer))) {
  console.log('\nVeuillez choisir entre la réponse \"1\" ou \"2\"')
  answer = readline.question('Réponse :')
}

answer === '1' ? note += 0 : note += 1

/*--------------------QUESTION 4-------------------------*/
console.log('\nQuestion 4: react.js a été developpé par Google:\n1: Vrai\n2: Faux')

answer = readline.question('Réponse :')
while(Number(answer) < 1 || Number(answer) > 2 || isNaN(Number(answer))) {
  console.log('\nVeuillez choisir entre la réponse \"1\" ou \"2\"')
  answer = readline.question('Réponse :')
}

answer === '1' ? note += 0 : note += 1

/*--------------------QUESTION 5-------------------------*/
console.log('\nQuestion 5: Ethereum est une blockchain publique:\n1: Vrai\n2: Faux')

answer = readline.question('Réponse :')
while(Number(answer) < 1 || Number(answer) > 2 || isNaN(Number(answer))) {
  console.log('\nVeuillez choisir entre la réponse \"1\" ou \"2\"')
  answer = readline.question('Réponse :')
}

answer === '1' ? note += 1 : note += 0

console.log(`Votre note final est de ${note}/5`)