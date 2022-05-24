import model from "../models/alunos.js";

function obterTodos(req, res) {
  model.findAll().then((result) => res.json(result));
}

function obterAluno(req, res) {
  model.findByPk(req.params.codigo).then((result) => res.json(result));
}

function adicionarAluno(req, res) {
  model.create({
    nome: req.body.nome,
  }).then((result) => res.json(result));
}

async function atualizarAluno(req, res) {
  await model.update(
    {
      nome: req.body.nome,
    },
    {
      where: {
        codigo: req.params.codigo,
      },
    }
  );

  model.findByPk(req.params.codigo).then((result) => res.json(result));
}

async function excluirAluno(req, res) {
  await model.destroy({
    where: {
      codigo: req.params.codigo,
    },
  });

  model.findAll().then((result) => res.json(result));
}

export default {
  obterTodos,
  adicionarAluno,
  obterAluno,
  atualizarAluno,
  excluirAluno,
};
