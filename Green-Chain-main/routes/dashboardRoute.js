const express = require("express");

const router = express.Router();

// authentication routes
router.get("/dashboard",(req,res)=>{
    res.render('dashboard')
})

router.get("/mark-co2",(req,res)=>{
    res.render('markCo2')
})

router.get("/report-co2",(req,res)=>{
    res.render('reportCo2')
})

module.exports = router;