/* Crear la función denominada "validarTaxi" que reciba 
un objeto literal con varios atributos, incluido el año 
de fabricación. Luego, calcular la vida útil del taxi y, 
si es menor a 10 años, devolver true; de lo contrario, 
d
evolver false.
*/ 
function validatetaxi(automovil){
    let currentYear=2023;
    let years = currentYear - automovil.fabricacion
    alert(years)
    if(years<=10){
        alert('¿Es util?: ' + true)

    }else{
        alert('¿Es util?: '+ false)
//returm
    }
  
}
let automovil={
    marca:'Toyota',
    fabricacion:1999,
    placa: 'ADJ199',
    color:'black',
    
};

let result = validatetaxi(automovil)


