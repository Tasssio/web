let menuBtn = document.getElementById('menu-btn')
let menu = document.getElementById('my-menu')
menuBtn.addEventListener('click', function (){
    menu.classList.toggle('mobileDevices')
})

let header = document.querySelector('header')

header.addEventListener('click',()=>{
header.classList.toggle('blur')
})


const nameRegex = /[a-zA-Z,\u0400-\u04FF]+/
let name = document.getElementById('in_name')

name.addEventListener('change',(event)=>{
    if(!name.value.match(nameRegex)){
        alert("Неправильне ім'я")
    }
})


const emailRegex =  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
let email = document.getElementById('in_email')

email.addEventListener('change',(event)=>{
    if(!email.value.match(emailRegex)){
        alert("Неправильний email")
    }
})

let submit = document.getElementById('feedback-btn')
submit.addEventListener('click', function(){
        alert("Натиснута кнопка")
})

let feedback = document.getElementById('text_feedback')
feedback.addEventListener('focus',function(){
        feedback.style.background = "grey"
})

feedback.addEventListener('blur',function(){
    feedback.style.background = "white"
})

