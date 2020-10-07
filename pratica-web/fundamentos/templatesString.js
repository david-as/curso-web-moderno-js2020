const nome = "David"
const concatenacao = "Ola " + nome + "!"

const template = `
    Ola
    ${nome}!`
console.log(concatenacao, template)

//epressoes

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}!`)