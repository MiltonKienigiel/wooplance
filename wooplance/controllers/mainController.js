

const controller = {
    index: (req,res) =>{
        res.render('index')
    },
    categories: (req,res) =>{
        res.render('categories')
    },
    search:(req,res) =>{
        res.render('search-results')
    },
    chat:(req,res) =>{
        res.send('chat')
    },
}

module.exports = controller;