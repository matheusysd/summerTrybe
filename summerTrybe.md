# Higher Order Functions - Map e Reduce

## O que vamos aprender?

Você já aprendeu a trabalhar com arrays e suas utilidades, agora você irá aprender sobre duas poderosíssimas _High Order Functions_: **Array.map** e **Array.reduce**.

## Você será capaz de:

Utilizar o **Array.map** e o **Array.reduce** para criar e manipular arrays com mais facilidade.

## Porque isso é importante?

Como você já viu, arrays são uma valiosa unidade de armazenamento usada a todo momento. Porém, chega um ponto que lidar com elas fica complicado e as _High Order Functions_ servem para facilitar e ajudar nesse quesito.

## Conteúdos

## **Array.map**

Como já visto anteriormente, as HOFs têm uma estrutura semelhante, _Array.HOF_. Com o **map** não é diferente: **Array.map**.

Ok, agora vamos ao seu uso:
Para nosso estudo estaremos usando o seguinte array como exemplo:

```js
const pessoas = [
  { nome: 'Jaqueline', sobrenome: 'Souza', idade: 38 },
  { nome: 'Júlia', sobrenome: 'Diniz', idade: 15 },
  { nome: 'Rafael', sobrenome: 'Castro', idade: 10 },
  { nome: 'Ana', sobrenome: 'Cardoso', idade: 26 },
];
```

Pense que você deseja montar uma sentença para cada uma das pessoas, como por exemplo 'Ana Silva tem 64 anos.'. Conseguiu imaginar? Até onde sabemos nosso código ficaria parecido com isso aqui:

```js
for (let indice = 0; indice < pessoas.length; indice += 1) {
  console.log(
    `${pessoas[indice].nome} ${pessoas[indice].sobrenome} tem ${pessoas[indice].idade} anos.`,
  );
}
```

E a sua execução resultaria em:

```shell
Jaqueline Souza tem 38 anos.
Júlia Diniz tem 15 anos.
Rafael Castro tem 10 anos.
Ana Cardoso tem 26 anos.
```

Agora imagine que você deseja salvar essa informação em um array, como faria? Provavelmente usaria um **Array.push** né? Algo assim:

```js
const infoPessoas = [];
for (let indice = 0; indice < pessoas.length; indice += 1) {
  infoPessoas.push(
    `${pessoas[indice].nome} ${pessoas[indice].sobrenome} tem ${pessoas[indice].idade} anos.`,
  );
}
console.log(infoPessoas);
```

O resultado disso é:

```js
[
  'Jaqueline Souza tem 38 anos.',
  'Júlia Diniz tem 17 anos.',
  'Rafael Castro tem 10 anos.',
  'Ana Cardoso tem 26 anos.',
];
```

Já fizemos bastante isso, porém, o uso de **for** nesses casos acaba ficando repetitivo e dependendo da complexidade pode ficar muito grande.
É aí que entra o **map**! Vamos refazer então, agora com auxílio dessa _HOF_, o primeiro exemplo onde só é necessário mostrar nossa sentença na tela:

