function funcao_conceito(n1, n2) {
	if(n1>10 || n1<0 || n2>10 || n2<0){
		return "Numeros Invalidos";
	};

	var media = (n1+n2)/2;

	switch(true){
		case (media>=9):
			return "A";
		case (media>=7.5):
			return "B";
		case (media>=6):
			return "C";
		default:
			return "Fora do conceito";
	};

};
