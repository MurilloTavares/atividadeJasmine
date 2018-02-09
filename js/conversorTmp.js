var ConversorTmp = function() {
};

ConversorTmp.prototype ={
    constructor: ConversorTmp,     
 
    celsiusToFahrenheit : function(x){
		return (1.8*x)+32;
	},

    fahrenheitToCelsius : function(x){
    	var result = (x-32)/1.8;
		return result;
	},

	celsiusToKelvin : function(x){
		return x+273;
	},

	kelvinToCelsius : function(x){
		return x-273;
	}
};
