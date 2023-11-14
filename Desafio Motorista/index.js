// CRIAÇÃO DAS VARIAVEIS
let nome
let idade
let TemCNH = false
let TemCarro = false

//PEDINDO INFORMAÇÕES AO MOTORISTA
nome = prompt("Qual é seu nome? ")
idade = parseInt(prompt("Qual é sua idade "))
let opcaoCNH = prompt("Voce possui CNH ? (s/n) ")
if (opcaoCNH == "s") {
    TemCNH = true
} 
let opacaoCarro = prompt ("Voce possui automvel ? (s/n) ") 
if (opacaoCarro =="s") {
    TemCarro = true
}   

//EXBINDO MENSAGEM NO CONSOLE
if (idade < 18 || !TemCNH) {
    console.log (nome + ", Voce não podera ser o motorista")
} else if (idade >= 18 && TemCNH && !TemCarro) {
    console.log (nome + ", Voce podera dirigir mais nao tem um carro")
} else {
    console.log (nome + ", Voce sera o motorista ! ")
}

    
