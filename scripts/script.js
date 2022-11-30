const form          = document.getElementById('main_form')
const firstName     = document.getElementById('first_name')
const lastName      = document.getElementById('last_name')
const stuId         = document.getElementById('student_id')
const helpMessage   = document.getElementById('help_message')
const help          = document.getElementById(`help`)
const password      = document.getElementById('password')
const showPassword  = document.getElementById('show_password')
const courses       = document.getElementById('courses')
const errorMessage  = document.getElementById('error_messages')
const submitButton  = document.getElementById('submit_button')


let inputs = document.querySelectorAll('input')
inputs.forEach(function(input){
    input.style.backgroundColor = 'rgba(255, 200, 200, 0.5)'
    input.addEventListener('input', function(){
        if(input.value === ''){
            input.style.backgroundColor = 'rgba(255, 200, 200, 0.5)'
        }else{
            input.style.backgroundColor = 'white'
        }
    })
})


courses.style.backgroundColor = 'rgba(255, 200, 200, 0.5)'
courses.addEventListener('click', function(){
    if(courses.value == 'default'){
        courses.style.backgroundColor = 'rgba(255, 200, 200, 0.5)'
    }else{
        courses.style.backgroundColor = ''
    }
})


helpMessage.style.display = 'none'
help.addEventListener('mouseenter', function(){
    helpMessage.style.display = 'block'
})

help.addEventListener('mouseleave', function(){
    helpMessage.style.display = 'none'
})

showPassword.addEventListener("click", function(){
    if(password.type ==='password'){
        password.type = 'text'
    }else{
        password.type = 'password'
    }
})

form.addEventListener('submit', function(e){
    const firstnameValue        = firstName.value.trim()
    const lastnameValue         = lastName.value.trim()
    const stuidValue            = stuId.value.trim()
    const passwordValue         = password.value.trim()
    const coursesValue          = courses.value
    const studentNumberRegEx    = /^a0[0-9]{7}$/i;

    let errorBoolean = false

    let output = `<ul>`

    if(firstnameValue == ''){
        output += `<li>First Name cannot be empty!</li>`
        e.preventDefault()
        errorBoolean = true
    }else{
        firstName.style.backgroundColor = `white`
    }

    if(lastnameValue == ''){
        output += `<li>Last Name cannot be empty!</li>`
        e.preventDefault()
        errorBoolean = true
    }else{
        lastName.style.backgroundColor = `white`
    }

    if(!studentNumberRegEx.test(stuidValue)){
        output += `<li>You need to provide a valid student ID<!/li>`
        stuId.style.backgroundColor = 'rgba(255, 200, 200, 0.5)'
        e.preventDefault()
        errorBoolean = true
    }else{
        stuId.style.backgroundColor = `white`
    }

    if(passwordValue == ''){
        output += `<li>Password cannot be empty!</li>`
        e.preventDefault()
        errorBoolean = true
    }else{
        password.style.backgroundColor = `white`
    }

    if(coursesValue == 'default'){
        output += `<li>You need to choose a course name!</li>`
        e.preventDefault()
        errorBoolean = true
    }else{
        courses.style.backgroundColor = `white`
    }

    if(errorBoolean){
        error.style.display = 'block'
    }

    output += `</ul>`
    console.log(output)
    errorMessage.innerHTML = output
})


