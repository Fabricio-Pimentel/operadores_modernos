// ==========================================
// 3. OPERADOR OU / OR (||)
// Retorna o primeiro valor Truthy. Se for Falsy, pega o próximo.
// Valores Falsy: false, 0, "", null, undefined, NaN
// ==========================================

console.log('\n=== 3. Operador OR (||) ===');

// Exemplo 1: Retorna o primeiro valor verdadeiro (truthy)
console.log('Nome preenchido:', 'Davi' || 'Visitante'); // "Davi"
console.log('Nome nulo:', null || 'Visitante'); // "Visitante"

// Exemplo 2: Comportamento com 0 e string vazia (valores falsy)
// 0 || considera 0 e "" como falsos e substitui pelo padrão:
const pontuacao = 0;
console.log('0 com || (troca por 10):', pontuacao || 10); // 10

const apelido = '';
console.log('String vazia com || (troca por padrao):', apelido || 'Anonimo'); // "Anonimo"

// Exemplo 3: Comparacao direta entre || e ?? com o numero 0
console.log('0 com || :', 0 || 10); // 10 (porque 0 e falsy)
console.log('0 com ?? :', 0 ?? 10); // 0 (porque 0 nao e null nem undefined)
