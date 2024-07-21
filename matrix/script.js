const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const w = canvas.width = document.body.offsetWidth
const h = canvas.height = document.body.offsetHeight
const cols = Math.floor(w / 20) + 1
const ypos = Array(cols).fill(0)

ctx.fillStyle = '#000'
ctx.fillRect(0, 0, w, h)

function desenhoMatrix() {
    ctx.fillStyle = '#0001'
    ctx.fillRect(0, 0, w, h)
    
    ctx.fillStyle = '#0f0'
    ctx.font = '15pt monospace'
    
    ypos.forEach((call, index) => {
        const text = String.fromCharCode(Math.random() * 128)
        const x = index * 20
        ctx.fillText(text, x, call)
                
        if (call > 100 + Math.random() * 10000) ypos[index] = 0
        else ypos[index] = call + 20
       
    })

}
setInterval(desenhoMatrix, 50)