const elScreen = document.querySelector('.screen')
const elNums = document.querySelectorAll("div.num")
const elActions = document.querySelectorAll(".action")
const elDelete = document.querySelector(".delete")
const elEquel = document.querySelector(".equel")
const addCommaToNumber = (x) => {
    return x.toLocaleString("en-US");
}

let numStr = ""

let nums = []
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
//event listener for delete
elDelete.addEventListener('click', () => {
    numStr = ""
    render()
})

elEquel.addEventListener('click', () => {
    nums.push(parseInt(numStr))

    if (action === '/') {
        numStr = divide(nums)
    } else if (action === 'X') {

        numStr = times(nums)
    } else if (action === '+') {

        numStr = plus(nums)
    } else if (action === '-') {

        numStr = minus(nums)
    }
    render()
    nums = []
})

//screen renderer
function render() {
    elScreen.innerText = numStr
}



function plus(numbers) {
    console.log(numbers);
    let res = 0
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        res += element
    }
    return res
}
function minus(numbers) {
    console.log(numbers);
    let res = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        const element = numbers[i];
        res -= element
    }
    return res
}
function times(numbers) {
    console.log(numbers);
    let res = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        const element = numbers[i];
        res *= element
    }
    return res
}
function divide(numbers) {
    console.log(numbers);
    let res = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        const element = numbers[i];
        res /= element
    }
    return res
}