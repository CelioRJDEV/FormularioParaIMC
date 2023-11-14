//VARIAVEIS
let valor 
let quantidade 
let opcao = prompt("Bem Vindo ao Posto, Voce deseja" + 
"\n1 = Abastecer com gasolina; \n2 = Abastecer com Alcool; \n3 = calibrar os peus")

//CRIANDO SWITCHCASE
switch (opcao) {
    case "1":
        valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 5
        console.log ("Foram abastecidos " + quantidade + "L de gasolina")
        break;
    case "2" :
        valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 3    
        console.log ("Foram abastecidos " + quantidade + "L de alcool")
        break;
    default :
        console.log ("Pneus calibrados com sucesso ")                   
        break;
}