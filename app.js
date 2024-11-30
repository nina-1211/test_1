let loginbutton = document.getElementById('login')
let email= document.getElementById('email')
let password= document.getElementById('password')
localStorage.setItem('username','admin@123')
localStorage.setItem('password','123456')
loginbutton.addEventListener('submit',login)
function login(e){
    e.preventDefault()
    let emailvalue=email.value
    let passwordvalue=password.value
    if(emailvalue==""){
        alert("please enter email")
    }
    else if(passwordvalue==""){
        alert('please enter password')
    }
    else if(email.value==localStorage.getItem('username')&& passwordvalue== localStorage.getItem('password')){
        alert('login successful')
        window.location.href='https://chat.zalo.me/'
    }
    else{
        alert('Invalid email or password')
        password.value=""
    }
}