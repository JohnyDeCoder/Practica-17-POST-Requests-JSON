let express = require('express'); // inyección de la dependecia
let router = express.Router(); // instanciamos el router

router.get('/student', function (req, res) {
    res.render('student'); // renderizamos la vista student.ejs
});

module.exports = router; // exportamos el router