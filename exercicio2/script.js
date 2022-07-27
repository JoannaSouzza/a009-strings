//Exercicio 2

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      " ;
console.log(minhaString.length)

const novaStringSemEspaco = minhaString.trim()
console.log(novaStringSemEspaco.length)

const substituicao = novaStringSemEspaco.replace( "________.", "sticioso");

console.log(substituicao)
