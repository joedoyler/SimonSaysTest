const topLeft = document.querySelector('.top-left-panel');
const topRight = document.querySelector('.top-left-panel');
const bottomRight = document.querySelector('.bottom-left-panel');
const bottomLeft = document.querySelector('.bottom-left-panel');


const getRandomPanel = () => {
    const panels = [
        topLeft,
        topRight,
        bottomLeft,
        bottomRight
    ];
    return panels [parseInt(Math.random() * panels.length)];
};

const sequence = [
    getRandomPanel,
    getRandomPanel,
    getRandomPanel,
    getRandomPanel
] ;
