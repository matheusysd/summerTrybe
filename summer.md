<h1 style="color:#0fa36b">Higher Order Functions - Map e Reduce</h1>

# <div class="text-green">teste</div>
<div class="text-green">teste</div>

<h2 style="color:#0fa36b">O QUE VAMOS APRENDER?</h2>

<div style="font-family:Roboto,sans-serif">Você já aprendeu a trabalhar com arrays e suas utilidades, agora você irá aprender sobre duas poderosíssimas <i>High Order Functions</i>: <span style="color:#e83e8c">Array.map</span> e <span style="color:#e83e8c">Array.reduce</span>.</div>

<h2 style="color:#0fa36b">VOCÊ SERÁ CAPAZ DE:</h2>

<div style="font-family:Roboto,sans-serif">Utilizar o <span style="color:#e83e8c">Array.map</span> e o <span style="color:#e83e8c">Array.reduce</span> para criar e manipular arrays com mais facilidade.</div>

<h2 style="color:#0fa36b">PORQUE ISSO É IMPORTANTE?</h2>

<div style="font-family:Roboto,sans-serif">Como você já viu, <i>arrays</i> são uma valiosa unidade de armazenamento usada a todo momento. Porém chega um ponto que lidar com elas fica complicado, as <i>High Order Functions</i> servem para facilitar e ajudar nesse quesito.</div>

<h2 style="color:#0fa36b">CONTEÚDOS</h2>

<h2 style="color:#0fa36b">Array.map</h2>

<div style="font-family:Roboto,sans-serif">Como já visto anteriormente, as <i>HOFs</i> tem uma estrutura semelhante, <i>Array.HOF</i>, logo com o <strong style="color:#e83e8c">map</strong> não é diferente: <span style="color:#e83e8c">Array.map</span>.
Ok, agora vamos ao seu uso:
Para nosso estudo estaremos usando no momento o seguinte <i>array</i>: </div>

```js
const pessoas = [
  { nome: 'Jaqueline', sobrenome: 'Souza', idade: 38 },
  { nome: 'Júlia', sobrenome: 'Diniz', idade: 15 },
  { nome: 'Rafael', sobrenome: 'Castro', idade: 10 },
  { nome: 'Ana', sobrenome: 'Cardoso', idade: 26 },
];
```

<div style="font-family:Roboto,sans-serif">Pense que você deseja montar uma sentença como por exemplo 'Ana Silva tem 64 anos.' para cada uma das pessoas. Conseguiu imaginar? Até onde sabemos nosso código ficaria parecido com isso aqui:</div>

```js
for (let indice = 0; indice < pessoas.length; indice += 1) {
  console.log(
    `${pessoas[indice].nome} ${pessoas[indice].sobrenome} tem ${pessoas[indice].idade} anos.`,
  );
}
```

<div style="font-family:Roboto,sans-serif">E a sua execução resultaria em:</div>

```
Jaqueline Souza tem 38 anos.
Júlia Diniz tem 15 anos.
Rafael Castro tem 10 anos.
Ana Cardoso tem 26 anos.
```

<div style="font-family:Roboto,sans-serif">Muito legal, agora imagine que você deseja salvar essa informação em um <i>array</i>, como faria? Provavelmente usaria um <span style="color:#e83e8c">Array.push</span> né? Algo assim:</div>

```js
const infoPessoas = [];
for (let indice = 0; indice < pessoas.length; indice += 1) {
  infoPessoas.push(
    `${pessoas[indice].nome} ${pessoas[indice].sobrenome} tem ${pessoas[indice].idade} anos.`,
  );
}
console.log(infoPessoas);
```

<div style="font-family:Roboto,sans-serif">O resultado disso é:</div>

```js
[
  'Jaqueline Souza tem 39 anos.',
  'Júlia Diniz tem 16 anos.',
  'Rafael Castro tem 11 anos.',
  'Ana Cardoso tem 27 anos.',
];
```

<div style="font-family:Roboto,sans-serif">Já fizemos bastante isso, porém o uso de <strong style="color:#e83e8c">for</strong> nesses casos acaba ficando repetitivo e dependendo da complexidade o for vai ficando muito grande.
É aí que entra o <strong style="color:#e83e8c">map</strong>, voltaremos ao primeiro exemplo onde só é necessário mostrar na tela nossa sentença, com o <strong style="color:#e83e8c">map</strong> ficaria assim:</div>

```js
pessoas.map((pessoa) =>
  console.log(`${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos.`),
);
```

<div style="font-family:Roboto,sans-serif">E como será o resultado disso? O mesmo que o primeiro:</div>

```js
Jaqueline Souza tem 38 anos.
Júlia Diniz tem 15 anos.
Rafael Castro tem 10 anos.
Ana Cardoso tem 26 anos.
```

<div style="font-family:Roboto,sans-serif">Bem mais prático não é? Com uma única linha nós temos o mesmo resultado que o for.
Ok já temos uma noção do que o <strong style="color:#e83e8c">map</strong> faz, mas não para por aí. Você deve estar se perguntando "Eu já vi isso antes, é igual o forEach", é aí que você se engana, essas duas <i>HOFs</i> se diferenciam em um ponto, o <strong style="color:#e83e8c">map</strong> retorna um <i>array</i>. 
Vamos ver na prática:</div>

```js
const infoPessoas = pessoas.map(
  (pessoa) => `${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos.`,
);
console.log(infoPessoas);
```

<div style="font-family:Roboto,sans-serif">Você já deve saber, mas o resultado disso é:</div>

```js
[
  'Jaqueline Souza tem 39 anos.',
  'Júlia Diniz tem 16 anos.',
  'Rafael Castro tem 11 anos.',
  'Ana Cardoso tem 27 anos.',
];
```

><div style="font-family:Roboto,sans-serif">Um ponto importante que você deve lembrar sempre, o <strong>map</strong> não altera o array original, ele apenas faz a leitura do conteúdo e o aplica como você decidir.</div>
<br>
<div style="font-family:Roboto,sans-serif">Imagine agora que você quer mostrar a informação dentro do nosso <i>array</i> porém precisa fazer uma modificação antes de mostrar, você pode fazer o seguinte:</div>

```js
const novaIdade = pessoas.map(
  (pessoa) => `${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade + 1} anos.`,
);
console.log(novaIdade);
console.log(pessoas);
```

<div style="font-family:Roboto,sans-serif">Essas linhas resultam nisso:</div>

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

> <div style="font-family:Roboto,sans-serif">Note que o <i>array</i> inicial não foi alterado.</div>

> <div style="font-family:Roboto,sans-serif">Você verá que o uso do <strong>map</strong> é bem comum em conjunto com outras <i>HOFs</i>.</div>

<h2 style="color:#0fa36b"><div style="font-family:Roboto,sans-serif">EXERCÍCIOS:</div></h2>

<h2 style="color:#0fa36b"><div style="font-family:Roboto,sans-serif">RECURSOS ADICIONAIS:</div</h2>

