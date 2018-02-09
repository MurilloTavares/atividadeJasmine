describe("ConversorTmp", function(){

	var conversor = new ConversorTmp();

	describe("celsiusToFahrenheit()", function(){

		it("param positivo", function(){
			expect(conversor.celsiusToFahrenheit(50)).toBe(122);
		});

		it("param zero", function(){
			expect(conversor.celsiusToFahrenheit(0)).toBe(32);
		});

		it("param negativo", function(){
			expect(conversor.celsiusToFahrenheit(-15)).toBe(5);
		});

	});

	describe("fahrenheitToCelsius()", function(){

		it("param positivo", function(){
			expect(conversor.fahrenheitToCelsius(50)).toBe(10);
		});

		it("param zero", function(){
			expect(conversor.fahrenheitToCelsius(0)).toBe(-17.77777777777778);
		});

		it("param negativo", function(){
			expect(conversor.fahrenheitToCelsius(-13)).toBe(-25);
		});

	});

	describe("celsiusToKelvin()", function(){

		it("param positivo", function(){
			expect(conversor.celsiusToKelvin(10)).toBe(283);
		});

		it("param zero", function(){
			expect(conversor.celsiusToKelvin(0)).toBe(273);
		});

		it("param negativo", function(){
			expect(conversor.celsiusToKelvin(-10)).toBe(263);
		});

	});

	describe("kelvinToCelsius()", function(){

		it("param positivo", function(){
			expect(conversor.kelvinToCelsius(200)).toBe(-73);
		});

		it("param zero", function(){
			expect(conversor.kelvinToCelsius(0)).toBe(-273);
		});

		it("param negativo", function(){
			expect(conversor.kelvinToCelsius(-10)).toBe(-283);
		});

	});

});