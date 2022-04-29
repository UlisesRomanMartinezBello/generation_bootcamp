const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const formulario = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const errorNombre = document.querySelector('#errorNombre');
const errorApellido = document.querySelector('#errorApellido');
const errorCorreo = document.querySelector('#errorCorreo');
const errorPassword = document.querySelector('#errorPassword');
const errorTelefono = document.querySelector('#errorTelefono');


const statusInfo = {
	nombre: false,
	apellido: false,
	correo: false,
	password: false,
	telefono: false,
}

inputs.forEach(input => {
	input.addEventListener('keyup', (e) => {
		const valor = e.target.value;
		let resultado = '';
		switch (e.target.name) {
			case 'nombre':
				resultado = expresiones.nombre.test(valor) ? '' : 'Nombre Incorrecto';
				errorNombre.textContent = resultado;
				statusInfo.nombre = true;
				break;

			case 'apellido':
				resultado = expresiones.nombre.test(valor) ? '' : 'Apellido Incorrecto';
				errorApellido.textContent = resultado;
				statusInfo.apellido = true;
				break;

			case 'email':
				resultado = expresiones.email.test(valor) ? '' : 'Email Incorrecto';
				errorCorreo.textContent = resultado;
				statusInfo.correo = true;
				break;

			case 'password':
				resultado = expresiones.password.test(valor) ? '' : 'Password Incorrecto';
				errorPassword.textContent = resultado;
				statusInfo.password = true;
				break;

			case 'telefono':
				resultado = expresiones.telefono.test(valor) ? '' : 'Telefono Incorrecto';
				errorTelefono.textContent = resultado;
				statusInfo.telefono = true;
				break;

			default:
				break;
		}
	});
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const check = document.querySelector('#terminos').checked;
	if(!Object.values(statusInfo).includes(false) && check === true) {
		document.querySelector('.alert-danger').style.display = 'none';
		const datos = Object.fromEntries(
			new FormData(e.target)
		);
		console.log(datos);
		formulario.reset();
	} else {
		document.querySelector('.alert-danger').style.display = 'block';
	}
});