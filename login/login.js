
document.querySelector('#login').addEventListener('click', function(){
    let emailIsInvalid = false;
    let passwordIsInvalid = false;
    
    let email = document.querySelector('#email').value 
    if (email.includes('@')==false||email.includes('.com')==false){
        emailIsInvalid = true;   
    } 

    let password = document.querySelector('#password').value
    if (password.length > 12 || password.length < 8){
        passwordIsInvalid= true;
    }

    if (emailIsInvalid || passwordIsInvalid){
        let alertEmail = document.querySelector('#emailInvalid')
        alertEmail.innerHTML="*Email or password are invalid"; 
    }

})
