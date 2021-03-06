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
  return familia.map((pessoa) => `${pessoa.nome} tem ${pessoa.idade} anos.`).sort();
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
  return personagens
    .map((pessoa) => `${pessoa.nome} é ${pessoa.funcao} da casa ${pessoa.casa}.`)
    .sort();
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
  return exercicio3.map((personagem) => ({
    nome: personagem.nome,
    varinha: personagem.varinha,
    bichoPapao: personagem.bichoPapao,
  }));
}

assert.deepEqual(criarObjetos(), resultado_esperado);
```

4. Encontre o personagem com o maior nome.

- Dica: Use a função _reduce_.

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

function maiorNome() {
  return personagens.reduce((acc, curr) => {
    if (acc.length > curr.length) {
      return acc;
    }
    return curr;
  });
}

assert.deepEqual(maiorNome(), resultado_esperado);
```

5. Encontre a quantidade de personagens pertencentes a casa Grifinória.

- Dica: Use a função _reduce_.

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
  return personagens.reduce((acc, curr) => {
    if (curr.house === 'Gryffindor') {
      acc = acc + 1;
    }
    return acc;
  }, 0);
}

assert.deepEqual(apenasGrifinoria(), resultado_esperado);
```
