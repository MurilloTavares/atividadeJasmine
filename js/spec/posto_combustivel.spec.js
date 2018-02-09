describe("Reajuste", function(){

	describe("Alcool", function(){

		it("20L > litros", function(){
			expect(valorCombustivel(25, "A")).toBe(76);
		});

		it("0L > litros > 20L", function(){
			expect(valorCombustivel(15, "A")).toBe(46.56);
		});

		it("litros > 0L", function(){
			expect(valorCombustivel(-10, "A")).toBe(null);
		});

	});

	describe("Gasolina", function(){

		it("20L > litros", function(){
			expect(valorCombustivel(25, "G")).toBe(86.95);
		});

		it("0L > litros > 20L", function(){
			expect(valorCombustivel(10, "G")).toBe(35.52);
		});

		it("litros > 0L", function(){
			expect(valorCombustivel(-20, "G")).toBe(null);
		});

	});

	it("Tipo Invalido", function(){
			expect(valorCombustivel(10, "Alcool")).toBe(null);
		});

});
