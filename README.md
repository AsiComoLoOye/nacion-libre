nacion-libre
============

La Nación tiene un nuevo esquema para leer su contenido, cobrando para poder acceder a sus noticias. Si usted pagó por el contenido de Nación, le ofrezco este plugin de Chrome para que maximize la experiencia a la hora de leer las noticias. Por favor, instálelo solamente en caso de que haya pagado por el contenido:

Para instalarlo seguir los siguientes pasos:
1. Bajar el archivo nación-libre.zip (version 2.9)

2. Descomprimirlo. Debería de quedarle un directorio llamado “Nacion-libre”.

3. Abrir las herramientas de google chrome, en la esquina superior izquierda aparecerá el “omnibox” hotdogmenu. Del menú seleccione “Herramientas” [tools] y luego “Extensiones” [Extensions]. O bien, más fácil, copie chrome://extensions/ y péguelo en su barra de direcciones.

4. Haga click en “Modo desarrollador” [developer mode] para marcar el check-box. Deberán aparecer unos botones: “Cargar versión desempacada” [Load unpacked extension…] lo que hará que salga un diálogo para cargar archivos. Seleccione el directorio “Nacion-libre” que se desempacó del zip.

5. Disfrute de la nación con espacios maximizados de lectura.

Para los celulares u otros browsers que no sea Chrome, entonces lo que hay que hacer es entrar al sitio de nacion y crear un marcador. Luego se va a la opción de editar marcadores, y copia el siguiente código:

javascript:(function(){$(‘#LNA_paywall_modal’).remove();$(‘div[style*=”opacity:%200.9;%20position:%20absolute”]’).remove();$(‘.ad-wrap’).remove();$(‘#nacion-login-bar’).remove();$(‘.alerta_susc_out’).remove();$(‘.ad-fixed-bottom’).remove();$(‘#banner34’).remove();$(‘.login-tools’).remove();$(‘body’).css(‘background’,’#fff’)})()

Cuando entra al sitio de Nación, se va a marcadores y le da click o tap al marcador creado y podrá leer de manera maximizada.

ACTUALIZACION:: 21/02/2016 Se elimina más publicidad. Y mas publicidad Eliminado el pie de página que esta estorbando en la version beta. Eliminada la cajita de suscribase. Eliminado el conteno de notas. Cambios al plugin para mejorar rendimiento y mantenimiento.

ACTUALIZACION:: 10/02/2016 Se elimina más publicidad.

ACTUALIZACION: 24/11/2015: Se eliminó publicidad, mucha publicidad y más publicidad. Es mejor que pague los 500 colones al mes, pero si quiere tener un sitio más limpio sin tanta publicidad molesta que distrae, entonces baje y use este plugin.

ACTUALIZACION: 17/06/2015: Se eliminó código innecesario, pero lo más importante, se le quitó el recordatorio de los 15 artículos por mes.

ACTUALIZACION 09/06/2015: Revisiones menores. Mas espacio para leer noticias al eliminar elementos innecesarios. El overlay negro se elimina más rápidamente. Eliminada más publicidad. Eliminar publicidad de “Adnunciate” para dar mas espacio.

ACTUALIZACION 03/02/2015: Cambiaron el elemento overlay. Creen que poniendo un ID dinámico confundirán al javascript. En el plugin de Chrome también se eliminan algunos anuncios para aprovechar mejor el espacio para leer noticias en lugar de ver anuncios.

ACTUALIZACION: Algunos usuarios me dijeron que no funcionaba en al Dia, ni en Perfil. Fueron agregados estos sitios también. El proceso para actualizar es el mismo que para instalar, solamente que se suben los archivos nuevos.

ACTUALIZACION 15/05/2014: La gente de Nación agregó un nuevo elemento oscuro. Esta versión lo remueve también.

ACTUALIZACION 16/05/2014: Quitaron los ID de los divs. Actualizado
