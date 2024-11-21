const fs = require('fs')
const fileName = 'biblioteca.json'

fs.readFile(fileName, 'utf-8',(err, content)=>{
    if(err){
        console.log('Error al leer el archivo JSON', err)
        return;
    }
    try{
        const objectJSON = JSON.parse(content)
        console.log('Libros en la biblioteca:', objectJSON)
    }catch (error){
        console.log('Error al parsear el JSON', error)
    }
})