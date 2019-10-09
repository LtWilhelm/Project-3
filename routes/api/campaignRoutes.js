const router = require('express').Router();
const Campaign = require('../../controller/Campaign');

router.route('/')
    .get(Campaign.findAll)
    .post(Campaign.create);

router.route('/:id')
    .delete(Campaign.delete);

module.exports = router;