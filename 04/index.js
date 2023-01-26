const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: (valor) => {
        contaBancaria.saldo += valor;
        contaBancaria.historicos.push(
            {
                tipo: "Depósito",
                valor: valor,
            }
        );
        console.log(`Deposito de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${contaBancaria.nome}`);
    },
    sacar: (valor) => {
        if (valor > contaBancaria.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${contaBancaria.nome}`);
        } else {
            contaBancaria.saldo -= valor;
            contaBancaria.historicos.push(
                {
                    tipo: "Saque",
                    valor: valor,
                }
            );
            console.log(`Saque de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${contaBancaria.nome}`);
        }
    },
    extrato: () => {
        console.log(`Extrato de ${contaBancaria.nome} - Saldo: R$${(contaBancaria.saldo / 100).toFixed(2)}`);
        console.log("Histórico:");
        for (const historico of contaBancaria.historicos) {
            if (historico.tipo === "Depósito") {
                console.log(`Depósito de R$${(historico.valor / 100).toFixed(2)}`);
            } else if (historico.tipo === "Saque") {
                console.log(`Saque de R$${(historico.valor / 100).toFixed(2)}`);
            }
        }
    }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();