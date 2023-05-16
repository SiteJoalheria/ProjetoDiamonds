const express = require ("express")
const router = express.Router()

router.get('/', (req,res) => {
    res.render('menu')
})

router.get('/adicionarprod', (req,res) => {
    res.render('admin/adicionarprod')
})

router.get('/produtos', (req,res) => {
    res.render('admin/produtos')
})




module.exports = router