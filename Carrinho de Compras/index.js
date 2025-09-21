// IMPORTANTE: Na DIO, as funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets": lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let operacao = parseInt(gets());
let quantidade = parseInt(gets());

let estoque = 5;

// Verifica a operação
if (operacao === 1) {
    // Adiciona ao estoque
    estoque += quantidade;
    print(estoque);
} else if (operacao === 2) {
    // Tenta retirar do estoque
    if (quantidade > estoque) {
        print("Estoque insuficiente");
    } else {
        estoque -= quantidade;
        print(estoque);
    }
}
