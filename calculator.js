const elScreen = document.querySelector('.screen')
const elNums = document.querySelectorAll("div.num")
const elActions = document.querySelectorAll(".action")
const elInit = document.querySelector(".init")
const elDelete = document.querySelector(".delete")
const elEquel = document.querySelector(".equel")

const addCommaToNumber = (x) => {
    return x.toLocaleString("en-US");
}

let screenStr = ""

//event listener for numbers elements
for (let i = 0; i < elNums.length; i++) {
    const element = elNums[i];
    element.addEventListener('click', (e) => {
        screenStr += element.innerText
        render()
    })
}
//event listener for actions elements
for (let j = 0; j < elActions.length; j++) {
    const element = elActions[j];
    element.addEventListener('click', (e) => {
        screenStr += element.innerText
        render()
    })
}
//event listener for init sign 
elInit.addEventListener('click', () => {
    numStr = ""
    screenStr = ""
    render()
})
//event listener for equel sign
elEquel.addEventListener('click', () => {
    const res = eval(screenStr)
    screenStr = res
    render()
})
//event listener for delete 
elDelete.addEventListener('click', () => {
    console.log(screenStr.length);
    screenStr = screenStr.slice(0, screenStr.length - 1)
    console.log(screenStr);
    render()
})
//screen renderer
function render() {
    elScreen.innerText = screenStr
}
