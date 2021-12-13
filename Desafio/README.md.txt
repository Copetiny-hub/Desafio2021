Contexto del problema.
Se pide desarrollar un sitio web que tenga un formulario para agendar consultas medicas, este formulario posee los siguientes campos: 
-Nombres
-Apellido paterno
-Apellido materno
-Rut
-Edad 
-Sexo 
-Nombre del medico 
-Fecha
-Hora 
-Correo electronico. 

Los campos ya mencionados debian cumplir ciertas restricciones las cuales eran: 
- La persona que agende una hora sea mayor de 18 años
- Que sea un Rut valido (digito verificador)
- Que la edad de la persona sea mayor igual a cero 
- Validar que los campos de texto sean solo texto
- Correo cumpla con el formato (ej: usuario@dominio.com)

Esta aplicacion web debe guardar la informacion ingresada por el usuario en una base de datos, mostrando un mensaje de exito y enviando un email de confirmacion al usuario.

Para solucionar el problema planteado, comence a construir el backend, para esto fue necesario instalar flask, flask_pymongo,flask_cors y flask_mail con el comando "pip install flask Flask-PyMongo flask-cors Flask-Mail". Cabe destacar que con anterioridad hay que tener instalado en el ordenador la base de datos que en este caso es MongoDB.
luego de las instalaciones comence crear los metodos POST,GET,PUT y DELETE, ademas de crear las conexiones con nuestra base de datos.
Para correr el backend se utiliza estando en la carpeta del backend el comando "python src/app.py".

Por el lado del FrontEnd se debe crear un proyectyo de React para esto se utiliza el comando "npx create-react-app frontend" generando el proyecto. Una vez creado se debe instalar React-router-dom y bootswatch para los estilos, para esto es necesario el comando "npm i react-router-dom bootswatch". Para que la realizacion del formulario se utilizaron plantillas de Boostrap para que asi este pueda ser responsivo. Se crearon dos componentes uno llamado Navbar que solo se utilizo para darle cierto estilo y el componente Usuarios que fue donde se desarrollo el formulario, sus validaciones y la conexion del frontend con el backend.
para poder hacer andar esta pagina web es necesario de 3 consolas, uno para correr el backend situandonos en esa carpeta y colocando el comando ya mencionado "python src/app.py", para correr la base de datos es necesario situarse en la carpeta del frontend para colocar el comando "mongod" y para ejecutar la pagian se necesita del comando "npm star" el cual ejecuta un servidor de desarrollo en el puerto 3000.

Funcionalidades:
-El formulario es capaz de guardar en la base de datos los campos llenados por el usuario.
-El formulario no es enviado si no se completan todos lo campos.
-En el campo nombres se pide como minimo 3 caracteres y como maximo 30 caracteres, ademas que solo se puedan incluir letras. Si no se cumple con las validaciones el formulario no se puede enviar.
- Para los campos de Apellido Paterno, Apellido Materno y Nombre del Medico, se pide como minimo 3 caracteres y como maximo 20 caracteres, ademas que solo se puedan incluir letras. Si no se cumple con las validaciones el formulario no se puede enviar.
-Para el campo del Rut se pide ingresar un rut en formato 11111111-1, este puede tener como minimo 9 caracteres y un maximo de 10 caracteres incluyendo el guion. si no cumple con el formato el formulario no se podra enviar.
-Para el campo de la edad solo se puden ingresar numeros, estos deben ser mayor a 0 y la persona que ingrese la edad debe tener 18 años o mas, cabe mencionar que la edad maxima que se puede ingresar es de 110 años, si no se cumple alguna de estas validaciones el formulario no se puede enviar.
-El campo del sexo debe Escoger entre Masculino y Femenino, si no se escoge el formulario no se podra enviar
-Para los campos fecha y hora es necesario completarlos en los formatos dd/mm/yyyy y hh:mm respectivamente, si no el formulario no se envia.
-Por ultimo el correo debe ser ingresado en formato ejemplo@ejemplo.com si no es ingresado en el formato solicitado, no se podra enviar el formulario
-Una vez con el formulario completo se podra enviar, al enviarlo saldra una alerta con el mensaje "HORA AGENDADA CON EXITO", al precionar aceptar la pagina se actualizara para asi agendar otra hora.

Funcionalidad no cumplida: 
-Se intento agregar la funcionalidad para que formulario enviara un correo electronico a la persona que agende una hora, pero no se logro conseguir, lo mas cerca que se pudo hacer es que al presionar el boton enviar independiente de si los campos estan completos, envia un correo a la una direccion establecida en el backend (el correo del remitente es uno creado especialmente para el desafio y el correo del destinatario es uno personal sin mucho uso). Ya que no funciona correctamente esta funcionalidad decidi comentar la funcion en el frontend para que este no interviniera en el correcto funcionamiento de la pagina.

*Backend desarrollado con Python:Flask
*Frontend desarrollado con React
*Base de datos MongoDB

Comandos Backend.
- "virtualenv env"
- "pip install flask Flask-PyMongo flask-cors Flask-Mail"
Comandos frontend
-"npm i react-router-dom bootswatch"
Comandos para correr la pagina
-Consola 1 en la carpeta backend "python src/app.py"
-Consola 2 en la carpeta frontend "mongod"
-Consola 3 en la carpeta frontend "npm start"