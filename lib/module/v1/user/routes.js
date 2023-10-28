var express = require("express");
var router = express.Router();
var validators = require("./validators");
var facade = require("./facade");

router.route("/status").get((req, res) => {
  console.log("lkjhgf");
  res.send({ name: "final" });
});

router.route("/nameList").get([], (req, res) => {
  facade
    .getName()
    .then((resp) => {
      return res.send({ send: "updated", res: resp });
    })
    .catch((err) => {
      return res.send({ error: err });
    });
});

router.route("/:id").put([], (req, res) => {
  facade
    .edit({ _id: req.params.id, data: req.body })
    .then((resp) => {
      return res.send({ send: "updated", res: resp });
    })
    .catch((err) => {
      console.log(err);
      return res.send({ error: err });
    });
});

router.route("/:id").get([], (req, res) => {
  facade
    .findById({ ...req.params })
    .then((resp) => {
      return res.send({ send: "find", res: resp });
    })
    .catch((err) => {
      return res.send({ error: err });
    });
});

router.route("/:id").delete([], (req, res) => {
  facade
    .removeById({ ...req.params })
    .then((resp) => {
      return res.send({ send: "deleted", res: resp });
    })
    .catch((err) => {
      return res.send({ error: err });
    });
});

router.route("/").get([], (req, res) => {
  const params = req.body;
  const query = req.query;
  facade
    .list({ ...params, ...query })
    .then((resp) => {
      return res.send({ send: "list", res: resp[0], count: resp[1] });
    })
    .catch((err) => {
      console.log(err);
      return res.send({ error: err });
    });
});

router.route("/").post([validators.create], (req, res) => {
  const { title, category, email, availability } = req.data;
  facade
    .create({ title, category, email, availability })
    .then((resp) => {
      return res.send({ send: "User List", res: resp });
    })
    .catch((err) => {
      console.error(err);
      return res.send({ error: err });
    });
});

module.exports = router;
