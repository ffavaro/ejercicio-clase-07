function agregarHttp(url) {
    return 'http://'+ url
}
 let acumulador = []
function procesar(url,agregarHttp){ 
 for (let i=0;i<url.length;i++){
    acumulador.push(agregarHttp(url[i]))
 }
 console.log(acumulador)
}
procesar(["www.google.com","www.yahoo.com"],agregarHttp)
