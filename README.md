nacion-libre
============

Plugin de Nacion, libre del login

Hemos visto con enorme sorpresa como la Nación nos está obligando a registrarnos.

Este repositorio es para poder eliminar ese molesto registro, para Google Chrome.

Para instalarlo seguir los siguientes pasos:

1. Dar click en "Download ZIP"

2. Descomprimirlo. Debería de quedarle un directorio llamado “nacion-libre-master”

3. Abrir las herramientas de google chrome, en la esquina superior izquierda aparecerá el 
   “omnibox” hotdogmenu. Del menú seleccione “Herramientas” [tools] y luego “Extensiones” 
   [Extensions]. O bien, mas facil, copie chrome://extensions/ y péguelo en su barra de 
   direcciones.

4. Haga click en “Modo desarrollador” [developer mode] para marcar el check-box. 
   Deberán aparecer unos botones: “Cargar versión desempacada” [Load unpacked extension…] 
   lo que hará que salga un diálogo para cargar archivos. Seleccione el directorio 
   “nacion-libre-master” que se desempacó del zip.

5. Disfrute de la nación sin el molesto registro.

ACTUALIZACION: Algunos usuarios me dijeron que no funcionaba en al Dia, ni en Perfil. 
Fueron agregados estos sitios también. El proceso para actualizar es el mismo que para 
instalar, solamente que se suben los archivos nuevos.

Cada vez que aparece el login, ejecuta el “bookmark” y con eso se quita el famoso 
registro.

Para iPhone, iPad, puede crear un nuevo bookmark y agrega el siguiente código en el URL:

javascript:(function(){$('#LNA_background, #LNA_contenidoTotal,#ADI_background, #ADI_contenidoTotal,#PER_background, #PER_contenidoTotal, #EFI_background, #EFI_contenidoTotal').remove()})()