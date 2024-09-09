import sequelize from './config/database.js'
import express from 'express';
import session from 'express-session';
import rotaAutenticacao from './Rotas/rotaAutenticacao.js';
import eventoRoutes from './Rotas/eventoRoutes.js';
import ingressoRoutes from './Rotas/ingressoRoutes.js';
import './models/associations.js';
import dotenv from 'dotenv';
import { verificarAutenticacao } from './Seguranca/autenticar.js';

dotenv.config();

const app = express();
const host = 'localhost';
const porta = 4000;

app.use(session({
    secret: process.env.CHAVE_SECRETA || 'fallback_secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rotas
app.use("/autenticacao", rotaAutenticacao); // Rota de login/logout não precisa de autenticação
app.use("/eventos", verificarAutenticacao, eventoRoutes);
app.use("/ingressos", verificarAutenticacao, ingressoRoutes);

// Inicialização do servidor
app.listen(porta, host, async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log(`Servidor rodando em http://localhost:${porta}`);
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
});
