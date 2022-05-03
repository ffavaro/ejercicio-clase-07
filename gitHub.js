// Método map()
let notas = [10,20,3,4,5];
let notasHastaEl100 = notas.map(function(numero){
 return numero*10
})
//  console.log(notasHastaEl100)
//Método filter()
let notasAltas = notas.filter(function(numero){
return numero>=10
})