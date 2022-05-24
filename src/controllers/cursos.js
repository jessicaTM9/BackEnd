import CursoRepository from "../models/cursos.js";

function obterTodos(req, res) {
  CursoRepository.findAll().then((result) => {
    return res.json(result);
  });
}

function obterCurso(req, res) {
  CursoRepository.findByPk(req.params.codigo).then((result) =>
    res.json(result)
  );
}

function adicionarCurso(req, res) {
  CursoRepository.create({
    descricao: req.body.descricao,
    ementa: req.body.ementa,
  }).then((result) => res.json(result));
}

async function atualizarCurso(req, res) {
  await CursoRepository.update(
    {
      descricao: req.body.descricao,
      ementa: req.body.ementa,
    },
    {
      where: {
        codigo: req.params.codigo,
      },
    }
  );

  CursoRepository.findByPk(req.params.codigo).then((result) =>
    res.json(result)
  );
}

async function excluirCurso(req, res) {
  await CursoRepository.destroy({
    where: {
      codigo: req.params.codigo,
    },
  });

  CursoRepository.findAll().then((result) => res.json(result));
}

export default {
  obterTodos,
  adicionarCurso,
  obterCurso,
  atualizarCurso,
  excluirCurso,
};
