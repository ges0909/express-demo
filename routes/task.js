const express = require('express');

const router = express.Router();

// get all tasks
router.get('/', (req, res /* , next */) => {
  res.send('GET');
});

// create a task
router.post('/', (req, res /* , next */) => {
  res.send('CREATE');
});

// read a task
router.get('/:id', (req, res /* , next */) => {
  res.send(`READ ${req.params}`);
});

// update a task
router.put('/:id', (req, res /* , next */) => {
  res.send(`UPDATE ${req.params}`);
});

// delete a task
router.delete('/:id', (req, res /* , next */) => {
  res.send(`DELETE ${req.params}`);
});

module.exports = router;
