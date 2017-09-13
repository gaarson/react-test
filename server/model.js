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

exports.updateEmployeData = (employe) => (
  new Promise((resolve, reject) => {

    let employes = JSON.parse(db).employes;
    let result = [];


  })
);
