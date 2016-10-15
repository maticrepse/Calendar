import Sequelize from 'sequelize';
import event from './Event.js';

let config;
try {
  config = require('../../db-config.json');
} catch (e) {
  config = {
    database: process.env.database || 'tpo',
    user: process.env.db_user || 'tpo',
    password: process.env.db_password || '',
    options: {
      dialect: 'postgres',
      host: process.env.db_host || 'localhost'
    }
  };
}

const Conn = new Sequelize(config.database, config.user, config.password, config.options);

export const Event = event(Conn);

Conn.sync({
  force: true
}).then(() => {
  Event.create({
    when: '1480028400000',
    content: 'Interdiskont\nODPADE!',
    colorTag: 'RED',
  });
  Event.create({
    when: '1487890800000',
    content: 'Interdiskont\nODPADE!',
    colorTag: 'RED',
  });
});


export default Conn;
