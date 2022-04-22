function makeRed() {
    document.body.style.backgroundColor = 'yellow';
}

// another way onclick blue
const blue = document.getElementById('make-blue')
blue.onclick = makeBlue;// no call()
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
//handle using anonymous function
const makeGreen = document.getElementById('make-green');
makeGreen.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handle using add eventListener
const makeGolden = document.getElementById('make-golden');
makeGolden.addEventListener('click', makeGoldenButton)
function makeGoldenButton() {
    document.body.style.backgroundColor = 'goldenrod';
}

// addEventListener
const hotPink = document.getElementById('hot-pink');
hotPink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})

// direct shortcut
document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})