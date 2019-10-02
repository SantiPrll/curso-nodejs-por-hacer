const fileService = require("./file.service");

let listadoPorHacer = [];

const guardarBD = async () => {
  const data = JSON.stringify(listadoPorHacer);
  await fileService.create("../assets/data/por-hacer.json", data);
};

const cargaBD = () => {
  try {
    listadoPorHacer = require("../../assets/data/por-hacer.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

const crear = descripcion => {
  cargaBD();
  const promise = new Promise((resolve, reject) => {
    let porHacer = {
      descripcion,
      completado: false
    };

    listadoPorHacer.push(porHacer);
    return guardarBD()
      .then(() => resolve(porHacer))
      .catch(error => reject(error));
  });

  return promise;
};

const getLista = () => {
  cargaBD();

  return listadoPorHacer;
};

const actualizar = (descripcion, completado) => {
  cargaBD();

  const porHacer = listadoPorHacer.find(x => x.descripcion === descripcion);

  if (porHacer) {
    porHacer.completado = completado;
    guardarBD();
    return "Se actualizo la tarea.";
  } else {
    return "La tarea no existe.";
  }
};

const borrar = descripcion => {
  cargaBD();

  const porHacer = listadoPorHacer.find(x => x.descripcion === descripcion);
  if (porHacer) {
    listadoPorHacer = listadoPorHacer.filter(
      x => x.descripcion !== porHacer.descripcion
    );
    guardarBD();
    return "Se borro la tarea.";
  } else {
    return "La tarea no existe.";
  }
};

module.exports = {
  crear,
  getLista,
  actualizar,
  borrar
};
