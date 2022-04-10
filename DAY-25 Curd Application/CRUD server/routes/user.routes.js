const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/user.model");

const router = express.Router();

// CRUD Routes
// ---------------------------------------------------
router.get("/data", (req, res) => {
  console.log("GET Request for Data Recieved");

  User.find((err, users) => {
    if (err) {
      errorHandler(err);
    } else {
      res.json(users);
    }
  });
});

router.delete("/delete/:id", (req, res) => {
  User.findByIdAndDelete(
    {
      _id: req.params.id,
    },
    (err, deletedUser) => {
      if (err) {
        console.log("Error is delete: ", err);
      } else {
        console.log("User got deleted.");
      }
    }
  );
});

router.get("/edit/:id", (req, res) => {
  User.findById(req.params.id, (err, EditUser) => {
    if (err) {
      console.log("Error in edit get: ", err);
    } else {
      res.json(EditUser);
    }
  });
});

router.post("/edit/:id", (req, res) => {
  User.findById(req.params.id, (err, updateUser) => {
    if (err) {
      console.log("Error in edit post: ", err);
    } else {
      updateUser.username = req.body.username;
      updateUser.usermail = req.body.usermail;
      updateUser.usercity = req.body.usercity;
      updateUser
        .save()
        .then((userupdate) => {
          //it is sending the message to the ajax
          res.json({ message: userupdate });
        })
        .catch((err) => {
          console.log("error in update:", err);
        });
    }
  });
});

router.post("/add", (req, res) => {
  console.log(req.body);
  let user = new User(req.body);
  user
    .save()
    .then((dbRes) => {
      console.log(dbRes);
      res.json({
        message: dbRes,
      });
    })
    .catch((err) => {
      console.log("Error in add: ", err);
    });
});

module.exports = router;
