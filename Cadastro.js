const user01 = new Object()
user01.id = 1
user01.nome = "joão"
user01.idade = 24

const user02 = new Object()
user02.id = 2
user02.nome = "vitor"
user02.idade = 25

const user03 = new Object()
user03.id = 3
user03.nome = "Amanda"
user03.idade = 28

const user04 = new Object()
user04.id = 4
user04.nome = "Fernanda"
user04.idade = 37

const user05 = new Object()
user05.id = 5
user05.nome = "Gabriel"
user05.idade = 30

const user06 = new Object()
user06.id = 6
user06.nome = "Yuri"
user06.idade = 21

const user07 = new Object()
user07.id = 7
user07.nome = "Artur"
user07.idade = 18

const user08 = new Object()
user08.id = 8
user08.nome = "Wiliam"
user08.idade = 45

const user09 = new Object()
user09.id = 9
user09.nome = "Marcos"
user09.idade = 55


// Bloqueando um dado ou que o usuário altere ele.

Object.defineProperty(user01, 'cpf', {
    enumerable: false, // Oculta o dado 
    whitable: false, // Deixa imutável
    value: '000.000.000-00'
})


// Adicionando um dado novo no cadastro. Adicionando o dado Empresa.

const empresa = 'REGRA'
user01.empresa = empresa  // O usuario 01 recebendo o dado


console.log(Object.entries (user01))
console.log(Object.entries (user02))
console.log(Object.entries (user03))
console.log(Object.entries (user04))
console.log(Object.entries (user05))
console.log(Object.entries (user06))
console.log(Object.entries (user07))
console.log(Object.entries (user08))
console.log(Object.entries (user09))

