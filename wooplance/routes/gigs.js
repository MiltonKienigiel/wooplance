const express = require('express');
const router = express.Router();


//-------------------------------
router.get('/show/:id?', (req,res) => {
    res.render('gig-detail');
})
router.get('/edit/:id?', (req,res) => {
    res.render('gig-edit');
})
router.get('/add', (req,res) => {
    res.render('gig-add');
})



module.exports = router;