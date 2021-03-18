const readline = require('readline-sync')

let mysterynumber = Number(readline.question('Maitre suprême veuillez spécifier un nombre entre 1 et 100 : '))
while(mysterynumber < 1 || mysterynumber > 100 ) {
  mysterynumber = Number(readline.question('NOPE ! spécifier un nombre entre 1 et 100 : '))
}

for (let i = 0; i < 100; i++) {
  console.log('')
}

console.log('joueur 2 quelle ce mysterieu nombre ???????')

notFound = true
while (notFound) {
  console.log(``)
}

console.log(typeof mysteryWord)