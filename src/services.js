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
