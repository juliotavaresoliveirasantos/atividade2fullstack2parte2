import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const EventoIngresso = sequelize.define('EventoIngresso', {
    // Não é necessário definir as colunas 'eventoId' e 'ingressoId' aqui
}, {
    timestamps: true // Manter os timestamps para createdAt e updatedAt
});

export default EventoIngresso;
