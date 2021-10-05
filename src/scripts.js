const burgerButton = document.getElementById('burger') //Grabs the burger class
const mList = document.getElementById('m-list') //grabs the UL class

function toggleButton() {
    mList.classList.toggle('show')
}

burgerButton.addEventListener('click', toggleButton) //toggles the class of 'visible'

