function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const colors = ['red', 'blue', 'green', 'yellow', 'white', 'black'];
    return colors[Math.floor(Math.random() * colors.length)];
}