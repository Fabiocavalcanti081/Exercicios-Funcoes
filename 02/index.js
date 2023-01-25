function dryLigadoDesligado() {
    if (carro.ligado === true) {
        console.log(`Carro ligado. Velocidade: ${carro.velocidade}.`);
    } else {
        console.log(`Carro desligado. Velocidade: ${carro.velocidade}.`);
    }
}

const carro = {
    ligado: false,
    velocidade: 0,
    ligar: () => {
        if (carro.ligado === true) {
            console.log("Este carro já está ligado.");
        } else {
            carro.ligado = true;
            dryLigadoDesligado();
        }
    },
    desligar: () => {
        if (carro.ligado === false) {
            console.log("Este carro já está desligado.");
        } else {
            carro.ligado = false;
            carro.velocidade = 0;
            dryLigadoDesligado();
        }
    },
    acelerar: () => {
        if (carro.ligado === false) {
            console.log("Não é possível acelerar um carro desligado.");
        } else {
            carro.velocidade += 10;
            dryLigadoDesligado();
        }
    },
    desacelerar: () => {
        if (carro.ligado === false) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else {
            carro.velocidade -= 10;
            dryLigadoDesligado();
        }
    }
}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();