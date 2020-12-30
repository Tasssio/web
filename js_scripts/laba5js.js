const nameRegex = /[a-zA-Z,\u0400-\u04FF]+/
let formName = document.getElementById('formName')
name.addEventListener('change',(event)=>{
    if(!name.value.match(nameRegex)){
        alert("Неправильне ім'я")
    }
})

const emailRegex =  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/i
let formEmail = document.getElementById("formEmail");
email.addEventListener('change',(event)=>{
    if(!formEmail.value.match(emailRegex)){
        alert("Неправильний email")
    }
})

let formPassword = document.getElementById("formPassword");
let formResetPassword = document.getElementById("formResetPassword");

let sbmt = document.getElementById("sbmt");
sbmt.addEventListener("click", checkForm);
	function checkForm() {
		if (!formName.value) {
			alert ("empty NAME field!");
		} else 
			if (!formEmail.value) {
				alert ("empty MAIL field!");
			}
		 else 
			if (!formPassword.value) {
				alert ("empty Password field")
			}
		 else 
			if (!formResetPassword.value && formResetPassword.value!=formPassword.value) {
				alert ("Reset Password field is incorrect")
			}
		
	}




<script>
			let sbmt = document.getElementById("sbmt");
			let formName = document.getElementById("formName");
			let formEmail = document.getElementById("formEmail");
			let formPassword = document.getElementById("formPassword");


			sbmt.addEventListener("click", checkForm);

			function checkForm() {
				if (!formName.value) {
					alert ("empty NAME field!");
				} else {
					if (!formEmail.value) {
						alert ("empty MAIL field!");
					} // else ..... 
				}

	//АБО перевіряєш всі поля по черзі і якщо хоча б одне пусте - виводиш одне повідолення загальне:

				// if ((!formName.value) || (!formEmail.value) || (!formPassword.value)) { 
				// 	alert ("empty field!");
				// }
				
			}
		</script>
			