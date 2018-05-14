const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id:1, name: "Fireball", color: "red", type: "Sorcery", set: "Fourth Edition"},
    {id:2, name: "Aegis Angel", color: "white", type: "Creature", set: "Magic Origins"},
    {id:3, name: "Dreadwaters", color: "blue", type: "Sorcery", set: "Magic Origins"},
    {id:4, name: "Eagle of the Watch", color: "white", type: "Creature", set: "Magic Origins"},
    {id:5, name: "Evolutionary Leap", color: "green", type: "Enchantment", set: "Magic Origins"},
    {id:6, name: "Sengir Vampire", color: "black", type: "Creature", set: "Magic Origins"}
  ]);
});

module.exports = router;
