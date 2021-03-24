const readline = require('readline-sync')

const information = (majority) => {
  majority = Number(majority)

  /* STEP 1 */
  let name = readline.question('Quelle est votre prénom ? : ')
  /* Check si notre name soit bien un nom */
  while (name.length <= 2 || !isNaN(name) ) {
    name = readline.question('NOPE ! Quelle est votre prénom ? : ')
  }

  /* STEP 2 */
  let surname = readline.question('Quelle est votre nom ? : ')
  /* Check si notre surname soit bien un nom */
  while (surname.length <= 2 || !isNaN(surname)) {
    surname = readline.question('Quelle est votre nom ? : ')
  }

  /* STEP 3 */
  let age = Number(readline.question('Quelle est votre age ? : '))
  /* Check si notre age soit bien un nombre */
  while(isNaN(age)) {
    age = Number(readline.question('Quelle est votre age ? : '))
  }

  console.log(age >= majority ? `${surname} ${name}, vous êtes majeur, vous pouvez voter` : `Désoler, ${surname} ${name}, vous ne pouvez pas voter`)
}

if (isNaN(process.argv[2])) {
  console.log('Veuillez spécifier seulement un "nombre" en 1er paramètre')
  process.exit(1)
}

information(process.argv[2])