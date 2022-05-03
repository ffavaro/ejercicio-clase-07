let fechaActual = new Date(1998,10,3)
let año = fechaActual.getFullYear()
let mes =fechaActual.getMonth()
let dia = fechaActual.getDate()
let diaDeLaSemana = fechaActual.getDay()
let meses = ['Enero', 'Febrero','Marzo','Abril','Mayo','junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
console.log( 'Hoy es el ' + dia + ' de '+ meses[mes]+  ' del ' + año)