```js
pessoas.map((pessoa) =>
  console.log(`${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos.`),
);
```

E como será o resultado disso? O mesmo que o primeiro:

```shell
Jaqueline Souza tem 38 anos.
Júlia Diniz tem 15 anos.
Rafael Castro tem 10 anos.
Ana Cardoso tem 26 anos.
```

Bem mais prático, não é? Com uma única linha nós temos o mesmo resultado que o **for**.

Ok já temos uma noção do que o **map** faz, mas não para por aí. Você deve estar se perguntando "Eu já vi isso antes, é igual o **forEach**"? É aí que você se engana, essas duas _HOFs_ se diferenciam em um ponto: **o map retorna um array.**
Vamos ver na prática:

```js
const infoPessoas = pessoas.map(
  (pessoa) => `${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos.`,
);
console.log(infoPessoas);
```

Talvez você já esteja imaginando, mas o resultado é:

```js
[
  'Jaqueline Souza tem 38 anos.',
  'Júlia Diniz tem 15 anos.',
  'Rafael Castro tem 10 anos.',
  'Ana Cardoso tem 26 anos.',
];
```

> Um ponto importante que você deve lembrar sempre, é que o map não altera o array original, ele apenas faz a leitura do conteúdo e o aplica como você decidir.

Imagine agora que você quer mostrar a informação dentro do nosso array, porém precisa fazer uma modificação antes disso. Você pode fazer o seguinte:

```js
const novaIdade = pessoas.map(
  (pessoa) => `${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade + 1} anos.`,
);
console.log(novaIdade);
console.log(pessoas);
```

A execução dessas linhas resultam em:

```js
[
  'Jaqueline Souza tem 39 anos.',
  'Júlia Diniz tem 16 anos.',
  'Rafael Castro tem 11 anos.',
  'Ana Cardoso tem 27 anos.'
]
[
  { nome: 'Jaqueline', sobrenome: 'Souza', idade: 38 },
  { nome: 'Júlia', sobrenome: 'Diniz', idade: 15 },
  { nome: 'Rafael', sobrenome: 'Castro', idade: 10 },
  { nome: 'Ana', sobrenome: 'Cardoso', idade: 26 },
]

```

> Note que o array inicial não foi alterado. OLHAR QUOTE

> Você verá que o uso do **map** é bem comum em conjunto com outras _HOFs_.

## Array.reduce

Agora chegou o momento de uma das mais poderosas _HOFs_, o _reduce_. Sua funcionalidade se assemelha um pouco ao **map**, ou seja, o **reduce** irá executar uma determinada função para cada elemento do array. Essa função possui quatro parâmetros, sendo dois deles obrigatórios, e o resultado dessa _HOF_ é um único valor.

Esses quatro parâmetros são:

- Acumulador, que iremos chamar de _acc_.
- Valor atual, que iremos chamar de _curr_.
- Index atual, que iremos chamar de _idx_.
- Array original, que iremos chamar de _array_.

O acumulador recebe o valor de retorno da função envelopada pelo reduce e a cada atualização do acumulador esse valor é passado para a próxima iteração até que chegue na última posição do array. (Não se apavore, você verá como funciona!)

> Lembrando que os dois primeiros parâmetros são obrigatórios.

Usando aquele mesmo array do início, vamos supor que você quer somar a idade de todas as pessoas. Como você iria realizar essa soma? Seria mais ou menos assim, certo?

```js
let somaIdades = 0;
for (let indice = 0; indice < pessoas.length; indice += 1) {
  somaIdades = somaIdades + pessoas[indice].idade;
}
console.log(`A soma de todas as idades é: ${somaIdades}.`);
```

Essas linhas darão o seguinte resultado:

```
A soma de todas as idades é: 89.
```

> Existe também a ideia de pegar a idade das pessoas com o **map** e somar todas as posições desse array, mas a forma mais direta é essa.

Novamente batemos naquela tecla: "sempre que eu quiser trabalhar com arrays, vou usar um **for**?" Como já falado, as _HOFs_ existem para nos ajudar e facilitar nossa experiência com arrays. Então vamos colocar o **reduce** em jogo! Já falamos sobre os parâmetros da função envelopada, mas o **reduce** por si só já possui um parâmetro: o valor inicial.

O valor inicial é opcional, se ele for definido esse valor será usado na primeira chamada da função, se não o primeiro elemento do array ocupará esse lugar.

No nosso caso, vamos definir o valor inicial como 0 e então escreveríamos assim o código:

```js
let somaIdades = pessoas.reduce((acc, curr) => acc + curr.idade, 0);
console.log(`A soma de todas as idades é: ${somaIdade}.`);
```

E como você já deve imaginar, a execução resulta em:

```
A soma de todas as idades é: 89.
```

Vamos observar um pouco melhor o **reduce** colocando alguns _console.log()_ para visualizar etapa por etapa:

```js
pessoas.reduce((acc, curr) => {
  console.log(`Acumulador: ${acc} | Valor atual: ${curr.idade}.`);
  return acc + curr.idade;
}, 0);
```

Assim vemos:

```
Acumulador: 0 | Valor atual: 38.
Acumulador: 38 | Valor atual: 15.
Acumulador: 53 | Valor atual: 10.
Acumulador: 63 | Valor atual: 26.
```

Como o valor atual chegou a última posição do array original, a função envelopada não é mais executada e o valor retornado é o resultado da soma dos últimos dois valores (63 + 26).

> Como nesse exemplo estamos lidando com objetos, devemos definir o valor inicial para 0 se não a função irá somar o valor da idade com o valor do objeto na primeira posição como um todo. Logo mais entenderá.

Agora que você já viu um exemplo com objeto, aqui está um com array simples:

```js
const idades = [38, 15, 10, 26];
const somaIdades = idades.reduce((acc, curr) => acc + curr);
console.log(`A soma do array idades é: ${somaIdades}.`);
```

E assim vemos:

```
A soma do array idades é: 89.
```

> Note que nesse caso não é necessário definir o valor inicial, por se tratar de um array simples podemos assumir que o valor inicial será a primeira posição do array.

> No código acima, se declararmos o valor inicial como 21, você tem ideia do que aconteceria? Experimente!

## Exercícios

Tempo sugerido para realização: 100 minutos

1. Crie um array de strings seguindo o formato '_NOME_DA_PESSOA_ tem _IDADE_DA_PESSOA_ anos.'

- Dica: Você deve utilizar as funções _map_ e _sort_.

```js
const assert = require('assert');

const familia = [
  { nome: 'Marcela', idade: 29 },
  { nome: 'Ana', idade: 26 },
  { nome: 'André', idade: 35 },
  { nome: 'Carla', idade: 15 },
  { nome: 'Lídia', idade: 8 },
];

const resultado_esperado = [
  'Ana tem 26 anos.',
  'André tem 35 anos.',
  'Carla tem 15 anos.',
  'Lídia tem 8 anos.',
  'Marcela tem 29 anos.',
];

function familiaOrdenada() {
  // Implemente seu código aqui.
}

assert.deepEqual(familiaOrdenada(), resultado_esperado);

```

2. Seguindo a mesma linha do exercício anterior, crie um array contendo strings no formato '_NOME_DE_PERSONAGEM_ é _FUNCAO_DE_PERSONAGEM_ da casa _CASA_DE_PERSONAGEM_.', ordenando alfabeticamente.

```js
const assert = require('assert');

const personagens = [
  {
    nome: 'Hermione Granger',
    funcao: 'estudante',
    casa: 'Grifinória',
  },
  {
    nome: 'Draco Malfoy',
    funcao: 'estudante',
    casa: 'Sonserina',
  },
  {
    nome: 'Horácio Slughorn',
    funcao: 'professor de Poções',
    casa: 'Sonserina',
  },
  {
    nome: 'Cho Chang',
    funcao: 'estudante',
    casa: 'Corvinal',
  },
  {
    nome: 'Cedrico Diggory',
    funcao: 'estudante',
    casa: 'Lufa-Lufa',
  },
];

const resultado_esperado = [
  'Cedric Diggory é estudante da casa Lufa-Lufa.',
  'Cho Chang é estudante da casa Corvinal.',
  'Draco Malfoy é estudante da casa Sonserina.',
  'Hermione Granger é estudante da casa Grifinória.',
  'Horace Slughorn é professor de Poções da casa Sonserina.',
];

function criarArrays() {
  // Implemente seu código aqui.
}

assert.deepEqual(criarArrays(), resultado_esperado);

```

3. A partir do array de personagens, crie um array de objetos contendo as propriedades _nome_, _varinha_ e _bichoPapao_, onde estarão os nomes, varinha e bicho papão de cada uma das personagens.

```js
const assert = require('assert');

const personagens = [
  {
    id: '5a109af13dc2080021cd877a',
    nome: 'Hermione Granger',
    funcao: 'estudante',
    casa: 'Grifinória',
    varinha: 'Madeira de videira, 27.305cm, núcleo de fibra de coração de dragão',
    bichoPapao: 'falhar',
    patrono: 'lontra',
    linhagem: 'trouxa',
  },
  {
    id: '5a1097653dc2080021cd8763',
    nome: 'Albus Dumbledore',
    funcao: 'Diretor de Escola de Magia e Bruxaria de Hogwarts',
    casa: 'Grifinória',
    varinha: 'Madeira de sabugueiro, 38.1cm, núcleo de pelo de unicórniocauda de trestálio',
    bichoPapao: 'Ariana (irmã)',
    patrono: 'fênix',
    linhagem: 'mestiço',
  },
  {
    id: '5a109c3d3dc2080021cd8780',
    nome: 'Rubeus Hagrid',
    funcao: 'Guarda-caça, Professor, Cuidador da Criaturas Mágicas',
    casa: 'Grifinória',
    varinha: 'Madeira de carvalho, 40.64cm, núcleo desconhecido',
    bichoPapao: 'Lord Voldemort',
    patrono: null,
    linhagem: 'desconhecida',
  },
  {
    id: '5a109e543dc2080021cd8790',
    nome: 'Neville Longbottom',
    funcao: 'estudante',
    casa: 'Grifinória',
    varinha: 'Madeira de cerejeira, 33.02cm, núcleo de pelo de unicórnio',
    bichoPapao: 'Severus Snape',
    linhagem: 'puro-sangue',
  },
  {
    id: '5a109f053dc2080021cd8793',
    nome: 'Remus Lupin',
    funcao: 'Professor, Defence Against the Dark Arts',
    casa: 'Grifinória',
    varinha: 'Madeira de cipreste, 26cm, núcleo de pelo de unicórnio',
    bichoPapao: 'lua cheia',
    patrono: 'lobo',
    linhagem: 'mestiço',
  },
];

const resultado_esperado = [
  {
    nome: 'Hermione Granger',
    varinha: 'Madeira de videira, 27.305cm, núcleo de fibra de coração de dragão',
    bichoPapao: 'falhar',
  },
  {
    nome: 'Albus Dumbledore',
    varinha: 'Madeira de sabugueiro, 38.1cm, núcleo de pelo de unicórniocauda de trestálio',
    bichoPapao: 'Ariana (irmã)',
  },
  {
    nome: 'Rubeus Hagrid',
    varinha: 'Madeira de carvalho, 40.64cm, núcleo desconhecido',
    bichoPapao: 'Lord Voldemort',
  },
  {
    nome: 'Neville Longbottom',
    varinha: 'Madeira de cerejeira, 33.02cm, núcleo de pelo de unicórnio',
    bichoPapao: 'Severus Snape',
  },
  {
    nome: 'Remus Lupin',
    varinha: 'Madeira de cipreste, 26cm, núcleo de pelo de unicórnio',
    bichoPapao: 'lua cheia',
  },
];

function criarObjetos() {
  // Implemente seu código aqui
}

assert.deepEqual(criarObjetos(), resultado_esperado);

```

4. Encontre o personagem com o maior nome.
* Dica: Use a função _reduce_.

```js
const assert = require('assert');

const personagens = [
  'Katie Bell',
  'Sirius Black',
  'Aberforth Dumbledore',
  'Albus Dumbledore',
  'Seamus Finnigan',
  'Hermione Granger',
];

const resultado_esperado = 'Aberforth Dumbledore';

function maiorNome(){
  // Implemente aqui seu código.

}

assert.deepEqual(maiorNome(), resultado_esperado);

```

5. Encontre a quantidade de personagens pertencentes a casa Grifinória.
* Dica: Use a função _reduce_.

```js
const assert = require('assert');
const personagens = [
  {
    id: '5a1233bc0f5ae10021650d97',
    nome: 'Severo Snape',
    role: 'Professor de Poções e Defesa contra as Artes das Trevas',
    house: 'Sonserina',
    escola: 'Escola de Magia e Bruxaria de Hogwarts',
    patrono: 'corça',
    ministerioDaMagia: false,
    ordemDaFenix: true,
    armadaDeDumbledore: false,
    comensalDaMorte: true,
    linhagem: 'mestiço',
    especie: 'humano',
  },
  {
    id: '5a1233ff0f5ae10021650d98',
    nome: 'Alicia Spinnet',
    role: 'estudante',
    house: 'Grifinória',
    escola: 'Escola de Magia e Bruxaria de Hogwarts',
    ministerioDaMagia: false,
    ordemDaFenix: false,
    armadaDeDumbledore: true,
    comensalDaMorte: false,
    linhagem: 'desconhecido',
    especie: 'humano',
  },
  {
    id: '5a1234500f5ae10021650d99',
    nome: 'Pomona Sprout',
    role: 'Professora de Herbologia',
    house: 'Lufa-Lufa',
    escola: 'Escola de Magia e Bruxaria de Hogwarts',
    ministerioDaMagia: false,
    ordemDaFenix: false,
    armadaDeDumbledore: false,
    comensalDaMorte: false,
    linhagem: 'desconhecido',
    especie: 'humano',
  },
  {
    id: '5a1234cb0f5ae10021650d9b',
    nome: 'Dean Thomas',
    role: 'estudante',
    house: 'Grifinória',
    escola: 'Escola de Magia e Bruxaria de Hogwarts',
    ministerioDaMagia: false,
    ordemDaFenix: false,
    armadaDeDumbledore: true,
    comensalDaMorte: false,
    linhagem: 'mestiço',
    especie: 'humano',
  },
];

const resultado_esperado = 2;

function apenasGrifinoria() {
  // Implemente seu código aqui
}

assert.deepEqual(apenasGrifinoria(), resultado_esperado);

```
## Recursos adicionais
