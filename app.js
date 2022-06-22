const btn1=document.querySelector("#aumentar1")
const btn2=document.querySelector("#aumentar2")
const btn3=document.querySelector("#aumentar3")
const btn4=document.querySelector("#aumentar4")
const btn5=document.querySelector("#disminuir1")
const btn6=document.querySelector("#disminuir2")
const btn7=document.querySelector("#disminuir3")
const btn8=document.querySelector("#disminuir4")
let contador=0
let span=document.getElementById("span")

btn1.addEventListener("click", () => {
    contador++
    span.textContent=contador
})

btn2.addEventListener("click", () => {
    contador++
    span.textContent=contador
})

btn3.addEventListener("click", () => {
    contador++
    span.textContent=contador
})

btn4.addEventListener("click", () => {
    contador++
    span.textContent=contador
})

btn5.addEventListener("click", () => {
    contador--
    span.textContent=contador
})

btn6.addEventListener("click", () => {
    contador--
    span.textContent=contador
})

btn7.addEventListener("click", () => {
    contador--
    span.textContent=contador
})

btn8.addEventListener("click", () => {
    contador--
    span.textContent=contador
})




const edad = document.querySelector('#input-edad')



edad.addEventListener('keydown', (event) => {

    // if (event.key === "o") {
    //     event.preventDefault()
    // }
   
    if (edad.value < 18) {
        edad.classList.add('border-danger')
        edad.classList.remove('border-success')
    } else {
        edad.classList.add('border-success')
        edad.classList.remove('border-danger')
    }
})




