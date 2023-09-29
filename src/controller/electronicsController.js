const router = require('express').Router();

const electronicsServer = require('../services/electronicsServices')

router.get('/catalog', async (req, res) => {
    let electronics = await electronicsServer.getAll();
    res.render('electronics/catalog', { electronics });
});

module.exports = router;