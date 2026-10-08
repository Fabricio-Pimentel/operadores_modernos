const pedido = {
    cliente: {
        nome: 'Pedro',
    },
};

const telefone = pedido.cliente?.telefone ?? 'Telefone não informado';

console.log('Telefone do cliente:', telefone);

//Adicionei const telefone = pedido.cliente?.telefone ?? 'Telefone não informado';
