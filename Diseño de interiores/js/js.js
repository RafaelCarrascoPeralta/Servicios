/* JavaScript */

/*window.onload = function() {
	var selectedTodas = document.getElementById("imagenes");
	selectedTodas.addEvenListener("change", OrdenarTodas);

function OrdenarTodas() {
	var selectedTodas = document.getElementById("ordenar");
	var selectedImg = document.getElementBy('chaquetas');
	

	console.log(selectedTodas)
	for (var i = 1; < selectedImg.length; i++ ) {
		if ()
	}

}*/

/*window.onload = function() {
	var selectFiltrar = document.getElementById("filtrar");
	selectFiltrar.addEventListener("change", filtrarChaquetas);

	function filtrarChaquetas() {
		var selectedOption = selectFiltrar.value;
		var chaquetas = document.getElementById("imagenes").querySelectorAll("div[id^='chaqueta']");

		if (selectedOption === "chaquetas") {
			chaquetas.forEach(function(chaqueta) {
				chaqueta.style.display = "block";
			});
		} else if (selectedOption === "promocion") {
			chaquetas.forEach(function(chaqueta) {
				var chaquetaId = parseInt(chaqueta.id.replace("chaqueta", ""));
				if (chaquetaId === 6 || chaquetaId === 8 || chaquetaId === 10) {
					chaqueta.style.display = "block";
				} else {
					chaqueta.style.display = "none";
				}
			});
		}
	}
}*/

/*window.onload = function() {
	var selectFiltrar = document.getElementById("filtrar");
	selectFiltrar.addEventListener("change", filtrarDiseños);

	function filtrarChaquetas() {
		var selectedOption = selectFiltrar.value;
		var diseños = document.getElementById("imagenes").children;

		if (selectedOption === "diseños") {
			for (var i = 0; i < diseños.length; i++) {
				var diseño = diseños[i];
				if (diseño.id.substring(0, 8) === "diseño") {
					diseño.style.display = "block";
				}
			}
		} else if (selectedOption === "promocion") {
			for (var i = 0; i < diseños.length; i++) {
				var diseño = diseños[i];
				if (diseño.id === "diseño6" || diseño.id === "diseño8" || diseño.id === "diseño10") {
					diseño.style.display = "block";
				} else {
					diseño.style.display = "none";
				}
			}
		}
	}*/
}