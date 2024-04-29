const buttonShow = document.getElementById('btMessage')

buttonShow.addEventListener('click', () => {
    alert('Olá Mundo')
})

const input1 = document.getElementById('n1')
const input2 = document.getElementById('n2')
const btSoma = document.getElementById('btSomar')
const inputResult = document.getElementById('res')

btSoma.addEventListener('click', () => {
    const n1 = Number(input1.value)
    const n2 = Number(input2.value)

    inputResult.value = n1 + n2

    input1.value = 0
    input2.value = 0
})
const bt1 = document.querySelector('#btSection3')
const bt2 = document.querySelector('.btSection3')
const bt3 = document.querySelector('button[name=btSection3')
bt1.addEventListener('click', () => {
    bt1.style.backgroundColor = "#d83838"
})
bt2.addEventListener('click', () => {
    bt2.style.backgroundColor = "#4fa14f"
})
bt3.addEventListener('click', () => {
    bt3.style.backgroundColor = "#5481ea"
})