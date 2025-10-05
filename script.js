function megaSena (a) {
      // Verificação de limites
    if  (a < 6 || a > 9 ) {
        console.log("Número inválido, digite um número entre 6 e 9");
        return [];
    }

    let numeros = [];

    while (numeros.length < a) {
         // Gera número aleatório entre 1 e 60
        let numeroAleatorio = Math.floor(Math.random() * 60) + 1;
        
        // Verifica se já existe no array antes de adicionar
        if (!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio);
        }
    }

    return numeros;
}

// Exemplo de uso:
console.log(megaSena(6));   // Gera 6 números aleatórios de 1 a 60
console.log(megaSena(7));   // Gera 8 números aleatórios de 1 a 60
console.log(megaSena(10));  // Retorna mensagem de erro e array vazio