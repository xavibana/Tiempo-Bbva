# Tiempo-BBVA
Aplicación widget de clima para consultar el pronóstico del tiempo en formato BBVA.

La aplicación recoge la ubicación desde donde se encentra conectado el ordenador con las nuevas funcionalidades de HTML5 y muestra por pantalla el resultado para esa ubicación.

## Inicio de la aplicación 🚀


### Pre-requisitos 📋
Debes tener en tu equipo los siguientes elementos para su ejecución:
* XAMPP/LAMPP/MAMPP última versión , puedes descargarlo en -> (https://www.apachefriends.org/es/index.html)
* Línea de comandos de git (https://help.github.com/articles/set-up-git)

### Instalación y puesta en marcha 🔧

1) Intalar XAMPP en tu equipo

2) Abrimos la linea de comandos Git y nos dirigimos a la carpeta `htdocs` que habremos indicado al instalar XAMPP por ejemplo:
```
C:/xampp/htdocs
```
3) Clonamos el repositorio de git con el siguiente comando:
```
git clone https://github.com/xavibana/Tiempo-Bbva.git
```
4) Abrimos la aplicación de XAMPP y le damos a `start` Apache

5) Para ejecutar el proyecto inicie su Navegador web favorito e introduzca la siguiente URL:
```
http://localhost/TiempoBbva/view/
```
6) Para que la aplicación pueda recojer la ubicación debe aceptar los permisos de ubicación en su navegador.


<img width="1042" alt="tiempo-bbva" src="https://github.com/xavibana/Tiempo-Bbva/blob/main/src/images/tiempoBbva.PNG">

## En caso de encontrar algún error o tener alguna sugerencia puede hacerlo en:
``
https://github.com/xavibana/Tiempo-Bbva/issues
``

## Construido con 🛠️
* HTML 5
* JavaScript
* Bootstrap 5

## Autores ✒️
* Xavier Baños

### Idea Original ⚙️
Instalé el entorno de EmberJS mediante Ember-CLI (en Windows 10) para utilizar el framework y todo parecía funcionar bien, hasta que Brocoli empezó a generar problemas y no pude recuperar el entorno después de intentarlo durante 4 días. Por lo que procedí a realizarlo con JS nativo tal y como me habían sugerido.

Soy consciente que en esta entrega falta la batería de pruebas unitarias, pero debido al tiempo invertido en el aprendizaje, instalación e intentar arreglas el entorno de EmberJS no he podido realizarlas. Para ello hubiese utilizado Mocha.
