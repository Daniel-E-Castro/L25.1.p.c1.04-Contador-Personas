/*Sea el nombre y el sexo de varias personas (F-M). 
Se necesita un programa que lea estos datos,
reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.

Se tienen las siguientes personas: 
(Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo)

SALIDA: 
la salida requerida presenta el siguiente formato: 
Cantidad de personas: 12
Cantidad de hombres: 5
Cantidad de mujeres: 7 
*/

import Cl_Persona from "../Cl_Persona.js";
import Cl_Cantidad from "../Cl_Cantidad.js";

let Perso1 = new Cl_Persona("Luisa", "F")
let Perso2 = new Cl_Persona("Ana", "F")
let Perso3 = new Cl_Persona("Jose", "M")
let Perso4 = new Cl_Persona("Carmen", "F")
let Perso5 = new Cl_Persona("Rosa", "F")
let Perso6 = new Cl_Persona("Jose", "M")
let Perso7 = new Cl_Persona("Maria", "F")
let Perso8 = new Cl_Persona("Luz", "F")
let Perso9 = new Cl_Persona("Rafael", "M")
let Perso10 = new Cl_Persona("Liz", "F")
let Perso11 = new Cl_Persona("Marcos", "M")
let Perso12 = new Cl_Persona("Leo", "M")

let cantidad = new Cl_Cantidad()

cantidad.procesar(Perso1)
cantidad.procesar(Perso2)
cantidad.procesar(Perso3)
cantidad.procesar(Perso4)
cantidad.procesar(Perso5)
cantidad.procesar(Perso6)
cantidad.procesar(Perso7)
cantidad.procesar(Perso8)
cantidad.procesar(Perso9)
cantidad.procesar(Perso10)
cantidad.procesar(Perso11)
cantidad.procesar(Perso12)

alert(`Cantidad de Personas: ${cantidad.cantidadPersonas()}`)
alert(`Cantidad de Mujeres: ${cantidad.cantidadMujeres()}`)
alert(`Cantidad de Hombres: ${cantidad.cantidadHombres()}`)
