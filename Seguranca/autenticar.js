import { assinar, verificarAssinatura } from './funcoesJWT.js';

export default function login(req, resp) {
    const { usuario, senha } = req.body;

    if (usuario === 'admin' && senha === 'admin') {
        req.session.usuario = usuario;
        resp.status(200).json({
            status: true,
            mensagem: 'Login efetuado com sucesso!',
            token: assinar({ usuario })
        });
    } else {
        resp.status(401).json({
            status: false,
            mensagem: 'Falha no login!'
        });
    }
}

export function logout(req, resp) {
    req.session.destroy(() => {
        resp.status(200).json({
            status: true,
            mensagem: 'Logout efetuado com sucesso!'
        });
    });
}

export function verificarAutenticacao(req, resp, next) {
    const authHeader = req.headers['authorization']; // Corrigido para 'authorization' em minúsculas
    if (authHeader) {
        const token = authHeader.split(' ')[1]; // Pega o token após 'Bearer'
        try {
            const tokenVerificado = verificarAssinatura(token);
            if (tokenVerificado && tokenVerificado.usuario === req.session.usuario) {
                next(); // Autenticação válida, prossegue para a próxima rota
            } else {
                resp.status(403).json({
                    status: false,
                    mensagem: 'Usuário não autenticado!'
                });
            }
        } catch (error) {
            resp.status(403).json({
                status: false,
                mensagem: 'Token inválido ou expirado!'
            });
        }
    } else {
        resp.status(401).json({
            status: false,
            mensagem: 'Token ausente!'
        });
    }
}
