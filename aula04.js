/*
const qtd = 10;
let soma = 0;

for (let i = 0; i < qtd; i++) {
    console.log(i);
    soma = soma + i;
}
console.log('Acabou',soma);
*/
const idadeMinima= 18;
for (let idade=1;idade <=idadeMinima; idade++) {
    if (idade < idadeMinima) {
        console.log(`Pessoas com ${idade} anos não entram sem os pais.`);
    }else {
        console.log(`Pessoas com ${idade} anos podem entrar sozinhas.`);
    }
}