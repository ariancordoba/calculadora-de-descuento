function calcular() {
	let monto = 0;
	let descuento = 0;
	let imp_desc = 0;
	let total = 0;

	monto = document.getElementById("monto").value;
	descuento = document.getElementById("descuento").value;

	if (isNaN(monto, descuento)) {
		alert("¡Solo numeros!");
		location.reload();
	}

	imp_desc = (monto * descuento) / 100;

	document.getElementById("importe_descontado").value = imp_desc;

	total = monto - imp_desc;

	document.getElementById("total").value = total;
}
