let express = require('express'); // inyección de la dependecia
let router = express.Router(); // instanciamos el router

router.get('/student', function (req, res) {
    res.render('student'); // renderizamos la vista student.ejs
});

router.post('/addStudent', function (req, res) { // ruta para procesar los datos del formulario
    const nss = req.body.nss;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const tipoSangre = req.body.tipoSangre;

    // procesamos los datos del formulario aquí

    res.render('displayData', { nss, nombre, edad, tipoSangre }); // renderizamos la vista displayData.ejs
});

router.post('/personJson', express.json({type:'*/*'}), function (req, res) { // se agrega los parámetros involucrados en la petición POST
    console.log(`nombre: ${req.body.nombre}
                apellido: ${req.body.apellido}`); // se imprime en consola los datos JSON recibidos
});

router.get('/testJson', function (req, res) { // agregamos una ruta para probar el envío de datos en formato JSON la cual renderiza la vista testJson.ejs
    res.render('testJson');
});

// router.get('/person', function (req, res) { // página principal
//     res.send('¡Has solicitado el listado de personas!'); // enviamos un mensaje
// });

module.exports = router; // exportamos el router