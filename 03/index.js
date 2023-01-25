const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    addProduto: (produto) => {
        let produtoIgual = false
        for (const item of carrinho.produtos) {
            if (item.id === produto.id) {
                produtoIgual = true;
                item.qtd += produto.qtd;
            }
        }
        if (!produtoIgual) {
            carrinho.produtos.push(produto);
        }
    },
    calcularTotalDeItens: () => {
        let totalItens = 0;
        for (const item of carrinho.produtos) {
            totalItens += item.qtd;
        }
        return totalItens;
    },
    calcularTotalAPagar: () => {
        let totalPagar = 0;
        for (const item of carrinho.produtos) {
            totalPagar += (item.precoUnit * item.qtd) / 100;
        }
        return totalPagar;
    },
    imprimirDetalhes: () => {
        let i = 1;
        for (const item of carrinho.produtos) {
            console.log(`Item ${i} - ${item.nome} - ${item.qtd} und - R$ ${((item.qtd * item.precoUnit) / 100).toFixed(2)}`);
            i++
        }
    },
    imprimirResumo: () => {
        console.log(`Cliente: ${carrinho.nomeDoCliente}`);
        console.log("");
        carrinho.imprimirDetalhes();
        console.log("");
        console.log(`Total de itens: ${carrinho.calcularTotalDeItens()} itens`);
        console.log(`Desconto: R$ ${carrinho.calcularDesconto()}`);
        console.log(`Total a pagar: R$ ${carrinho.calcularTotalAPagar().toFixed(2) - carrinho.calcularDesconto()}`);
    },
    calcularDesconto: () => {
        let desconto1 = 0;
        let desconto2 = 0;
        const menorPreco = [];
        if (carrinho.calcularTotalDeItens() > 4) {
            for (const item of carrinho.produtos) {
                menorPreco.push(item.precoUnit);
            }
            desconto1 = Math.min(...menorPreco) / 100;
        }
        if (carrinho.calcularTotalAPagar() > 100) {
            desconto2 = carrinho.calcularTotalAPagar() / 10;
        }
        if (desconto1 >= desconto2) {
            return desconto1.toFixed(2);
        } else {
            return desconto2.toFixed(2);
        }
    }
}

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();