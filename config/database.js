import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize('sistema_venda_ingressos', 'database', 'database1', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
