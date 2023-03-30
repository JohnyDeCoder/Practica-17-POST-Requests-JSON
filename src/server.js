let express = require('express'); // inyección de la dependecia de express
let app = express(); // app que hace la función del servidor

let port = process.env.PORT || 3000; // definición del puerto de escucha

let personsRouter = require('./routes/person'); // importamos el router de person.js
let studentRouter = require('./routes/student'); // importamos el router de student.js
let displayStudentsRouter = require('./routes/displayData'); // importamos el router de displayData.js

app.use(express.urlencoded({ extended: true })); // para poder usar el body de las peticiones
app.use('/assets', express.static(__dirname + '/public')); // contenido estático
app.set('view engine', 'ejs'); // creamos un motor de plantillas

app.use(personsRouter); // usamos el router correspondiente
app.use(studentRouter);
app.use(displayStudentsRouter);

// // Solo 1 de las rutas debe estar disponible a la vez
// // app.post('/addStudent', function (req, res) {
// //     res.send(`Nombre: ${req.body.nombre} <br> Edad: ${req.body.edad} <br> NSS: ${req.body.nss} <br> Tipo de sangre: ${req.body.tipoSangre} <br> <a href="/student">Volver</a>`);
// // });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}); // escucha en el puerto