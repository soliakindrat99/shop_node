const router = require('express').Router();

router.get('/', (req, res) => {
    res.redirect('/goods');
});

module.exports = router;