// create variables out of elements

let name = document.getElementById('name');

let email = document.getElementById('email');

let btn = document.getElementById('btn-submit');

let errorName = document.getElementById('error-name');

let errorEmail = document.getElementById('error-email');

let toggleBtn = document.getElementById('toggle-btn');

let naviList = document.getElementById('navi-list');

toggleBtn.addEventListener('click', () =>{
	naviList.classList.toggle('active');
})

const form = document.getElementsByTagName('form')[0];

const nameError = document.getElementById('error-name')

const emailError = document.getElementById('error-email')

// Validate name
name.addEventListener('input', ()=>{
	// each time user types something, we check if the 
	// form fields are valid

	if (email.validity.valid){
		// in case there is an error message visible, if the field 
		// is valid, we remove the error message.
		nameError.textContent= ''; // reset the content of the message 

		nameError.className = 'error-name'; // reset the visual state of the message
	}else{
		// if there is still an error, show the correct error
		showError()
	}
});

form.addEventListener('submit', function (event){
	// if the email field is valid, we let the form submit

	if(!name.validity.valid){
		// if it isn't, we display an appropriate error message
		showError();
		// then we prevent the form from being sent by canceling the event
		event.preventDefault();
	}

	if(!email.validity.valid){
		// if it isn't, we display an approriate error message
		showError();
		// then we prevent the form from being sent by canceling the event
		event.preventDefault();
	}
});

function showError(){
	if (name.validity.valueMissing){
		// if the field is empty display the following error message.
		nameError.textContent = "Must enter your name"
	}else if (name.validity.tooShort){
		// if the data is too short, 
		// display the following error message
		nameError.textContent = `Name should be at least ${name.minLength } characters; you entered ${name.value.length}.`
	}

	// set the styling appropriately
	nameError.className = 'error-name active'

	if(email.validity.valueMissing){
		// if the field is empty display the following error message.
		emailError.textContent = "Must enter your email"
	}else if (email.validity.tooShort){
		// if the data is too short,
		// display the following error message
		emailError.textContent = `Your email shoudl be at least ${email.minLength} characters; you entered ${email.value.length}.`
	}

	// set the styling approriately 
	emailError.className = 'email-error active'
}

// Validate Email
email.addEventListener('input', ()=>{

	if (email.validity.valid){
		// in case there is an error message visible, if the field 
		// is valid, we remove the error message.
		emailError.textContent= ''; // reset the content of the message 

		emailError.className = 'error-email'; // reset the visual state of the message
	}else{
		// if there is still an error, show the correct error
		showError()
	}
});


// custom form validation
// email.addEventListener('input', ()=>{
// 	if (email.validity.typeMismatch){
// 		email.setCustomValidity("Enter your email address!");
// 		email.reportValidity();
// 	}else{
// 		email.setCustomValidity('')
// 	}
// })

