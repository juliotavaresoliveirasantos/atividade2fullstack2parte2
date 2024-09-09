import { Router } from 'express';
import IngressoController from '../Controle/ingressoCtrl.js';

const router = Router();

router.post('/', IngressoController.criarIngresso); // Criar ingresso e associar a eventos
router.get('/', IngressoController.listarIngressos);
router.get('/:id', IngressoController.buscarIngressoPorId);
router.put('/:id', IngressoController.atualizarIngresso);
router.delete('/:id', IngressoController.excluirIngresso);

export default router;
