const yargs = require("yargs");

const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripción de la tarea por hacer."
};
yargs
  .command("crear", "Crea una tarea por hacer.", { descripcion })
  .command("actualizar", "Cambio el estado de una tarea a completado.", {
    descripcion,
    completado: {
      default: true,
      alias: "c",
      desc: "Marca como completado o pendiete la tarea"
    }
  })
  .command("listar", "Lista todas las tareas por hacer.")
  .command("borrar", "Elimina la tarea.", { descripcion })
  .help().argv;

module.exports = {
  yargs
};
