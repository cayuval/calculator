const elScreen = document.querySelector('.screen')
const elNums = document.querySelectorAll("div.num")
const elActions = document.querySelectorAll(".action")
const elDelete = document.querySelector(".delete")
const addCommaToNumber = (x) => {
    return x.toLocaleString("en-US");
}

let numStr = ""

const nums = []
let action = ""

//event listener for numbers elements
for (let i = 0; i < elNums.length; i++) {
    const element = elNums[i];
    element.addEventListener('click', (e) => {
        numStr += e.target.innerText
        render()
    })
}
//event listener for actions elements
for (let j = 0; j < elActions.length; j++) {
    const element = elActions[j];
    element.addEventListener('click', (e) => {
        action = e.target.innerText
        nums.push(parseInt(numStr))
        numStr = ""
        render()
    })
}
//delete current numStr
elDelete.addEventListener('click', () => {
    numStr = ""
    render()
})

//screen renderer
function render() {
    elScreen.innerText = numStr
}



function plus(x, y) {
    let res = x + y
    return res
}
function minus(x, y) {
    let res = x - y
    return res
}
function times(x, y) {
    let res = x * y
    return res
}
function divide(x, y) {
    let res = x / y
    return res
}