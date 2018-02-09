describe("Reajuste", function(){

	it("Salário > 1500", function(){
		expect(reajusta(1501)).toBe(1576.05);
	});

	it("700 > Salário >= 1500", function(){
		expect(reajusta(1400)).toBe(1540);
	});

	it("280 > Salário >= 700", function(){
		expect(reajusta(500)).toBe(575);
	});

	it("0 >= Salário >= 280", function(){
		expect(reajusta(280)).toBe(336);
	});

	it("Salário < 0 (Inválido)", function(){
		expect(reajusta(-1)).toBe(null);
	});

});
