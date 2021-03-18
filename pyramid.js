  
const pyramide = (nb, str, r) => {
    nb = Number(nb)
  if(r === '-r'){
    for(; nb > 0; nb--){
      console.log(str.repeat(nb))
    }
  } else {
    for(let i = 1; i <= nb; i++){
      console.log(str.repeat(i))
    }
  }
}

/* check si nous avons bien au moins 2 paramètre à passer pour notre fonction pyramide */
if (process.argv.length < 4) {
  console.log('Veuillez spécifier les 2 paramètre : base ET string')
  process.exit(1)
}

/* check si notre premier paramètre soit bien un nombre */
if (isNaN(process.argv[2])) {
  console.log('Veuillez spécifier seulement un "nombre" en 1er paramètre')
  process.exit(1)
}

/* check notre 2 eme parametre pour n'inclure que des lettres à notre fonction pyramide */
tab = []
process.argv[3].split('').forEach(a =>  tab.push(!isNaN(Number(a))))
if (tab.filter(a => a === true).length > 0) {
  console.log('Veuillez spécifier un nom (Si possible sans numero) pour le deuxième paramètre')
  process.exit(1)
}

pyramide(process.argv[2],process.argv[3],process.argv[4])