var numeroVitorias = 200;
var numeroDerrotas = 99;

function calcularSaldo(numeroVitorias, numeroDerrotas){
let saldo;

saldo = numeroVitorias - numeroDerrotas
return saldo;
};

let saldoVitorias = calcularSaldo(numeroVitorias, numeroDerrotas);

function definirNivel(saldoVitorias){
if (saldoVitorias < 10){
return " Ferro"
} else if (saldoVitorias < 20){
return " Bronze"
} else if (saldoVitorias < 50){
return " Prata"
} else if (saldoVitorias < 80){
return " Ouro"
} else if (saldoVitorias < 90){
return " Diamante"
} else if (saldoVitorias < 100){
return " Lendário"
}else {
return " Imortal"
}
}

let nivelAtual = definirNivel(saldoVitorias);

console.log("O Herói tem de saldo de **"+ saldoVitorias + "** está no nível de **" + nivelAtual + "**");