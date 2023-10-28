const express = require("express");
const Model = require("../models/userModel");

const router = express.Router();

router.post("/add", (req, res) => {
  console.log(req.body);

  new Model(req.body)
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// : denotes url parameter
router.get("/getbyemail/:email", (req, res) => {

    console.log(req.params.email);

    Model.find({email: req.params.email})
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

});

router.get("/getbyid", (req, res) => {
  res.send("getbyid response from user");
});

router.get("/update", (req, res) => {
  res.send("update response from user");
});

router.get("/delete", (req, res) => {
  res.send("update response from user");
});

module.exports = router;
