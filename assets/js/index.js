//Contact con smtpjs
function sendEmail() {
/*	var nombre = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var robot = document.getElementById("demo-human").checked;
	
	
		if (nombre.length<1 || email.length<1 || message.length<1 || robot == false) {
			alert("Revisa el formulario :)");  
		} else {
			document.getElementById("submit").onclick = alerta();
		}
}       
function alerta(event){*/
	var nombre = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var m = document.getElementById("message").value;
	var robot = document.getElementById("demo-human").checked;
	var texto = m;
	// console.log(texto.length);
	// console.log(nombre);
	// console.log("funciona");
	// alert("correo enviado con éxito"); 
	if (nombre.length<1 || email.length<1 || m.length<1 || robot == false) {
			alert("Revise el formulario");  
		} else {
			Email.send({
				SecureToken : "f815af69-1095-49df-a4fd-1cd403520192",
				To : 'juangmuelas@hotmail.com',
				From : "micvonline2020@gmail.com",
				Subject : "Mensaje desde mi web personal",
				Body : "<html><p>Nombre: "+nombre+"</p><p>Email: "+email+"</p><p>Asunto: "+texto+"</p></html>"
			})
			.then(
			message => alert("Gracias "+nombre+". Su mensaje ha sido enviado con exito.")
			);
			document.getElementById("contacto").reset();
		
		}
}
function test(){
console.log("funciona");
}

