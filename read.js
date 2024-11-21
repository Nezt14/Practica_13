const fs = require('fs')
const fileName = 'archivo.json'

fs.readFile(fileName, 'utf8', (err, content)=>{
    if(err){
        console.log('Error al leer el archivo JSON', err)
        return;
    }
    try{
        const objectJSON = JSON.parse(content)
        console.log('Contenido del archivo JSON', objectJSON)
    }catch(error){
        console.log('Error al parsear el JSON', error)
    }
})