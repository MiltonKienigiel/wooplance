

const controller = {
    index: (req,res) =>{
        res.render('gig')
    },
    create: (req,res) =>{
        res.render('gig-create')
    },
    edit:(req,res) =>{
        res.render('gig-edit')
    },
    myGigs: (req,res) =>{
        res.render('myGigs')
    }
}

module.exports = controller;