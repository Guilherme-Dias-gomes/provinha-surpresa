import { Router } from 'express';
import {Dobro, Somar, media, Temperatura} from './services.js';
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
        const temp = req.query.temp;
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
        const number = req.query.number;
        const calc = Tabuada(number);
    
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




export default server; 
// A