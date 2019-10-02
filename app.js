const yargs = require("./config/yargs").yargs;
const todoService = require("./services/to-do.service");
const colors = require("colors");

const { argv } = yargs;
const { descripcion, completado } = argv;
const comando = argv._[0];
console.log(argv);

switch (comando) {
  case "crear":
    todoService
      .crear(descripcion)
      .then(porHacer =>
        console.log(`Crea por hacer: ${porHacer.descripcion}`.green)
      )
      .catch(error => console.log(error.red));
    break;
  case "listar":
    for (const item of todoService.getLista()) {
      console.log("==============Por Hacer============".green);
      console.log(`Descripción: ${item.descripcion}`);
      console.log(`Completado:  ${item.completado}`);
      console.log("==================================".green);
    }
    break;
  case "actualizar":
    let result = todoService.actualizar(descripcion, completado);
    console.log(result);
    break;
  case "borrar":
    let result2 = todoService.borrar(descripcion, completado);
    console.log(result2);
    break;
  default:
    console.log("Comando no es reconocido".red);
    break;
}
