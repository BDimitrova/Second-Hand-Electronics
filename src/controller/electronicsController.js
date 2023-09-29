const router = require('express').Router();

const electronicsServer = require('../services/electronicsServices')

router.get('/catalog', async (req, res) => {
    let electronics = await electronicsServer.getAll();
    res.render('electronics/catalog', { electronics });
});

router.get('/create-offer', (req, res) => {
    res.render('electronics/create');
});

router.post('/create-offer', async (req, res) => {
    try {
        await electronicsServer.create({ ...req.body, owner: req.user });
        res.redirect('/electronics/catalog');
    } catch (error) {
        console.log(error);
        res.render('electronics/create', { error: error.message });
    }
});

module.exports = router;