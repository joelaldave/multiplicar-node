//const argv  = require('./config/yargs').argv;
const {argv}  = require('./config/yargs');

const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require ('./multiplicar/multiplicar');

let comando = argv._[0];

switch ( comando ) {
    case 'listar':
        listarTabla(argv.base , argv.limite )
            .then(lista => console.log(lista))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base , argv.limite)
            .then(archivo => console.log(`archivo creado :`, colors.rainbow (archivo )))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido')
        break;
}



 //let argv2 = process.argv;




 /* let parametro= argv[2];
 let base = parametro.split('=')[1]; */


 