describe("verifica_triangulo", function(){

	it("Triangulo inválido a+b<=c", function(){
		expect(verifica_triangulo(1, 1, 2)).toBe("Triangulo Inválido");
	});

	it("Triangulo inválido a+c<=b", function(){
		expect(verifica_triangulo(2, 5, 2)).toBe("Triangulo Inválido");
	});

	it("Triangulo inválido b+c<=a", function(){
		expect(verifica_triangulo(4, 1, 2)).toBe("Triangulo Inválido");
	});

	it("Triangulo inválido a = 0", function(){
		expect(verifica_triangulo(0, 1, 2)).toBe("Triangulo Inválido");
	});

	it("Triangulo inválido b = 0", function(){
		expect(verifica_triangulo(2, 0, 2)).toBe("Triangulo Inválido");
	});

	it("Triangulo inválido c = 0", function(){
		expect(verifica_triangulo(2, 1, 0)).toBe("Triangulo Inválido");
	});

	it("Triangulo inválido a negativo", function(){
		expect(verifica_triangulo(-2, 1, 2)).toBe("Triangulo Inválido");
	});

	it("Triangulo inválido b negativo", function(){
		expect(verifica_triangulo(2, -1, 2)).toBe("Triangulo Inválido");
	});

	it("Triangulo inválido c negativo", function(){
		expect(verifica_triangulo(2, 1, -2)).toBe("Triangulo Inválido");
	});

	it("Triangulo Equilátero", function(){
		expect(verifica_triangulo(2, 2, 2)).toBe("Equilátero");
	});

	it("Triangulo Escaleno", function(){
		expect(verifica_triangulo(5, 7, 8)).toBe("Escaleno");
	});

	it("Triangulo Isóceles", function(){
		expect(verifica_triangulo(6, 5, 5)).toBe("Isóceles");
	});



});
