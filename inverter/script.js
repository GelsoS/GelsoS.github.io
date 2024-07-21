let input = document.querySelector('.input')
let p = document.querySelector('.p')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () =>{
    console.log(input.value.length);
    let ar = []
    for (let index = input.value.length; index > -1; index --) {
       ar.push(input.value[index])        
    }
    p.innerHTML = ar.join('')
})