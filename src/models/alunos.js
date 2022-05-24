import { Sequelize } from "sequelize";
import db from "../config/database.js";

const Aluno = db.define("alunos", {
  codigo: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Aluno;
