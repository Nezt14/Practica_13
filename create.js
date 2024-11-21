const fs = require('fs')

const fileName = 'archivo.json'
const content = {
    nombre: 'Kevin Flores',
    edad: 22,
    materias: ['Logica de Programacion', 'Realidad Nacional', 'Expresion Oral y Escrita'],
    activo: true
}

fs.writeFile(fileName, JSON.stringify(content, null, 2), (err)=>{
    if(err){
        console.log('Error al crear JSON', err)
    }else{
        console.log('El archivo fue creado exitosamente')
    }
})