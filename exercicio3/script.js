//exercicio 3
const extra = "mas não deixe o gato sair."
const frase = `Jorge tem uma casa verde e com portão azul,com os dizeres: "BOAS VINDAS, ${extra}"`

console.log(frase)

const trocas = frase.replace("verde","rosa").replace("azul","laranja")

console.log(trocas)

const finalMaiusculo = extra.toUpperCase()
console.log(finalMaiusculo)

const fraseFinal = `Jorge tem uma casa verde e com portão azul,com os dizeres: "BOAS VINDAS, ${finalMaiusculo}"`

console.log(fraseFinal)

