import Sequelize from 'sequelize';

const Event = (Conn) =>
  Conn.define('event', {
    when: {
      type: Sequelize.DATE,
      allowNull: false
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    colorTag: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

export default Event;
