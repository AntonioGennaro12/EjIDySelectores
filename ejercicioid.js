/* hasta versión 3 interpretación libre 
 hecho sobre labase del ejemplo mostradoanteriormente*/
/* versión 4: Ejercicio 1 Funciones iniciales 
 se ledejóelsummary y details */

const miBody    = document.querySelector("body");
const miSumario = document.querySelector("#mi-sum");
const miImagen  = document.querySelector("#mi-imagen");
const miParraf1 = document.querySelector("#mi-parrafo1");
const miParraf2 = document.querySelector("#mi-parrafo2");
const miLink    = document.querySelector("#mi-link");

const imgNro1   = 'https://us.123rf.com/450wm/bpenny/bpenny2212/bpenny221200206/196007439-una-imagen-generada-por-computadora-en-3d-de-un-adorable-gatito-kawaii-americano-de-pelo-corto.jpg?ver=6'; 
const imgNro2   = 'https://http2.mlstatic.com/D_NQ_NP_828637-MLA27477438948_062018-O.jpg'; 
const imgNro3   = 'https://www.shutterstock.com/image-photo/javascript-logo-programming-code-js-260nw-2107491410.jpg'; 

const linkNro1  = 'https://erick-c3.github.io/Trayecto-de-Programador-/'; 
const linkNro2  = 'https://discord.com/'; 
const linkNro3  = 'https://stackoverflow.com/'; 

let opcIngr     = parseInt(prompt("Ingrese la opción de Contenido Deseada (1 a 3)"));

function AplicaCont (colorfondo, colortxt, img, enlace) {
    miBody.style.backgroundColor = colorfondo;
    miBody.style.color = colortxt;
    miImagen.src       = img;
    miLink.href        = enlace;
}

miSumario.textContent   = "+++ Ejercio Funciones con Selectores Op = "+opcIngr+" +++";

if      (opcIngr == 1){ AplicaCont ("orange", "black", imgNro1, linkNro1); }
else if (opcIngr == 2){ AplicaCont ("black",  "white", imgNro2, linkNro2); }
else if (opcIngr == 3){ AplicaCont ("pink" ,  "green", imgNro3, linkNro3); }
else    { miSumario.textContent   = " OPCIÓN NO VALIDA (ingrese: 1 a 3) ";
                        AplicaCont ("white", "black", null, null); }


/*
miParraf1.textContent   = "Incluyo una Pantalla con Datos (tamaño a justado)";
miImagen.width          = '320';
miImagen.height         = '240';
miImagen.src            = imgNro1;
miParraf2.textContent  = "Uso este Link para ver el ejercicio ID & Selectores";
miLink.textContent      = "Enlace_al_Ejercicio_Id_y_Selectores.pdf";
miLink.href             = 'https://docs.google.com/presentation/d/1lAR2EewB7pa0dDjJaagQYVHA0WDRN_pjQ6rG1N-7Q9I/edit?usp=sharing';
*/

