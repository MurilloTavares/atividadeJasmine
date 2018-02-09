describe("beforeEach() e afterEach()", function(){

	beforeEach(function(){
		// Executado antes de cada teste
		this.frutas = ["Banana", "Laranja", "Limao"];
	})

	afterEach(function(){
		// Executado depois de cada teste
		this.frutas = null;
	})

	it("Teste add fruta", function(){
		this.frutas.push("Goiaba");
		expect(this.frutas.length).toBe(4);
	});

	it("Teste lenght fruta", function(){
		expect(this.frutas.length).toBe(4);
	});	

});

describe("toEqual()", function(){
	var n1={a:2, b:4};
	var n2={a:2, b:4};
	var n3={a:2, b:5};

	it("teste toEqual n1-n2", function(){
		expect(n1).toEqual(n2);
	});

	it("teste toEqual n2-n3", function(){
		expect(n2).toEqual(n3);
	});

});

describe("Matcher toMatch()", function(){
	var message = "Eu sou um programador";
	var pattern1 = "ogra";
	var pattern2 = "made";

	it("Teste 1", function(){
		expect(message).toMatch(pattern1);
	});

	it("Teste 2", function(){
		expect(message).toMatch(pattern2);
	});
});

describe("Matcher toBeNull()", function(){
	var a = null, b = "teste";

	it("Teste null", function(){
		expect(null).toBeNull();
	});

	it("Teste a", function(){
		expect(a).toBeNull();
	});

	it("Teste b", function(){
		expect(b).toBeNull();
	});

	it("Teste b not", function(){
		expect(b).not.toBeNull();
	});

});


describe("Matcher toBeTruthy()", function(){
	var valor_v = true;
	var valor_f = false;

	it("Teste v", function(){
		expect(valor_v).toBeTruthy();
	});

	it("Teste f", function(){
		expect(valor_f).toBeTruthy();
	});
});


describe("Matcher toBeUndefined()", function(){
	var a;
	var b = 98;

	it("Teste a", function(){
		expect(a).toBeUndefined();
	});

	it("Teste b", function(){
		expect(b).toBeUndefined();
	});
});

describe("Matcher toContain()", function(){
	var nomes = ["Joao", "Maria", "Jose"];

	it("Teste Joao", function(){
		expect(nomes).toContain("Maria");
	});

	it("Teste Manuel", function(){
		expect(nomes.toContain("Manuel"));
	});

});

describe("Matcher toBeLessThan()", function(){
	var p = 3.14, e = 2.78;

	it("Teste e < p", function(){
		expect(e).toBeLessThan(p);
	});

	it("Teste p < e", function(){
		expect(p).toBeLessThan(e);
	});
});

describe("Matcher toBeGreaterThan()", function(){
	var p = 3.14, e = 2.78;

	it("Teste p > e", function(){
		expect(p).toBeGreaterThan(e);
	});

	it("Teste e > p", function(){
		expect(e).toBeGreaterThan(p);
	});
});

describe("Matcher toThrow()", function(){

	var fun1 = function(){return 3 + 9};
	var fun2 = function(){return a + 4};

	it("Teste fun1", function(){
		expect(fun1).toThrow();
	});

	it("Teste fun2", function(){
		expect(fun2).toThrow();
	});

});