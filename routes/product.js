const express = require('express');

const router = express.Router();


const products = [
    {
        id: 1,
        sku: '360751278',
        path: [
            'Товари для дому',
            'Меблі',
            'Столи',
            'Комп\'ютерні столи',
            'Комп\'ютерні столи Без бренда'
        ], 
        name: 'Письмовий стіл у стилі Лофт L6 Клен (50х80х75см) (S6K4508075)',
        price: '1849',
        seller: 'MLO',
        photo: '',

    }
];

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const prod = products.find((item) => item.id === id);
    res.render('product-page', { products: prod});
});


module.exports = router;

