const { argv } = require('./config/yargs');
//const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('===POR HACER===');
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('===============');
        }
        break;
    case 'actualizar':
        let respuesta = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(respuesta);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("El comando no es reconocido");
        break;
}