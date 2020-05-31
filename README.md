# CalcualdoraIPv4
Este es un ejemplo de una calculadora para direcciones IPv4 para el curso de Redes TEC-CLSC

# Manual de Uso
1. Descargue el repositorio desde la opción de "Clone or Download".
2. Descomprima el archivo .zip.
3. Abra la carpeta, dentro encontrá los archivos del proyecto. Este fue creado usando HTML5 por lo cual puede ser visualizado desde un explorador web.
4. Abra el archivo llamado "index.html" usando su navegado; ya sea Google Chrome, Firefox o cualquiera de su preferencia.
5. Y listo.

# Detalles importantes.
* La aplicación esta basa en la distribución por defecto de las clases de direcciones IP. Por lo que, cada máscara de red corresponde a las que se establecen por norma para cada clase (A, B, C, D, E).
* Las clases D  y E son clases reservadas para Múlticas y otras aplicaciones por lo cual no se define porción de red y host.
* Al ingresar una dirección IP superior o igual a [#.255.255.252], donde # es el último dígito aceptado para la clase de al dirección se genera un error de desbordamiento pues no hay suficientes IP's para cubrir las que se necesita mostrar. Esto ocurre porque se dispone solo direcciones en octetos tipo 8.8.8.8 lo cual marca direcciones desde 0-255 para cada octeto y las direcciones no pueden rebasar el límite de cada clase pues cambia su máscara y deja de pertenecer a la misma red. Ejemplo, si tenemos 255.255.255.255 y queremos sacar al dirección de red no podríamos puesto que ya están abarcadas todas las direcciones que permite los octetos.

# Enlaces consultados
CCNA Desde Cero (https://ccnadesdecero.com/curso/ipv4/)
