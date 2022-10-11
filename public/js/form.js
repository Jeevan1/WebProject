// const form=document.querySelector('.form');
// const username=document.getElementById('username');
// const email=document.getElementById('email');
// const phone=document.getElementById('phone');
// const password=document.getElementById('password');
// const password2=document.getElementById('password2');


// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     checkInputs();
// });
// function checkInputs(){
//     //get the values from the inputs.
//     const usernameValue = username.value.trim();   //Removes the leading and trailing white space and line terminator characters from a string.
//     const emailValue = email.value.trim();
//     const phoneValue = phone.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     if(usernameValue===''){
//         //show error
//         //add error class
//         setErrorFor(username, 'Username cannot be blank');
//     }
//     else{
//         //add success class
//         setSuccessFor(username);
//     }

//     if(emailValue===''){
//         setErrorFor(email, 'Email cannot be blank');
//     }
//     else{
//         setSuccessFor(email);
//     }
//     if(phoneValue===''){
//         setErrorFor(phone, 'Phone no. cannot be blank');
//     }
//     // else if(phoneValue!==10){
//     //     setErrorFor(phone, 'Enter valid phone number')
//     // }
//     else{
//         setSuccessFor(phone);
//     }

//     if(passwordValue===''){
//         setErrorFor(password, 'password cannot be blank');
//     }
//     else{
//         setSuccessFor(password);
//     }

//     if(password2Value===''){
//         setErrorFor(password2, 'password2 cannot be blank');
//     } 
//     else if(passwordValue !== password2Value){
//         setErrorFor(password2, 'password does not match');
//     }
//     else{
//         setSuccessFor(password2);
//     }

// }
// function setErrorFor(input, message){
//     const formControl = input.parentElement;  // points to .form-condrol(here 'input' is child of '.form-control'.
//     const small = formControl.querySelector('small');

//     //add error class
//     formControl.className = 'form-control error';

//     //add error message inside small
//     small.innerText=message;
    
// }
// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }


