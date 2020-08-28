const pessoas = [
  { nome: 'Jaqueline', sobrenome: 'Souza', idade: 38 },
  { nome: 'Júlia', sobrenome: 'Diniz', idade: 15 },
  { nome: 'Rafael', sobrenome: 'Castro', idade: 10 },
  { nome: 'Ana', sobrenome: 'Cardoso', idade: 26 },
];

// for (let indice = 0; indice < pessoas.length; indice += 1) {
//   console.log(`${pessoas[indice].nome} ${pessoas[indice].sobrenome} tem ${pessoas[indice].idade} anos.`);
// }

// const infoPessoas = [];
// for (let indice = 0; indice < pessoas.length; indice += 1) {
//   infoPessoas.push(
//     `${pessoas[indice].nome} ${pessoas[indice].sobrenome} tem ${pessoas[indice].idade} anos.`,
//   );
// }
// console.log(infoPessoas);

// pessoas.map((pessoa) => console.log(`${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos.`));

// const infoPessoas = pessoas.map((pessoa) => `${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos.`);
// console.log(infoPessoas)

// const novaIdade = pessoas.map((pessoa) => `${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade + 1} anos.`)
// console.log(novaIdade);
// console.log(pessoas);aaa

// let somaIdades = pessoas.reduce((acc, curr) => acc + curr.idade, 0);
// console.log(somaIdades);

// let somaIdade = 0;
// for (let indice = 0; indice < pessoas.length; indice += 1) {
//   somaIdade = somaIdade + pessoas[indice].idade;
// }

// let somaIdade = pessoas.map((pessoa) => pessoa.idade);
// console.log(`A soma de todas as idades é: ${somaIdade}.`);

// pessoas.reduce((acc, curr) => {
//   console.log(`Acumulador: ${acc} | Valor atual: ${curr.idade}.`);
//   return acc + curr.idade;
// }, 0);


const idades = [38, 15, 10, 26];
const somaIdades = idades.reduce((acc, curr) => acc + curr, 10);
console.log(`A soma do array idades é: ${somaIdades}.`);
