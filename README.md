# Desafio Mega Sena

Projeto simples que gera números aleatórios no estilo da Mega Sena (valores entre 1 e 60).

Arquivos principais:

- `index.html` — página minimal que carrega o script.
- `script.js` — contém a função `megaSena(a)` que gera `a` números únicos aleatórios entre 1 e 60. A função valida que `a` esteja entre 6 e 9 (inclusive); se `a` estiver fora desse intervalo, retorna um array vazio.

Como executar rapidamente:

- Abra `index.html` no navegador e abra o console (F12) para ver a saída dos `console.log` presentes em `script.js`.
- Ou, se preferir testar no terminal com Node.js, abra o PowerShell na pasta do projeto e rode:

```powershell
node script.js
```

Descrição da função `megaSena(a)`:

- Recebe um número `a` (quantidade de números a gerar).
- Se `a` for menor que 6 ou maior que 9, imprime uma mensagem de erro e retorna `[]`.
- Caso contrário, gera números aleatórios entre 1 e 60 sem repetição até obter `a` valores e os retorna em um array.

