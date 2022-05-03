function dividir (a, b)
{
    let dividir = "No se puede dividir por cero";
    
    if (a != 0 && b != 0)
        dividir = a / b;

    return dividir;
}

module.exports = dividir;