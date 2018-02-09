function verifica_triangulo(a, b, c) {

	switch(true){
		case (a+b<=c || a+c<=b || b+c<=a || a<=0 || b<=0 || c<=0):
			return "Triangulo Inválido";
		case (a == b && b == c):
			return "Equilátero";
		case (a != b && b != c):
			return "Escaleno";
		default:
			return "Isóceles";
	};

};
