import Evento from './Evento.js';
import Ingresso from './Ingresso.js';
import EventoIngresso from './EventoIngresso.js';

// Relacionamento N:N entre Evento e Ingresso, utilizando a tabela intermediária 'EventoIngresso'
Evento.belongsToMany(Ingresso, { through: EventoIngresso, as: 'ingressos' });
Ingresso.belongsToMany(Evento, { through: EventoIngresso, as: 'eventos' });
