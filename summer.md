# Higher Order Functions - Map e Reduce

## O QUE VAMOS APRENDER

Você já aprendeu a trabalhar com arrays e suas utilidades, agora você irá aprender sobre duas poderosíssimas High Order Functions: Array.map e Array.reduce.

## VOCÊ SERÁ CAPAZ DE:

Utilizar o Array.map e o Array.reduce para criar e manipular arrays com mais facilidade.

## PORQUE ISSO É IMPORTANTE?

Como você já viu, arrays são uma valiosa unidade de armazenamento usada a todo momento. Porém chega um ponto que lidar com elas fica complicado, as High Order Functions servem para facilitar e ajudar nesse quesito.

## CONTEÚDOS:

Como já visto anteriormente, as HOFs tem uma estrutura semelhante, Array.HOF, logo com o <strong>map</strong> não é diferente: Array.map.
Ok, agora vamos ao seu uso:
Para nosso estudo estaremos usando no momento o seguinte array:

```js
const pessoas = [
  { nome: 'Jaqueline', sobrenome: 'Souza', idade: 38 },
  { nome: 'Júlia', sobrenome: 'Diniz', idade: 15 },
  { nome: 'Rafael', sobrenome: 'Castro', idade: 10 },
  { nome: 'Ana', sobrenome: 'Cardoso', idade: 26 },
];
```

Pense que você deseja montar uma sentença como 'Nome Sobrenome tem X anos.' para cada uma das pessoas. Conseguiu imaginar? Até onde sabemos ficaria parecido com isso aqui:

```js
for (let indice = 0; indice < pessoas.length; indice += 1) {
  console.log(
    `${pessoas[indice].nome} ${pessoas[indice].sobrenome} tem ${pessoas[indice].idade} anos.`,
  );
}
```

E o resultado disso é:

```
Jaqueline Souza tem 38 anos.
Júlia Diniz tem 15 anos.
Rafael Castro tem 10 anos.
Ana Cardoso tem 26 anos.
```

Muito legal, agora imagine que você deseja salvar essa informação em um array, como faria? Provavelmente usaria um Array.push né? Algo assim:

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
  'Jaqueline Souza tem 39 anos.',
  'Júlia Diniz tem 16 anos.',
  'Rafael Castro tem 11 anos.',
  'Ana Cardoso tem 27 anos.',
];
```

Já fizemos bastante isso, porém o uso de for nesses casos acaba ficando repetitivo e dependendo da complexidade o for vai ficando muito grande.
É aí que entra o <strong>map</strong>, voltaremos ao primeiro exemplo onde só é necessário mostrar na tela nossa sentença, com o <strong>map</strong> ficaria assim:

```js
pessoas.map((pessoa) =>
  console.log(`${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos.`),
);
```

E como será o resultado disso? O mesmo que o primeiro:

```js
Jaqueline Souza tem 38 anos.
Júlia Diniz tem 15 anos.
Rafael Castro tem 10 anos.
Ana Cardoso tem 26 anos.
```

<p>Bem mais prático não é? Com uma única linha nós temos o mesmo resultado que o for.
Ok já temos uma noção do que o <strong>map</strong> faz, mas não para por aí. Você deve estar se perguntando "Eu já vi isso antes, é igual o forEach", é aí que você se engana, essas duas HOFs se diferenciam em um ponto, o <strong>map</strong> retorna um array. 
Vamos ver na prática:

```js
const infoPessoas = pessoas.map(
  (pessoa) => `${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos.`,
);
console.log(infoPessoas);
```

Você já deve saber, mas o resultado disso é:

```js
[
  'Jaqueline Souza tem 39 anos.',
  'Júlia Diniz tem 16 anos.',
  'Rafael Castro tem 11 anos.',
  'Ana Cardoso tem 27 anos.',
];
```

> <mark>Um ponto importante que você deve lembrar sempre, o <strong>map</strong> não altera o array original, ele apenas faz a leitura do conteúdo e o aplica como você decidir.</mark>

Imagine agora que você quer mostrar a informação dentro do nosso array porém precisa fazer uma modificação antes de mostrar, você pode fazer o seguinte:

```js
const novaIdade = pessoas.map(
  (pessoa) => `${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade + 1} anos.`,
);
console.log(novaIdade);
console.log(pessoas);
```

Essas linhas resultam nisso:

```js
[
  'Jaqueline Souza tem 38 anos.',
  'Júlia Diniz tem 15 anos.',
  'Rafael Castro tem 10 anos.',
  'Ana Cardoso tem 26 anos.'
]
[
  { nome: 'Jaqueline', sobrenome: 'Souza', idade: 38 },
  { nome: 'Júlia', sobrenome: 'Diniz', idade: 15 },
  { nome: 'Rafael', sobrenome: 'Castro', idade: 10 },
  { nome: 'Ana', sobrenome: 'Cardoso', idade: 26 },
]

```

<p>
Note que o array inicial não** foi alterado.
</p>

> Você verá que o uso do <strong>map</strong> é bem comum em conjunto com outras HOFs.


# EXERCÍCIOS:

# RECURSOS ADICIONAIS:
