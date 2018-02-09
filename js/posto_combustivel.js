function valorCombustivel(litros, tipo) {

	var precoAlcool = 3.2;
	var precoGasolina = 3.7;

	//Alcool
	if(tipo == "A"){
		if(litros>20){
			return Number((litros*precoAlcool*0.95).toFixed(2));
		}else if(litros>=0){
			return Number((litros*precoAlcool*0.97).toFixed(2));
		}else{
			return null;
		}

	//Gasolina
	}else if(tipo == "G"){
		if(litros>20){
			return Number((litros*precoGasolina*0.94).toFixed(2));
		}else if(litros>=0){
			return Number((litros*precoGasolina*0.96).toFixed(2));
		}else{
			return null;
		}

	//Tipo inválido
	}else{
		return null;
	}

};
