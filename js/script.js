// Ïnput de búsqueda
const searchInput = document.getElementById('search-input');
// tabla
const table = document.getElementById('table');

searchInput.addEventListener('keyup', () => {
    //  El texto del input de búsqueda
    const text = searchInput.value.trim()
    // Variable para el ciclo while
    let row=0;

    // Apartir de qué fila va a buscar
    let inicio = 1;
    /* ¿Por qué desde la 1?
        Porque debemos tomar en cuenta que nuestra tabla tiene cabecera,
        por lo tanto, no queremos que realice búsquedas en esa fila */

    //---------------------------------------------------------------------
    /* Para saber cuántas filas tiene una tabla, puedes simplemente mandar a consola
        el nombre que le diste a tu tabla.rows
     */
    while( row =table.rows[inicio++]){
        /*  Si en el contenido de la fila NO se encuentra el texto buscado, entonces oculta esa fila */
        if( row.textContent.toLowerCase().indexOf(text.toLowerCase()) === -1){
            row.style.display = 'none';
            
            /* Si la encuenta, la deja tal cual */
        }else{
            row.style.display = null;
        }
    }
} );

/* ¿Qué hace indexOf() ?
    El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en un array o texto, ó retorna -1 si el elemento no esta presente.
*/