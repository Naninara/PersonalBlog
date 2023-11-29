const { response } = require("express");
const blogModel = require("../Models/BlogSchema");

const createBlogController = async (req, res) => {
  const data = req.body;

  const blog = new blogModel({ ...data });
  await blog
    .save()
    .then((response) => {
      console.log(response);
      res.status(201).json(response);
    })
    .catch((err) => res.status(400).json(err));
};

const getSingleBlogData = async (req, res) => {
  const id = req.params.id;
  await blogModel
    .findById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => console.log(err));
};

const AutoUpdateController = async (req, res) => {
  const id = req.params.id;
  await blogModel
    .findByIdAndUpdate(id, { ...req.body })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

const isPostedController = async (req, res) => {
  const id = req.params.id;
  const data = await blogModel.findOne({ _id: id });
  data.isPosted = true;

  await data
    .save()
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  createBlogController,
  getSingleBlogData,
  AutoUpdateController,
  isPostedController,
};
