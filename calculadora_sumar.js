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



