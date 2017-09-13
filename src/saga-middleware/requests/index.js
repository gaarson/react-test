import req from 'superagent';

const url = 'http://127.0.0.1:3001';

export const getDepartmentsUsers = () => (
  new Promise((resolve, reject) => {
    req.get(url + '/api/users')
      .end((err, res) => {
        if (err) reject(err);

        console.log(res.body);

        resolve(res.body);
      })
  })
);

export const employe = (employe, type) => (
  new Promise((resolve, reject) => {
    req(type, url + '/api/employe')
      .send(employe)
      .end((err, res) => {
        if (err) reject(err);

        console.log(res.body);

        resolve(res.body);
      })
  })
);
