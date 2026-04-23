const express = require("express");
const noteModel = require("../models/note.models");

const app = express();
app.use(express.json());

//api for push data in DB

app.post("/notes", async (req, res) => {
  const data = req.body;
  await noteModel.create({
    title: data.title,
    discription: data.discription,
  });
  res.json({ message: "Note created successfully" });
});

//api for fatch data from

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.json({
    message: "note fatch successfull",
    notes: notes,
  });
});

// api for delete note

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findOneAndDelete({
    _id: id,
  });

  res.json({
    message: "delete succesfully",
  });
});

// update node

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const discription = req.body.discription;

  await noteModel.findOneAndUpdate({ _id: id }, { discription: discription });

  res.json({
    message: "update successfull",
  });
});

module.exports = app;
