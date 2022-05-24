export function Dobro(n) {
    return n * 2;
}

export function Somar(n1, n2) {
    return n1 + n2;
}

export function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

export function Temperatura(temp) {
    let msg = true;

    if(temp >= 38)
        return msg;
    
    else {
        msg = false;
    }

    return msg;
}
export function CorPrimaria(cor) {
    let msg= true;

    if(    cor == "Vermelho" || cor == "Amarelo" || cor == "Azul"){
        return msg;
    }
    else {
        msg = false;
    }

    return msg;
}


export function ingresso (qtdInteira, qtdMeia, nac, diaSemana) {
    let calc = 0;

    if(nac == "Brasileira" || nac == "Brasileiro" || nac == "brasileira" || nac == "brasileiro") {
        calc = (qtdInteira + qtdMeia) * 5;
    }
    else if(diaSemana == "Quarta" || diaSemana == "quarta") {
        calc = (qtdInteira + qtdMeia) * 14.25;
    }
    else {
        calc = (qtdInteira*28.50) + (qtdMeia*14.25);
    }
    return calc;
}