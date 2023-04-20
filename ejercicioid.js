const Sumario   = document.querySelector("#mi-sum");
const Imagen    = document.querySelector("#mi-imagen");
const Parrafo   = document.querySelector("#mi-parrafo");
const Link      = document.querySelector("#mi-link");

Sumario.textContent = "++++ Muestro una pantalla con Datos ++++";
Imagen.width        = '300';
Imagen.height       = '200';
Imagen.src          = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Midnight_Commander_%282007%29_de.png';
Parrafo.textContent = "Uso este Link para ver el ejercicio ID & Selectores";
Link.textContent    = "Enlace_al_Ejercicio_Id_y_Selectores.pdf";
// Tambien puedo utilizar "InnerHTML"
//Link.innerHTML      = "Enlace_al_Ejercicio_Id_y_Selectores.pdf";
Link.href           = 'https://docs.google.com/presentation/d/1lAR2EewB7pa0dDjJaagQYVHA0WDRN_pjQ6rG1N-7Q9I/edit?usp=sharing';



