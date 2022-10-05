let monto, descuento, calcularDecimal, calcularDescuento;

function calculadoraDescuento() {
	monto = parseFloat(prompt("Ingresar Monto"));
	descuento = parseFloat(prompt("Ingresar Descuento %"));

	if (descuento && monto <= 0) {
		alert("Ingrese un porcentaje o monto mayor a cero");
	}

	calcularDecimal = descuento / 100;
	calcularDescuento = calcularDecimal * monto;
	montoFinal = monto - calcularDescuento;

	alert("El monto final es de " + montoFinal);
}

calculadoraDescuento();
