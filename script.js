function scaleText() {
    const h2Elements = document.querySelectorAll('h2');
    
    h2Elements.forEach(h2 => {
        let fontSize = 1000; 
        h2.style.fontSize = fontSize + 'px';

        while (h2.scrollWidth > h2.clientWidth || h2.scrollHeight > h2.clientHeight) {
            fontSize--;
            h2.style.fontSize = fontSize + 'px';
        }
    });
}

function updateScale(){
    const height = window.innerHeight;
    const width = window.innerWidth;

    let scaleFactor;

    if (height < 900) {
        scaleFactor = height / 150; 
    } else {
        scaleFactor = height / 100; 
    }
    if (width < 550) {
        scaleFactor *= 1.5;
    } if (width < 850) {
        scaleFactor *= 1.5; 
    }else if (width > 1300) {
        scaleFactor *= 0.7; 
    }
    // const scaleFactor = height / 150;
    
    document.documentElement.style.setProperty('--scale-factor', scaleFactor);
};

window.onload = scaleText;
window.onresize = scaleText;

updateScale ();
window.addEventListener('resize', updateScale);


const colors = [
    '#fcd260', // Yellow
    '#ff5733', // Red
    '#33ff57', // Green
    '#3357ff', // Blue
    '#ff33a1', // Pink
    '#33fff5', // Cyan
    '#ffcc33', // Gold
    '#a133ff', // Purple
];

function changeH2Colors() {
    const h2Elements = document.querySelectorAll('h2.background'); // Select all h2 elements with class 'background'

    h2Elements.forEach(h2 => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        h2.style.color = randomColor;
    });
}

document.addEventListener('DOMContentLoaded', changeH2Colors);
