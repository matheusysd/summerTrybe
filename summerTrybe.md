# Higher Order Functions - Map e Reduce

## O que vamos aprender?

Você já aprendeu a trabalhar com arrays e suas utilidades, agora você irá aprender sobre duas poderosíssimas _High Order Functions_: **Array.map** e **Array.reduce**.

## Você será capaz de:

Utilizar o **Array.map** e o **Array.reduce** para criar e manipular arrays com mais facilidade.

## Porque isso é importante?

Como você já viu, arrays são uma valiosa unidade de armazenamento usada a todo momento. Porém chega um ponto que lidar com elas fica complicado, as _High Order Functions_ servem para facilitar e ajudar nesse quesito.

## Conteúdos

## **Array.map**

Como já visto anteriormente, as HOFs tem uma estrutura semelhante, _Array.HOF_, logo com o **map** não é diferente: **Array.map**.

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

Pense que você deseja montar uma sentença como por exemplo 'Ana Silva tem 64 anos.' para cada uma das pessoas. Conseguiu imaginar? Até onde sabemos nosso código ficaria parecido com isso aqui:

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

Muito legal, agora imagine que você deseja salvar essa informação em um array, como faria? Provavelmente usaria um **Array.push** né? Algo assim:

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

Já fizemos bastante isso, porém o uso de for nesses casos acaba ficando repetitivo e dependendo da complexidade o **for** vai ficando muito grande.
É aí que entra o **map**, voltaremos ao primeiro exemplo onde só é necessário mostrar na tela nossa sentença, com o map ficaria assim:

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

Bem mais prático não é? Com uma única linha nós temos o mesmo resultado que o for.

Ok já temos uma noção do que o **map** faz, mas não para por aí. Você deve estar se perguntando "Eu já vi isso antes, é igual o **forEach**", é aí que você se engana, essas duas _HOFs_ se diferenciam em um ponto, o map retorna um array.
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
  'Jaqueline Souza tem 38 anos.',
  'Júlia Diniz tem 15 anos.',
  'Rafael Castro tem 10 anos.',
  'Ana Cardoso tem 26 anos.',
];
```

> Um ponto importante que você deve lembrar sempre, o map não altera o array original, ele apenas faz a leitura do conteúdo e o aplica como você decidir.
> <br>

Imagine agora que você quer mostrar a informação dentro do nosso array porém precisa fazer uma modificação antes de mostrar, você pode fazer o seguinte:

```js
const novaIdade = pessoas.map(
  (pessoa) => `${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade + 1} anos.`,
);
console.log(novaIdade);
console.log(pessoas);
```

A execução dessas linhas resultam nisso:

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

> Note que o array inicial não foi alterado.

> Você verá que o uso do **map** é bem comum em conjunto com outras _HOFs_.

## Array.reduce

Agora chegou o momento de uma das mais poderosas _HOFs_, o _reduce_. Sua funcionalidade se assemelha um pouco ao **map**, ou seja o **reduce** irá executar uma determinada função para cada elemento do array, essa função possui quatro parâmetros sendo dois deles necessários o resultado dessa _HOF_ é um único valor.

Esses quatro parâmetros são:

- Acumulador, que iremos chamar de _acc_.
- Valor atual, que iremos chamar de _curr_.
- Index atual, que iremos chamar de _idx_.
- Array original, que iremos chamar de _array_.

O acumulador recebe o valor de retorno da função determinada, a cada atualização do acumulador esse valor é passado para a próxima iteração até que chegue na última posição do array. (Não se apavore que verá como funciona)

<!-- O resultado da função determinada se dá quando o valor atual chega no último valor do array original, quando isso acontecer significa que o acumulador já recebeu o resultado da função determinada para cada posição do array. (Não se apavore que verá como funciona) -->

> Lembrando que os dois primeiros parâmetros são necessários.

Usando aquele mesmo array do início, vamos supor que você quer somar a idade de todas as pessoas, como você iria realizar essa soma? Seria mais ou menos assim certo?

> Existe também a ideia de pegar a idade das pessoas com o **map** e somar todas as posições desse array, mas a forma mais direta é essa:

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

Novamente batemos naquela tecla: sempre que eu quiser trabalhar com arrays, vou usar um **for**? Como já falado as _HOFs_ existem para nos ajudar e facilitar nossa experiência com arrays. Então vamos colocar o **reduce** em jogo, já falamos sobre os parâmetros da função determinada, o **reduce** por si só já possui um parâmetro: o valor inicial.

O valor inicial é opcional, se ele for definido esse valor será usado na primeira chamada da função, se não o primeiro elemento do array ocupará esse lugar. Nesse caso definimos o valor inicial para 0.

Esse mesmo código escreveríamos assim:

```js
let somaIdades = pessoas.reduce((acc, curr) => acc + curr.idade, 0);
console.log(`A soma de todas as idades é: ${somaIdade}.`);
```

E como você já deve imaginar, a execução disse resulta em:

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

Assim vemos

```
Acumulador: 0 | Valor atual: 38.
Acumulador: 38 | Valor atual: 15.
Acumulador: 53 | Valor atual: 10.
Acumulador: 63 | Valor atual: 26.
```

Como o valor atual chegou a última posição do array original a função determinada não é mais executada e o valor retornado dela é o resultado da soma desses últimos dois valores (63 + 26).

> Como nesse exemplo estamos tratando com objetos, devemos definir o valor inicial para 0.

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

> No código acima se declararmos o valor inicial como 21, você tem ideia do que aconteceria, experimente!
## Exercícios

## Recursos adicionais
