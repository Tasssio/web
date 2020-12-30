const navbar = document.querySelector('#navbar_content')

//світла кнопка
const light__btn = document.createElement("a")
light__btn.style.color = "white";
light__btn.innerHTML = "Світла"
light__btn.style.fontFamily = "Montserrat Alternates"

//темна кнопка
const dark__btn = document.createElement("a")
dark__btn.style.color = "red";
dark__btn.innerHTML = "Темна"
dark__btn.style.fontFamily = "Montserrat Alternates"

//подія кліку на світлу кнопку
light__btn.addEventListener("click",function(){
    
    navbar.style.backgroundColor = "white"

    const logo = document.querySelector('#logo')
    logo.style.color = "red"

    document.querySelectorAll('.navlink').forEach((item)=>{
        item.style.color = "red"
    })
    
    const containerText = document.querySelector('#container-text')
    containerText.style.backgroundColor = "white"
    containerText.style.color = "red"

    navbar.removeChild(light__btn)

    const menu = document.querySelector('#my-menu')

    menu.insertAdjacentElement('afterbegin',dark__btn)
})

//подія кліку на темну кнопку
dark__btn.addEventListener("click",function(){
    
    navbar.style.backgroundColor = "#403E3E"

    const logo = document.querySelector('#logo')
    logo.style.color = "white"

    document.querySelectorAll('.navlink').forEach((item)=>{
        item.style.color = "white"
    })
    
    const containerText = document.querySelector('#container-text')
    containerText.style.backgroundColor = "#403E3E"
    containerText.style.color = "white"

    const menu = document.querySelector('#my-menu')
    menu.removeChild(dark__btn)
    
    navbar.appendChild(light__btn)
})

navbar.appendChild(light__btn)
console.log(navbar)
console.log(light__btn)
