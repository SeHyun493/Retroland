const router = require('express').Router();
const {
  models: { OrderProducts },
} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const orderProduct = await OrderProducts.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['orderId', 'productId'],
    });
    res.json(orderProduct);
  } catch (err) {
    next(err);
  }
});

module.exports = router;