const fileSystem = require("fs");

const create = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    fileSystem.writeFile(path, data, err => {
      if (err) reject(err);
      else resolve(`Archivo creado`);
    });
  });

  return promise;
};

module.exports = {
  create
};
