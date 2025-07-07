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

let partida = {
  tabuleiro: [],  // estado inicial do seu tabuleiro
  jogadorAtual: 'branco',
};

io.on('connection', (socket) => {
  console.log('Novo jogador conectado:', socket.id);

  // Enviar estado atual
  socket.emit('estado_inicial', partida);

  // Receber movimento e repassar a todos
  socket.on('movimento', (dados) => {
    partida = { ...partida, ...dados }; // atualize com dados válidos
    socket.broadcast.emit('atualizar_tabuleiro', partida);
  });

  socket.on('disconnect', () => {
    console.log('Jogador saiu:', socket.id);
  });
});

httpServer.listen(4000, () => {
  console.log('Servidor Socket.IO rodando em http://localhost:4000');
});
