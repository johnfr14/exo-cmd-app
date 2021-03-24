const readline = require('readline-sync')

/*---------------------------------PREMIER PARTIE------------------------------*/
let mysterynumber = Number(readline.question('Maitre suprême veuillez spécifier un nombre entre 1 et 100 : '))

while(mysterynumber < 1 || mysterynumber > 100 || isNaN(mysterynumber)) {
  mysterynumber = Number(readline.question('NOPE ! spécifier un nombre entre 1 et 100 : '))
}

for (let i = 0; i < 100; i++) {
  console.log('')
}

/*---------------------------------DEUXIEME PARTIE------------------------------*/
console.log('joueur 2 quelle ce mysterieux nombre ???????')

let notFound = true
while (notFound) {
  let input = readline.question(`Quelle est le number mystère ? : `)
  while(input >= 'a' && input <= 'z' || isNaN(Number(input))) { 
  input = readline.question('NOPE ! spécifier un nombre entre 1 et 100 : ')
  } 
  
  if (Number(input) === mysterynumber) {
    console.log('\nFélicitation vous avez trouvé !!!!!')
    notFound = false
  } else {
    console.log(input < mysterynumber ? 'Plus grand !' : 'Plus petit !' )
  }
}