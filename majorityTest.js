const information = (surname, name, age) => {
  console.log(age >= 18 ? `${surname} ${name}, vous êtes majeur, vous pouvez voter` : `Désoler, ${surname} ${name}, vous ne pouvez pas voter`)
}

information(process.argv[2],process.argv[3],process.argv[4])