import req from 'superagent';

const url = 'http://127.0.0.1:3001';

export const getDepartmentsUsers = () => (
  new Promise((resolve, reject) => {
    req.get(url + '/api/users')
      .end((err, res) => {
        if (err) reject(err);

        resolve(res.body);
      })
  })
);

export const employeData = (employe, type) => (
  new Promise((resolve, reject) => {
    req(type, url + '/api/employe/' + employe.id)
      .send(employe)
      .end((err, res) => {
        if (err) reject(err);

        resolve(res.body);
      })
  })
);
