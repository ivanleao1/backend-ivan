import CreateProdutoController from '@controllers/produto/CreateProdutoController';
import ReadAllProdutosController from '@controllers/produto/ReadAllProdutosController';
import { Router } from 'express';

const routes = Router();

// --- PRINCIPAL ---
routes.get('/', (req, res) => {
  return res.json({ message: 'Home Page' });
});

// --- PRODUTO ---
routes.get('/produtos', new ReadAllProdutosController().handle);
routes.post('/produtos', new CreateProdutoController().handle);

export default routes;
