const usuario = {};

const cidade = usuario.endereco?.cidade ?? 'Não informada';
console.log('Cidade do usuário:',cidade);

//faltou o "?." em "const cidade = usuario.endereco.cidade ?? "Não informada";"
