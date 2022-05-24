import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Curso = db.define("cursos", {
  codigo: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  ementa: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Curso;
