describe("diaSemana", function(){

	var diaSemana = new DiaSemana();

	describe("intToDia()", function(){

		it("param válido", function(){
			expect(diaSemana.intToDia(3)).toBe("Terça");
		});

		it("param invalido positivo", function(){
			expect(diaSemana.intToDia(8)).toBe("Inválido");
		});

		it("param invalido zero", function(){
			expect(diaSemana.intToDia(0)).toBe("Inválido");
		});

		it("param invalido negativo", function(){
			expect(diaSemana.intToDia(-1)).toBe("Inválido");
		});

	});

});