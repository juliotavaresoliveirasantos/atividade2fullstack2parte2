import { Router } from 'express';
import login, { logout } from '../Seguranca/autenticar.js';

const rotaAutenticacao = new Router();

rotaAutenticacao.post('/login', login);  // Login não precisa de autenticação
rotaAutenticacao.get('/logout', logout);

export default rotaAutenticacao;
