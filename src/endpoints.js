import { Router } from 'express';
import {Dobro, Somar, media, Temperatura, CorPrimaria, Ingresso, ContarFrequencia, MaiorNumero, Tabuada} from './services.js';
const server = Router();

server.get('/dobro/:n', (req, resp) => {
    try {
        const numero = Number(req.params.n);
        const calc = Dobro(numero);
    
        resp.send({
            x: calc,
        })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.get('/somar', (req, resp) => {
    try {
        const n1 = Number(req.query.n1);
        const n2 = Number(req.query.n2);
        const calc = Somar(n1, n2)

        resp.send({
            x: calc,
        })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.post('/somar', (req, resp) => {
    try {
        const {n1, n2} = req.body;
        const calc = Somar(n1, n2);
    
        resp.send({
            x: calc,
        })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.post('/media', (req, resp) => {
    try {
        const {n1, n2, n3} = req.body;
        const x = media(n1, n2, n3);
    
        resp.send({
            x: x
        })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})


server.get('/temperatura', (req, resp) => {
    try {
        const temp = Number(req.query.temp);
        const febre = Temperatura(temp);
    
        resp.send({
            x: febre
        })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.get('/tabuada', (req, resp) => {
    try {
        const numero = Number(req.query.numero);
        const calc = Tabuada(numero);
    
        resp.send({
            x: calc
        })
    }

    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.get('/dia2/corPrimaria/:cor', (req, resp) => {
    try {
        const cor = req.params.cor;
        const x = CorPrimaria(cor);

        resp.send({
            primaria: x
        })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.post('/dia2/ingresso', (req, resp) => {
    try {
        const {qtdInteiras, qtdMeias, Nacionalidade, DiaDaSemana} = req.body;
        const x = Ingresso(qtdInteiras, qtdMeias, Nacionalidade, DiaDaSemana);

        resp.send({
            total: x
        })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})
export default server; 

server.get('/dia2/frequencia/:texto/:caractere', (req, resp) => {
    try {
        const txt = req.params.texto;
        const crt = req.params.caractere;
        const x = ContarFrequencia(txt, crt);
    
        resp.send({
            x: x
        })
    }
    catch(err) {
        resp.send({
            erro: err.message
        })
    }
})

server.post('/dia2/maiornumero', (req, resp) => {
    try{
        const {numeros} = req.body;
        const result = MaiorNumero(numeros);

        resp.send({
            x: result
        })
    }
    catch(err) {
        server.resp({
            erro: err.message
        })
    }
})