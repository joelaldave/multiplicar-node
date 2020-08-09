

const fs = require('fs');

const colors = require('colors');

let listarTabla = (base, limite = 10) =>{

    return new Promise((resolve, reject)=>{
        
        if (!Number(base) || !Number(limite)) {
            reject('el valor introducido no es un numero');
            return;
        }
        let data='';
        
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`       
        }
        resolve(data);
    });
}



let crearArchivo = (base , limite=10 ) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('el valor introducido no es un numero');
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else 
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

module.exports={
    crearArchivo,
    listarTabla
}

