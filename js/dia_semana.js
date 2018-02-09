var DiaSemana = function() {
};

DiaSemana.prototype ={
    constructor: DiaSemana,     
 
    intToDia : function(x){
		switch(x){
			case 1: 
				return "Domingo";
			case 2: 
				return "Segunda";
			case 3: 
				return "Terça";
			case 4: 
				return "Quarta";
			case 5: 
				return "Quinta";
			case 6: 
				return "Sexta";
			case 7: 
				return "Sábado";
			default:
				return "Inválido";
		};
	}

};