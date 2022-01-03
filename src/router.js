const router = require("express").Router();

const PETS = [
  {
    id: 1,
    name: "doggy"
  },
  {
    id: 2,
    name: "cadddt"
  },
  {
    id: 3,
    name: "piggy"
  }
];

router.get("/pets", (req, res) => {
  res.json(PETS);
});

router.post("/pets", (req, res) => {
  if (!req.body.name) return res.json({ error: "Pet name is required" });

  PETS.push({ name: req.body.name });
  res.status(201).json({ result: "ok" });
});

module.exports = router;
