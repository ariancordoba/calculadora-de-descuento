let monto;
let descuento;
let calcularDecimal;
let calcularDescuento;

function calculadoraDescuento() {
	const monto = pedirMontoUsuario();
	const descuento = pedirDescuentoUsuario();

	if (descuento && monto <= 0) {
		alert("Ingrese un porcentaje o monto mayor a cero");
	}

	calcularDecimal = descuento / 100;
	calcularDescuento = calcularDecimal * monto;
	montoFinal = monto - calcularDescuento;

	alert("El monto final es de " + montoFinal);
}

calculadoraDescuento();

function pedirMontoUsuario() {
	let monto;

	do {
		monto = parseFloat(prompt("Ingresar Monto"));
	} while (isNaN(monto) || monto === null);

	return monto;
}

function pedirDescuentoUsuario() {
	let descuento;

	do {
		descuento = parseFloat(prompt("Ingresar Descuento %"));
	} while (isNaN(descuento) || descuento === null);

	return descuento;
}
