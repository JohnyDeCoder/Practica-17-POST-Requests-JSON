let express = require('express'); // inyección de la dependecia
let router = express.Router(); // instanciamos el router

router.post('/addStudent', function (req, res) { // ruta para procesar los datos del formulario
    const nss = req.body.nss;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const tipoSangre = req.body.tipoSangre;

    // procesamos los datos del formulario aquí

    res.render('displayData', { nss, nombre, edad, tipoSangre }); // renderizamos la vista displayData.ejs
});

module.exports = router; // exportamos el router