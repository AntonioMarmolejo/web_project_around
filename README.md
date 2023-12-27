# Tripleten web_project_around

## DESCRIPCIÓN Y FUNCIONALIDAD

Es una página hecha con el propósito de mostrar una interfaz amigable para los usuarios con la idea de que puedan interactuar con la misma haciendo click en los botones respectivos, se presenta el perfil del usuario con el nombre y la actividad a la que se dedica actualmente. Si el usuario quiere realizar algún cambio en el perfil, solo debe seleccionar el boton que está diseñado específicamente para eso, entonces se abrirá el formulario donde se le pedirá los datos al usuario.

Las funcionalidades pricipales de esta página son el boton de editar **perfil** que nos permite abrir el formulario, dentro de este bloque también tenemos el otro boton interactivo que nos permite cerrar el formulario, también en el mismo bloque se encuentra el formulario, el cual contiene ademas los 2 **input** donde el usuario ingresará sus datos.

También en bloque del formulario tenemos el boton **guardar** datos el cual nos sirve para almacenar los datos y remplazarlos en los bloques conrrespondientes de nuestra página web, dando lugar a una pagina de perfil de usuario totalmente personalizable

## CARACTERÍSTICAS

La página consta de un bloque principal con el nombre de **page** y dentro de este bloque están anidados los bloques **main-page, header, profile, cards, edit-forma, overlay y footer** respectivamente, dentro de cada bloque se encuentran cada uno de sus elemento y modificadores asi, en el bloque **page** se encuentran almacenados el bloque **main-page**, y dentro del bloque **main-page** se encuentran almaceandos los bloques **header**, **profile**, **cards**, **edit-form**, **overlay** y el bloque **footer**.

## PROPÓSITO

El propósito principal de este proyecto es fortalecer el conocimiento en JavaScirp y que hagamos un recorderis de todo lo que hemos aprendido hasta ahora. Interactuar con los botones y ver çomo cómo se comportan, poder ver los cambios que se realizan en la pagina debido a estos botones, permitirle a los usuarios tener una experiencia agradable de interacción con esta página donde éste pueda agregar las imágenes que son se su interés y personalizarlas, darle me gusta o borrar las que no son de su agrado, así mismo explorar las imágenes más a detallle al darle click a cada una de ellas.

## TÉCNICAS Y TECNOLOGÍAS UTILIZADAS

1. Para el desarrollo de esta página se utilizó la metodología BEN para separar los bloques de sus elementos y los modificadore, también la misma metodología para organizar el sistema de archivos con el que se trabajó.
2. Se separaron los archivos de estilos en bloques y se importaron con _@import()_ al _index.css_
3. El index.css se referenció al documento html mediante la etiqueta _lick_ y de este modo todos los bloques obtienen sus estilos
4. La página por defecto se la dejó en el idioma español.
5. Para las animaciones se utilizaron los _@keyframes_ y para que se adapte a los diferentes dispositivos se utilizaron _mediaqueries_ para las resoluciones **1280px, 888px, 768px, 600px, 369px, 909px** se adaptará correctamente.
6. Para que los enlaces resalten se utilizo el :hover y se le dió una animacíon para que sea más interactiva.
7. Se utilizó como herramienta principal para la programación a _VISUAL STUDIO CODE_ desde donde se realizó todo
8. Extención para identar el código se utilizó _Prettier - Code formatter, Prettier More_
9. Extención para ver los cambios en vivo se utilizó _Live Server_ en Visual Studio Code
10. Extención Para detectar errores más rápido se utilizó _Error Lens_ instalada en Visual Studio Code
11. Como navegador principal utilizamos _Microsoft Edge_ para ejecutar la página y realizar correcciónes
12. Se creo un archivo **.nojekyll** para evitar errores a la hora de desplegar el sitio en Gihub Pages
13. Se creó un archivo **.editorconfig** con los párametros para formater el código automátiamente cada que se preciona guardar
14. Como fuentes se utilizó la tipográfica gratuita "Inter" de Figma, de los cuales se tomaron en cuenta los font-weight de 400, 600, 900
15. Desde JavaScript se utilizaron los _arrays_ para cargar añadir al DOM las 6 primeras imágenes con las tarjetas personalizadas
16. Se utilizaron _varible_ declarándolas con _Let_ todas a quellas variables que en algun momento van a cambiar su valor y para las constantes se las declaró como _Const_
17. Se utilizaron las funciones y los eventos para detectar cuando el usuario hace click en algun boton de la página para provocar un evento
18. Se utilizo _displey: none_ para esconder los formularios y luego se utilizó un _keyframe_ para crear un animación que nos permita pasar de _display: none_ a _display: flex_ para que las ventanas se muestres de una forma fluida
19. Para cada nueva tarjeta que se crea se utilizó una plantillas _template_ para poder seleccionar su identificado y luego clonarlo con todos sus elementos para crear la nueva tarjeta.
    20 En las ventanas de los formularios los usuarios pueden ingresar un nombre y colocar un enlace para agregar la tarjet que quieran, estos datos son captados por los _imput_ y almacenados en las variables correspondientes para que se cree la tarjeta.

## ENLACES

[VISITA EL SITIO] ("DE PATRIA A PATRIA" https://antoniomarmolejo.github.io/web_project_around/)

[TRIPLETEN] ("Tripleten" https://tripleten.com/es-ecu/)

[Unsplash] ("Banco de imágenes gratis"https://unsplash.com/es)
