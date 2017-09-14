const fs = require('fs');
const path = require('path');

const db = fs.readFileSync(path.join(__dirname, './db.json'));

exports.getDepsUsers = async () => (
  new Promise((resolve, reject) => {

    let departments = JSON.parse(db).departments;
    let employes = JSON.parse(db).employes;
    let result = [];

    result = departments.map(department => {
      department.employes = employes.filter(employe =>
        employe.department_id === department.id);
      return department;
    });
    resolve(result);

  })
);

exports.updateEmployeData = async (employe, update) => (
  new Promise((resolve, reject) => {

    let employes = JSON.parse(db).employes;
    let departments = JSON.parse(db).departments;
    let result = {};

    if(!update)
      result = employes.filter(e => e.id === +employe.id)[0];
    else {
      employes = employes.map(e => e.id === +employe.id ? employe : e);
      fs.writeFileSync(path.join(__dirname, './db.json'), JSON.stringify(({employes, departments})));
      result = employes.filter(e => e.id === +employe.id)[0];
    }

    resolve(result);

  })
);
