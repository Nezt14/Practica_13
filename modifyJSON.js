const fs = require('fs')
const fileName = 'biblioteca.json'

fs.readFile(fileName, 'utf-8', (err, data)=>{
    if(err){
        console.log('Error al leer el archivo de JSON:', err)
        return;
    }
    try{
        const libros =JSON.parse(data);
        libros[1].disponible = true;

        fs.writeFile(fileName, JSON.stringify(libros, null, 2), (err)=>{
            if(err){
            console.log('Error al escribir archivo JSON:', err);
            }else{
                console.log('Disponibilidad del libro actualizada exitosamente');
            }
        })
    }catch(error){
        console.error('Error al parsear el JSON:');
    }
})