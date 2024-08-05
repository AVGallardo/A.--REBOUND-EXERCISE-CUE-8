this.showOption();

function showOption() {
    var option = Number(prompt("Que desea aprender?: \n 1.- Html \n 2.- Css \n 3.- Js \n 4.- Java \n 5.- Renunciar"));

    option != 5 ? this.showOption() : alert("Renuncia realizada con éxito ");    
}