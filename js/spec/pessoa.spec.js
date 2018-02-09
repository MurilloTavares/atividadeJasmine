describe("Pessoa", function(){

	var pessoa = new Pessoa("Joao", "Pereira", 27, "Castanhos");

	it("Metodo - nome", function(){
		expect("Joao Pereira").toBe(pessoa.nome());
	});

	it("Metodo - nome_idade", function(){
		expect("Joao tem idade igual a 27").toBe(pessoa.nome_idade());
	});

	it("Metodo - nome_cor_olho", function(){
		expect("Joao tem olho com cor Castanhos").toBe(pessoa.nome_cor_olho());
	});

});