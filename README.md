# Desafio: Classificação de Nível de Herói

Este repositório contém um desafio de JavaScript para classificar o nível de um herói com base em sua quantidade de experiência (XP). O objetivo é praticar lógica de programação e estrutura condicional em JS.

## 🚀 Desafio

Crie um programa em JavaScript que receba um valor numérico representando a quantidade de XP de um herói e classifique-o conforme a seguinte tabela:

|     __XP__    |  __NÍVEL__ |
|---------------|------------|
| 0 - 1.000     | Ferro      |
| 1.001 - 2.000 | Bronze     |
| 2.001 - 5.000 | Prata      |
| 5.001 - 7.000 | Ouro       |
| 7.001 - 8.000 | Platina    |
| 8.001 - 9.000 | Ascendente |
| 9.001 - 10.000| Imortal    |
| +10.000       | Radiante   |

O programa deve imprimir no console uma mensagem no seguinte formato:

```
    O Herói de nome [nome] está no nível de [classificação].
```

## 📌 Requisitos

- O nome do herói deve ser definido pelo usuário.
- O programa deve receber um valor numérico de XP e determinar o nível correspondente.
- O código deve ser escrito em JavaScript e pode ser executado no navegador ou no Node.js.

## 💡 Exemplo de Entrada e Saída

Entrada:
``` js
const nameHero = "Arthur";
const experienceHero = 4500;
```

Saída:
``` 
O Herói de nome Arthur está no nível de Prata.
```

## 🔧 Como executar o desafio

1. Clone este repositório:

```git clone https://github.com/GeCorreia4/desafio-classificadorNivelHeroi.git```

2. Acesse o diretório do projeto:

```cd desafio-classificadorNivelHeroi```

3. Execute o código em um ambiente Node.js:

```node main.js```

## 📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar! 🚀