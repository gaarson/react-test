const router = require('express').Router();
const model = require('./model.js');

router.get('/users', async (req, res) => {
  try {
    const list = await model.getDepsUsers();
    res.json(list);
  } catch (error) {
    res.status(500).send({error: 'Ошибка: ' + error})
  }
});

router.post('/employe/:id', async (req, res) => {
  try {
    const employe = await model.updateEmployeData(req.body, true);
    res.json(employe);
  } catch (error) {
    res.status(500).send({error: 'Ошибка: ' + error})
  }
});

router.get('/employe/:id', async (req, res) => {
  try {
    const employe = await model.updateEmployeData(req.params);
    res.json(employe);
  } catch (error) {
    res.status(500).send({error: 'Ошибка: ' + error})
  }
});

module.exports = router;