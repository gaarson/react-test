const router = require('express').Router();
const model = require('./model.js');

router.get('/users', async (req, res) => {
  try {
    const list = await model.getDepsUsers();
    console.log(list);
    res.json(list);
  } catch (error) {
    res.status(500).send({error: 'Ошибка: ' + error})
  }
});

router.post('/update_user/:id', (req, res) => {

});

module.exports = router;