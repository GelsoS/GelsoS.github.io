function converter(valor) {
    let resultadoRomanos = []
    const romanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const comprimento = numeros.length;
  
    for (let index = 0; index <= comprimento; index++) {
        while (valor >= numeros[index]) {
            resultadoRomanos.push(romanos[index]);
            valor -= numeros[index];
        }
    }
    resultadoRomanos = resultadoRomanos.join('')   
    return resultadoRomanos
}
// converter()

let entrada = document.getElementById('input')
let texto = document.getElementById('resposta')
let romano = document.getElementById('roma')
entrada.addEventListener('keyup', () => {
    if (entrada.value > 3999 ) {
        alert ('numero maximo para conversao é 3999!!')
        location.reload()
    }
    if (entrada.value < 0) {
        alert ('digite numero positivo!!')
        location.reload()
    }   
    let result = converter(entrada.value)    
    texto.innerText = `${entrada.value} em romanos: `
    romano.innerText = result
})