const express = require('express');
const router = express.Router();


//-------------------------------
router.get('/', (req,res) => {
    res.render('index');
})
router.get('/search', (req,res) => {
    res.render('search-results');
})

router.get('/categories', (req,res) => {
    res.render('categories');
})

module.exports = router;