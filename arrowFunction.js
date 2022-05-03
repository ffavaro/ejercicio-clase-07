let persona = {
    nombre: "Fran",
    saludar: () => 
    {
        console.log(this.nombre);
    }
}

console.log(persona.saludar());
