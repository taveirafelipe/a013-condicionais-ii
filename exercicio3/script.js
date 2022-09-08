//código a ser reescrito

const nome = prompt ("Insira seu nome:").toLocaleLowerCase()
const idade = Number (prompt("Insira sua idade:"))

console.log( "Oi, "+ (nome === "josé" || nome === "jose" ? "Zé!" : nome.toLocaleUpperCase() + "!")) 
console.log( (idade >= 18 ? "Pode tirar carteira de motorista!" : "Ainda não pode tirar carteira de motorista!")) 

/*
if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}
*/