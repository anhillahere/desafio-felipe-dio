let nickname = "Pisa Fundo"

let xpDiario = 100
let xpAtual = 6400
let xpTotal = xpAtual+=xpDiario

console.log("Olá "+ nickname + ", seja bem vindo!")
console.log("+" + xpDiario + " exp adquirido")

let rankBronze = 10001
let rankPrata = 2001
let rankOuro = 5001
let rankPlat = 7001
let rankAsc = 8001
let rankImr = 9001
let rankRad = 10001

if(xpTotal>=rankRad){
    console.log("Você alcançou Radiantte")
}
else if(xpTotal>=rankImr){
    console.log("Você alcançou Imortal")
}
else if(xpTotal>=rankAsc){
    console.log("Você alcançou Ascendente")
}
else if(xpTotal>=rankPlat){
    console.log("Você alcançou Platina")
}
else if(xpTotal>=rankOuro){
    console.log("Você alcançou Ouro")
}
else if(xpTotal>=rankPrata){
    console.log("Você alcançou Prata")
}
else if(xpTotal>=rankBronze){
    console.log("Você alncaçou Bronze")
}
else{
    console.log("Você ainda precisa treinar mais")
}

console.log(xpTotal + "/7000")