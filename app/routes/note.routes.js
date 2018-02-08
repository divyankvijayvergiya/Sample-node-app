module.exports = function(app) {
  var notes = require('../controllers/node.controller.js');

  //Create a new Notes
  app.post('/notes', notes.create);

  //Retrieve all notes
  app.get('/notes', notes.findAll);

  //Retrieve a single note with noteId
  app.get('/notes/:noteId', notes.findOne);

  //Update a Note with noteId
  app.put('/notes/:noteId', notes.update);

  //Delete a Note with noteId
  app.delete('/notes/:noteId', notes.delete);
}
