//Crear un boton muestre y oculte el menú en la mobile version.
const menuBtn = document.querySelector('#menuBtn');
const toogleMenu = () => {
    const menuContainer = document.querySelector('#mobileMenu');
    if (menuContainer.className === 'visible') {
        menuContainer.className = 'hidden';
    } else {
        menuContainer.className = 'visible';
    };
}
menuBtn.addEventListener('click', toogleMenu)
