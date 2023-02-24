# ibm-datapower-mpg-calculadora

## CalculadoraMPG Configuration
![mpg-config](/images/mpg-config.png)
![mpg-config](/images/mpg-config2.png)

## CalculadoraMPG Policy
![mpg-policy](/images/mpg-policy.png)

## CalculadoraMPG Front Side
![mpg-front-side](/images/mpg-front-side.png)

## 1. /calculadora/sumar

## 1.1. Match
- URL: /calculadora/sumar
- HTTP Method: POST

![mpg-policy-match-sumar](/images/mpg-policy-match-sumar.png)

## 1.2. Set Variable
- Variable Name: service/mpgw/skip-backside
- Variable Valor: 1

![mpg-policy-setvariable-sumar](/images/mpg-policy-setvariable-sumar.png)

## 1.3. GatewayScript

![mpg-policy-gatewayscript-sumar](/images/mpg-policy-gatewayscript-sumar.png)

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
![calculadora-restar](/images/calculadora-restar.png)

## 3. /calculadora/multiplicar
![calculadora-multiplicar](/images/calculadora-multiplicar.png)

## 4. /calculadora/dividir
![calculadora-dividir](/images/calculadora-dividir.png)