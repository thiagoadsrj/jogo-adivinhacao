# 🎯 Jogo da Adivinhação

Um jogo simples feito em **HTML, CSS e JavaScript**, onde o jogador tenta adivinhar um número secreto entre 0 e 10. Ideal para estudos de lógica, manipulação do DOM e eventos em JavaScript.

---

## 📝 Sobre o jogo

O sistema gera um número aleatório sempre que o jogo começa ou quando o jogador clica em **Jogar novamente**. O objetivo é adivinhar o número usando a menor quantidade de tentativas possível. Quando o número é acertado, uma segunda tela aparece mostrando quantas tentativas foram feitas.

---

## 📂 Estrutura do Projeto

```
ajogo-adivinhacao/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── script/
│       └── script.js
└── README.md
```

> Certifique-se de ajustar o caminho das pastas caso use nomes diferentes.

---

## 🚀 Como executar

1. Baixe ou clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Abra o arquivo **index.html** no navegador.
3. Comece a jogar!

---

## 🕹️ Como funciona

* Digite um número entre **0 e 10**.
* Clique em **Adivinhar**.
* O jogo verifica se o número está correto.
* Ao acertar, uma tela de resultado mostra quantas tentativas foram necessárias.
* Clique em **Jogar novamente** para reiniciar.

---

## 🧠 Lógica do JavaScript

### Funções principais:

* `gerarNumero()` → cria um novo número aleatório.
* `Jogar()` → verifica o número digitado.
* `resetGame()` → reinicia tentativas e gera novo número.
* `toggleScreen()` → alterna entre as telas.

---

## 💡 Melhorias futuras

* Adicionar dicas como: "O número é maior" ou "O número é menor".
* Estilizar mensagens com animações.
* Criar modo difícil com números maiores.
* Salvar recorde usando localStorage.
* Adicionar sons de vitória ou erro.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Basta abrir uma issue ou enviar um pull request.

---

## 📜 Licença

Este projeto está sob licença MIT. Fique à vontade para usar e modificar.

---

## ✨ Autor

Criado por **Thiago Gomes** como parte de estudos de desenvolvimento web.
