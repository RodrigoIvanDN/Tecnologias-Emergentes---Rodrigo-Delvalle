const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+-=[]{}";

document.getElementById("generate").addEventListener("click", function() {
    const longitud = parseInt(document.getElementById("length").value);
    const incluirMayusculas = document.getElementById("uppercase").checked;
    const incluirMinusculas = document.getElementById("lowercase").checked;
    const incluirNumeros = document.getElementById("numbers").checked;
    const incluirSimbolos = document.getElementById("symbols").checked;

    let caracteresDisponibles = "";
    
    if (incluirMayusculas) {
        caracteresDisponibles += mayusculas;
    }
    if (incluirMinusculas) {
        caracteresDisponibles += minusculas;
    }
    if (incluirNumeros) {
        caracteresDisponibles += numeros;
    }
    if (incluirSimbolos) {
        caracteresDisponibles += simbolos;
    }

    if (caracteresDisponibles === "") {
        alert("Seleccioná al menos un tipo de carácter");
        return;
    }

    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        const indice = Math.floor(Math.random() * caracteresDisponibles.length);
        contraseña += caracteresDisponibles[indice];
    }

    document.getElementById("password").value = contraseña;
});  

document.getElementById("copy").addEventListener("click", function () {
    const password = document.getElementById("password").value;

    if (password === "") {
        alert("Primero generá una contraseña");
        return;
    }

    navigator.clipboard.writeText(password);
    alert("Contraseña copiada");
});