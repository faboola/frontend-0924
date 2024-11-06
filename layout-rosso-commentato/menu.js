document.getElementById('menu-icon').addEventListener("click", addMenuClass);


function addMenuClass() {

    var header = document.getElementById('main-header');

    header.classList.toggle('is-open');

    //oppure tutto su una riga:
    //document.getElementById('main-header').classList.toggle('is-open');

    /*per bloccare lo scrolling della pagina quando il menu è aperto: */

    document.documentElement.classList.toggle('no-scroll');
    /*seleziona l'elemento :root (il tag <html>) e applica la classe*/

}
