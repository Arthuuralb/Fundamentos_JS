function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}

//dobro(5)
//dobro(7)

//dobro()

//function dizerOla(nome = "mundo") {
//alert("Olá, " + nome + "!")
//}

//dizerOla("Isaac")
//dizerOla()

function soma(a, b) {
    alert("O resultado da soma é " + (a + b))
}

//soma(7, 6,)

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }

    console.log(usuario)

}

function muitoParametros(nome, telefone, endereco, aniversario, email, senha) {
    //....
}

function ObjetoComoParametro(usuario) {
    //....
    usuario.nome
    usuario.email
}

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}

ObjetoComoParametro(dadosDoUsuario)

//criarUsuario("Arthur", "Arthurdev@email.com", "1234")
//criarUsuario("Arthurdev@email.com", "Arthur", "1234") 
