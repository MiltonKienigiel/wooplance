const express = require('express');
const router = express.Router();


//-------------------------------
router.get('/profile/:id?', (req,res) => {
    res.render('profile');
})
//-------------------------------
router.get('/profile/edit/:id?', (req,res) => {
  res.render('profile-edit');
})
//-------------------------------
router.get('/register', (req,res) => {
  res.render('register');
})
//-------------------------------
router.get('/login', (req,res) => {
  res.render('login');
})
//-------------------------------
router.get('/dasboard', (req,res) => {
  res.render('dashboard');
})



module.exports = router;