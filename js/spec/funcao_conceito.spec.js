describe("funcao_conceito", function(){

	it("n1 invalido positivo", function(){
		expect(funcao_conceito(11, 5)).toBe("Numeros Invalidos");
	});

	it("n1 invalido negativo", function(){
		expect(funcao_conceito(-5, 5)).toBe("Numeros Invalidos");
	});

	it("n1 zero", function(){
		expect(funcao_conceito(0, 5)).toBe("Fora do conceito");
	});

	it("n2 invalido positivo", function(){
		expect(funcao_conceito(5, 11)).toBe("Numeros Invalidos");
	});

	it("n2 invalido negativo", function(){
		expect(funcao_conceito(5, -5)).toBe("Numeros Invalidos");
	});

	it("n2 zero", function(){
		expect(funcao_conceito(5, 0)).toBe("Fora do conceito");
	});

	it("Conceito A", function(){
		expect(funcao_conceito(10, 8)).toBe("A");
	});

	it("Conceito B", function(){
		expect(funcao_conceito(7, 8)).toBe("B");
	});

	it("Conceito C", function(){
		expect(funcao_conceito(6, 6)).toBe("C");
	});

	it("Fora do conceito", function(){
		expect(funcao_conceito(2, 4)).toBe("Fora do conceito");
	});

});
