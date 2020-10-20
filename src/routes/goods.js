const router = require('express').Router();
const goods_controller = require('../controllers/goods_controller.js');

router.get('/', goods_controller.all_goods);
router.get('/:id', goods_controller.get_goods);
router.post('/', goods_controller.create_goods);
router.delete('/:id', goods_controller.delete_goods);
router.put('/:id', goods_controller.update_goods);

module.exports = router;