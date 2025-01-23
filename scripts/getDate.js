let yr = new Date().getFullYear();
let lastModified = document.lastModified;
let author = "Lesedi Motsepe";
let place = "Johannesburg, South Africa";

// \u00A9 is the unicode for the copywrite symbol
// backticks allow us to insert variables into the output.
document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;
document.getElementById("modified").innerHTML = `Last Modified: ${lastModified}`;
const hamburgerMenuButton = document.getElementById('hamburger-menu-button');
const mainMenu = document.getElementById('main-menu');

const closeMenuButton = document.createElement('button');
closeMenuButton.textContent = 'X';
closeMenuButton.style.position = 'absolute';
closeMenuButton.style.top = '1em';
closeMenuButton.style.right = '1em';
closeMenuButton.style.fontSize = '1.5em';
closeMenuButton.style.cursor = 'pointer';

hamburgerMenuButton.addEventListener('click', () => {
    mainMenu.style.display = 'block';
    mainMenu.appendChild(closeMenuButton);
});

closeMenuButton.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    mainMenu.removeChild(closeMenuButton);
});

const mediaQuery=window.matchMedia('(max-widtth:768px)');
if (mediaQuery.matches){
    mainMenu.style.display='none';
}


//JavaScript (getDdate.js)


const darkModeButton = document.getElementById('dark-mode-button');
const body = document.body;

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});