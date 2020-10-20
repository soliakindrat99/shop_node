const router = require('express').Router();
const goods_controller = require('../controllers/goods_controller.js');

router.get('/', goods_controller.all_goods);
router.get('/:id', goods_controller.get_goods);

module.exports = router;