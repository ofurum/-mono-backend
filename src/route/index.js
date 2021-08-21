const express = require('express');
const router = express.Router();
const banks = require('../data/bankData');

router.get('/banks', async (req, res) => {
    if(req.query.search) {
        let search = () => {
            for (let bank of banks){
                if(bank.name.toLocaleLowerCase().includes(req.query.search))  return [bank]
            }
        }
        const searchedBank = await search()
        if(!searchedBank) return res.status(400).json({message: "Bank not found"})
        res.json(searchedBank).status(200)
    } else {
        res.json(banks).status(200)
    }
});


module.exports = router;