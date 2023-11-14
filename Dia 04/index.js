const TemFome = prompt("Voce esta com fome ? Sim/Não")
const TemDinheiro = prompt("Voce tem dinheiro ? Sim/Não")
const RestauranteAberto = prompt("Restaurante esta aberto ? Sim/Não")

if(TemFome === "Não" || TemDinheiro =="Não") {
   console.log("Hoje a janta será em casa");
} else if (TemDinheiro === "Sim" && RestauranteAberto === "Sim") {
    console.log("Hoje o jantar será no seu restaurante preferido");
} else{
    console.log("Peça um delivery");
}
