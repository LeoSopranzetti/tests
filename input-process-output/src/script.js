const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Exemplo de código que lê uma linha do console
rl.question('Digite o nome do seu jogador ', (resposta) => {
  console.log(`Bem vindo ${resposta}`);
  rl.close();
});
