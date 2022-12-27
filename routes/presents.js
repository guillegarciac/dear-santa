const express = require('express');
const router = express.Router();
const Present = require('../models/Present.model');

/* GET all presents */
router.get ("/", async (req,res,next) => {
  try {
      const presents = await Present.find({});
      res.render("presents", { presents });
  } catch (error) {
      next(error);
  }
})

/* GET one present */
/* ROUTE /presents/:presentId */
router.get ("/:presentId", async (req,res,next) => {
  const { presentId } = req.params;
  try {
    const present = await Present.findById(presentId);
    res.render("presentDetails", { present });
  } catch (error) {
    next(error);
  }
})

module.exports = router;