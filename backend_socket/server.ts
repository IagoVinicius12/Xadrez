import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173", // URL do seu frontend
        methods: ["GET", "POST"]
    }
});

let jogo = {
    tabuleiro: [],               // Estado atual do tabuleiro
    jogadorAtual: 'white',      // De quem é a vez
    jogadores: {} as { [id: string]: { cor: string } },           // { socket.id: { cor: 'branco' ou 'preto' } }
    ordemJogadores: [] as string[],         // [socket.id1, socket.id2]
    jogadas: 0
};

io.on('connection', (socket) => {

    if (Object.keys(jogo.jogadores).length < 2) {
        const cor = Object.values(jogo.jogadores).map(j => j.cor).includes("white") ? "black" : "white";
        jogo.jogadores[socket.id] = { cor };
        jogo.ordemJogadores.push(socket.id)

        // Enviar estado atual
        socket.emit('estado_inicial', {
            cor,
            jogadorAtual: 'white',
            tabuleiro: jogo.tabuleiro,
            jogadas: 0
        });
        console.log(jogo.jogadorAtual)
        console.log(jogo.jogadores)
        console.log('novo Jogador conectado')
    }
    else {
        socket.emit('registrado como espectador', {
            tabuleiro: jogo.tabuleiro,
            jogo: jogo.jogadorAtual,
            jogadas: 0
        })
        console.log('novo espectador conectado')
    }
    // Receber movimento e repassar a todos
    socket.on('movimento', (dados) => {
        const jogador = jogo.jogadores[socket.id]
        if (!jogador) {
            return
        }
        console.log('jogador agora:', dados.jogadorAtual)
        jogo.tabuleiro = dados.tabuleiro
        jogo.jogadorAtual = dados.jogadorAtual // atualize com dados válidos
        jogo.jogadas = dados.jogadas
        socket.broadcast.emit('atualizar_tabuleiro', {
            tabuleiro: jogo.tabuleiro,
            jogadorAtual: jogo.jogadorAtual,
            jogadas: jogo.jogadas,
        });
    });

    socket.on('disconnect', () => {
        if (jogo.jogadores[socket.id]) {
            console.log(`🚪 Jogador saiu: ${socket.id}`);
            delete jogo.jogadores[socket.id];
            jogo.ordemJogadores = jogo.ordemJogadores.filter(id => id !== socket.id);
        } else {
            console.log(`👋 Espectador saiu: ${socket.id}`);
        }

        // Se todos saíram, reiniciar o jogo
        if (Object.keys(jogo.jogadores).length === 0) {
            console.log("🔄 Reiniciando jogo");
            jogo = {
                tabuleiro: [],
                jogadorAtual: 'white',
                jogadores: {},
                ordemJogadores: [],
                jogadas: 0
            };
        }
    });
});

httpServer.listen(4000, () => {
    console.log('Servidor Socket.IO rodando em http://localhost:4000');
});
