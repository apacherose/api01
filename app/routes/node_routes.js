module.exports = function(app) {
  app.get("/notes/", (req, res) => {
    const notes = [
      { name: "note1", noteid: 1 },
      { name: "note2", noteid: 2 },
      { name: "note3", noteid: 3 }
    ];
    res.send(notes);
  });

  app.get("/notes/:id", (req, res) => {
    res.send({ name: "note found", noteid: req.params.id });
  });

  app.post("/notes", (req, res) => {
    console.log(req.body);
    res.send("Note created!");
  });
};
