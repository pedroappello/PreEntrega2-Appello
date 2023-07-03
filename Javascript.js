function donantes(nombre,apellido,monto,inscripcion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.monto = monto;
    this.fecha = inscripcion;
}

const fechaInscripcion = new Date()
fechaInscripcion.toLocaleDateString

let invitacion = prompt("¿quisieras donar a la fundacion?")

if (invitacion == "si") {
 alert("Gracias por colaborar");  
 do { 
     nombre = prompt ("ingrese su nombre") 
     apellido = prompt ("ingrese su apellido")
     monto = prompt ("con cuanto quiere colaborar")
    break; 
    
 } while (invitacion == "si");
 alert ("Gracias por proteger los derechos de los niños")
}

console.log(fechaInscripcion)

const donante1 = new donantes ("Pedro","Appello","4000",new Date (2014,8,11)) 
const donante2 = new donantes ("Carlos","Garcia","3000",new Date (2018,11,9))
const donante3 = new donantes (nombre,apellido,monto, new Date () )

console.log(donante1)
console.log(donante2)
console.log(donante3)


const array = [donante1,donante2,donante3]
let NumeroDeDonantes = array.length
let h = 'el total de donantes es ${NumeroDeDonantes}'
alert (h)