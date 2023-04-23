/* hasta versión 3 interpretación libre 
 hecho sobre labase del ejemplo mostradoanteriormente*/
/* versión 4: Ejercicio 1 Funciones iniciales 
 se ledejó el summary y details */
/* versión 5: Ejercicio 2 Funciones iniciales 
    Se agrega sobre la base del ej 1*/

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

let nombUsuario = prompt ("Inngrese su Nombre de Usuario" );
let opcIngr     = parseInt (prompt ("Ingrese la opción de Contenido Deseada (1 a 3)"));
 
function AplicaCont (colorfondo, colortxt, tamfuente, tipofuente, 
                        img, anchimg, usuario, colorusr, enlace) {
        miBody.style.backgroundColor = colorfondo;
        miBody.style.color      = colortxt;
        miBody.style.fontSize   = tamfuente;
        miBody.style.fontFamily = tipofuente;
        miImagen.src            = img;
        miImagen.style.width    = anchimg;
        miParraf2.textContent   = "Usuario: "+usuario+"";
        miParraf2.style.color   = colorusr;
        miLink.href             = enlace;
}

miSumario.textContent   = "+++ Ejercio Funciones - Usuario: "+nombUsuario+
            "/ Opción: "+opcIngr+" +++";

if (opcIngr == 1){ 
    AplicaCont ("orange", "black", "15px", "monospace", 
            imgNro1, "200px", nombUsuario, "red", linkNro1); }
else if (opcIngr == 2){ 
    AplicaCont ("black",  "white", "20px", "cursive"  , 
            imgNro2, "300px", nombUsuario, "violet", linkNro2); }
else if (opcIngr == 3){ 
    AplicaCont ("pink",   "green", "30px", "fantasy"  , 
            imgNro3, "450px", nombUsuario,  "white", linkNro3); }
else    { miSumario.textContent   = nombUsuario+
            ": ESA ES UNA OPCIÓN NO VALIDA (ingrese: 1 a 3) ";
    AplicaCont ("white", "black", "15px", null, null, null, null, null, null); }


