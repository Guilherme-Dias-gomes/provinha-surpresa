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
    if(temp >= 38)
        return true;
    
    else 
        return false;
}

export function CorPrimaria(cor) {
    if(cor == "Vermelho" || cor == "Amarelo" || cor == "Azul")
        return true;
    
    else 
        return false;

}


export function Ingresso (qtdInteira, qtdMeia, nac, diaSemana) {
    if(nac == "Brasileira" || nac == "Brasileiro" || nac == "brasileira" || nac == "brasileiro") 
        return (qtdInteira + qtdMeia) * 5;

    else if(diaSemana == "Quarta" || diaSemana == "quarta") 
        return (qtdInteira + qtdMeia) * 14.25;

    else 
        return (qtdInteira*28.50) + (qtdMeia*14.25);
}

export function Tabuada(numero) {
    let n = []

    for(let i = 0; i <= 10; i++) {
        n[i] = numero * i;
    }

    return n;
}

export function MaiorNumero(numero) {
    let n = Number.MIN_VALUE;

    for(let i of numero) {
        if(n < i) 
            n = i;
    }

    return n;
}

export function ContarFrequencia(texto, caractere) {
    let cont = 0;

    for(let i = 0; i < texto.length; i++) {
        if(texto[i] == caractere)
            cont++
    }

    return cont;
}