let clear = document.getElementById('clear')

let display = document.getElementById('display')

const backspace = () => {
    let input = display.value
    display.value = input.slice(0, input.length - 1)
}