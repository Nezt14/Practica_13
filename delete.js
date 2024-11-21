const fs = require('fs')
const fileName = 'archivo.json'

fs.readFile(fileName, 'utf-8', (err, content)=>{
    if(err){
        console.log('Error al leer el archivo JSON', err)
        return;
    }
    try{
        const objectJSON=JSON.parse(content)
        delete objectJSON.activo;
        const newContent = JSON.stringify(objectJSON, null, 2)
        fs.writeFile(fileName, newContent,(err)=>{
            if(err){
                console.log('Error al escribir archivo JSON', err)
            }
            console.log('Valor eliminado del archivo JSON exitosamente')
        })
    }catch (error){
        console.log('Error al parsear el JSON', error)
    }
})