const readline = require('readline-sync')

const information = (majority) => {
  majority = Number(majority)
  let name = readline.question('Quelle est votre prénom ? : ')
  let surname = readline.question('Quelle est votre nom ? : ')
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