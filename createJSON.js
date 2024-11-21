const fs = require('fs')
const fileName = 'biblioteca.json';

const libros = [
    { titulo: 'Cien anos de soledad', autor: 'Gabriel Garcia Marquez', disponible: true},
    { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', disponible: false},
    { titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', disponible: true}
]

fs.writeFile(fileName, JSON.stringify(libros, null, 2),(err)=>{
    if(err){
        console.log('Error al crear archivo JSON:', err)
        return;
    }else{
        console.log('Archivo JSON creado exitosamente con tres libros iniciales')
    }
})