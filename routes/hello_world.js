const router = require("express").Router();

router.route('/').get((req, res) => {
    res.send("Hello World");
});

router.route('/ihtfp').get((req, res) => {
    res.send("I Hate This Place");
});

module.exports = router;