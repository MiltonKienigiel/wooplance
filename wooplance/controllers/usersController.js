

const controller = {
    index: (req,res) =>{
        res.render('profile')
    },
    register: (req,res) =>{
        res.render('register')
    },
    login:(req,res) =>{
        res.render('login')
    },
    edit:(req,res) =>{
        res.render('profile-edit')
    },
    dashboard:(req,res) =>{
        res.render('dashboard')
    },
}

module.exports = controller;