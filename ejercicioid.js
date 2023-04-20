const Sumario   = document.querySelector("#mi-sum");
const Imagen    = document.querySelector("#mi-imagen");
const Parrafo1  = document.querySelector("#mi-parrafo1");
const Parrafo2  = document.querySelector("#mi-parrafo2");
const Link      = document.querySelector("#mi-link");

Sumario.textContent  = "++++ Ejercio ID y Selectores ++++";
Parrafo1.textContent = "Incluyo una Pantalla con Datos (tamaño a justado)";
Imagen.width         = '320';
Imagen.height        = '240';
Imagen.src           = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Midnight_Commander_%282007%29_de.png';
Parrafo2.textContent = "Uso este Link para ver el ejercicio ID & Selectores";
Link.textContent     = "Enlace_al_Ejercicio_Id_y_Selectores.pdf";
// Tambien puedo utilizar "InnerHTML"
//Link.innerHTML      = "Enlace_al_Ejercicio_Id_y_Selectores.pdf";
Link.href           = 'https://docs.google.com/presentation/d/1lAR2EewB7pa0dDjJaagQYVHA0WDRN_pjQ6rG1N-7Q9I/edit?usp=sharing';



