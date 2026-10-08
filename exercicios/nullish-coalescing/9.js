const quantidade = 0;

console.log(quantidade || 10);
console.log(quantidade ?? 10);

// Os dois valores são diferentes por que "||" Retorna o primeiro valor Truthy. E se for Falsy, pega o proximo.
// Já o "??" Define um valor padrao (10) APENAS se for 'null' ou 'undefined'.
