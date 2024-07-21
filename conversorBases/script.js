const input = document.getElementById("input")
const btn = document.getElementsByTagName('button')[0]
const select = document.getElementsByTagName('select')[0]
const hexa = document.getElementById('Hexadecimal')
const Decimal = document.getElementById('Decimal')
const binario = document.getElementById('Binario')

input.addEventListener('keyup', () => {
    if (input.value.trim() !== '' && select.value != 'Selecione') {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', 'true');
    }
})

btn.addEventListener('click', () => {
    switch (select.value) {
        case "Binario": {
            if (/^[01]+$/.test(input.value)) {
                const decimal = parseInt(input.value, 2)
                const hexadecimal = decimal.toString(16).toUpperCase()
                Decimal.innerText = decimal
                hexa.innerText = hexadecimal
                binario.innerText = input.value
            } else {
                alert(`O valor digitado não é um número Binário`)
            }
            break;
        }

        case "Decimal": {
            if (/^[0-9]+$/.test(input.value)) {
                const hexadecimal = parseInt(input.value).toString(16).toUpperCase()
                const bin = parseInt(input.value).toString(2);
                Decimal.innerText = input.value
                hexa.innerText = hexadecimal
                binario.innerText = bin
            } else {
                alert(`O valor digitado não é um número Decimal`)
            }
            break;
        }

        case "Hexadecimal": {
            if (/^[0-9A-Fa-f]+$/.test(input.value)) {
                const decimal = parseInt(input.value, 16);
                const bin = decimal.toString(2);
                Decimal.innerText = decimal
                hexa.innerText = input.value.toUpperCase()
                binario.innerText = bin
            } else {
                alert(`O valor digitado não é um número Hexadecimal`)
            }
            break;
        }
    }
    select.value = 'Selecione entrada'
    input.value = ''
    btn.disabled = true
})