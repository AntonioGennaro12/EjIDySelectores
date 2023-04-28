/* hasta versión 3 interpretación libre 
 hecho sobre labase del ejemplo mostradoanteriormente*/
/* versión 4: Ejercicio 1 Funciones iniciales 
 se ledejó el summary y details */
/* versión 5: Ejercicio 2 Funciones iniciales 
    Se agrega sobre la base del ej 1*/

/* Se definen toda las constantes para acceso a los distintos elementos  */
const miBody    = document.querySelector("body");
const miSumario = document.querySelector("#mi-sum");
const miImagen  = document.querySelector("#mi-imagen");
const miParraf1 = document.querySelector("#mi-parrafo1");
const miParraf2 = document.querySelector("#mi-parrafo2");
const miLink    = document.querySelector("#mi-link");

/* Se definen toda las constantes para modificar los atributos en los 3 casos */
const CLR_BDY_1     = "orange";
const CLR_BDY_2     = "black" ;
const CLR_BDY_3     = "pink" ;

const CLR_TXT_1     = "black" ;
const CLR_TXT_2     = "white" ;
const CLR_TXT_3     = "green" ;

const TAM_TXT_1     = "15px" ; 
const TAM_TXT_2     = "20px" ;
const TAM_TXT_3     = "30px" ;

const TIP_TXT_1     = "monospace" ;
const TIP_TXT_2     = "cursive" ;
const TIP_TXT_3     = "fantasy" ;

const imgNro1       = 'https://us.123rf.com/450wm/bpenny/bpenny2212/bpenny221200206/196007439-una-imagen-generada-por-computadora-en-3d-de-un-adorable-gatito-kawaii-americano-de-pelo-corto.jpg?ver=6'; 
const imgNro2       = 'https://http2.mlstatic.com/D_NQ_NP_828637-MLA27477438948_062018-O.jpg'; 
const imgNro3       = 'https://www.shutterstock.com/image-photo/javascript-logo-programming-code-js-260nw-2107491410.jpg'; 

const ANCH_IMG_1    = "200px" ;
const ANCH_IMG_2    = "300px" ;
const ANCH_IMG_3    = "450px" ; 

const CLR_TXT_USR1  = "red" ;
const CLR_TXT_USR2  = "violet" ;
const CLR_TXT_USR3  = "white" ; 

const linkNro1      = 'https://erick-c3.github.io/Trayecto-de-Programador-/'; 
const linkNro2      = 'https://discord.com/'; 
const linkNro3      = 'https://stackoverflow.com/'; 

const DFLT_BDY_CLR  = "white" ;
const DFLT_TXT_CLR  = "black" ;
const DFLT_TAM_TXT  = "15px" ;
/* Funciones */

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


/* Pide la información al Usuario "Nombre" y Opción elelgida */

let nombUsuario = prompt ("Inngrese su Nombre de Usuario" );
let opcIngr     = parseInt (prompt ("Ingrese la opción de Contenido Deseada (1 a 3)"));
 
/* Ingersados los datos nos ponemos a trabajar */
/* Muestro nombre de Usuario y Opción elegida  */ 
miSumario.textContent   = "+++ Ejercio Funciones - Usuario: "+nombUsuario+
            "/ Opción: "+opcIngr+" +++";

/* Procede a aplicar la Opción Elegida */           
if (opcIngr == 1){ 
    AplicaCont (CLR_BDY_1, CLR_TXT_1, TAM_TXT_1, TIP_TXT_1, 
            imgNro1, ANCH_IMG_1, nombUsuario, CLR_TXT_USR1, linkNro1); }
else if (opcIngr == 2){ 
    AplicaCont (CLR_BDY_2,  CLR_TXT_2, TAM_TXT_2, TIP_TXT_2, 
            imgNro2, ANCH_IMG_2, nombUsuario, CLR_TXT_2, linkNro2); }
else if (opcIngr == 3){ 
    AplicaCont (CLR_BDY_3,   CLR_TXT_3, TAM_TXT_3, TIP_TXT_3, 
            imgNro3, ANCH_IMG_3, nombUsuario,  CLR_TXT_3, linkNro3); }
else    { miSumario.textContent   = nombUsuario+
            ": ESA ES UNA OPCIÓN NO VALIDA (ingrese: 1 a 3) ";
    AplicaCont (DFLT_BDY_CLR, DFLT_TXT_CLR, DFLT_TAM_TXT, null, 
            null, null, null, null, null); }


