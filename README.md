# ibm-datapower-mpg-calculadora

## 1. /calculadora/sumar

## 1.1. Match
![mpg-policy-match-sumar](/images/mpg-policy-match-sumar.png)

## 1.2. Set Variable
- Variable Name: service/mpgw/skip-backside
- Variable Valor: 1

![mpg-policy-setvariable-sumar](/images/mpg-policy-setvariable-sumar.png)

## 1.3. GatewayScript
```
var hm = require ('header-metadata');

session.input.readAsJSON (function (error, json) {
    if (error) {
      // an error occurred when parsing the content, e.g. invalid JSON object
      // uncatched error will stop the processing and the error will be logged
      throw error;
    }
    
	var calc_number1 = json.numero1;
	var calc_number2 = json.numero2;
	var calc_resultado = calc_number1 + calc_number2;
	
	var object_output = {
		'resultado': calc_resultado	
	};

	session.output.write(object_output);
	hm.response.set ('Content-Type', 'application/json');
	
});
```
## 2. /calculadora/restar

## 3. /calculadora/multiplicar

## 4. /calculadora/dividir
