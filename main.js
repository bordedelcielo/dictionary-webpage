console.log('Are you ready to rock & roll?');

console.log(start)

function clickButton() {
        console.log('You just clicked the button')
        main.innerHTML = ''
}

start.onclick = (event) => {
    clickButton()
}