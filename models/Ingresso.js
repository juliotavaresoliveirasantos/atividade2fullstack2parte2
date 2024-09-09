import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Ingresso = sequelize.define('Ingresso', {
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    // Remova o campo eventoId, pois ele não é necessário
});

export default Ingresso;
