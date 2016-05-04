var count, fizzer; buzzer; fizzbuzzer;
count = function(start, end) {"
"};

fizzer = function(num) {
	if(i%3 == 0) {
		return "fizz";
	} else {
		return num;
	}

};

module.exports = {
	count: count,
	fizzer: fizzer,
	buzzer: buzzer
	fizzbuzzer: fizzbuzzer
};
exports.count = function(start, end) {
	// create a variable for output
	var output = start;

	//modify output to look like what we want
	for (var counter = start; counter < end; counter += 1) {
			// code to be repeated goes here
			output = output + " " + (counter + 1); 
	}

	// return the output, e.g "1 2 3 4 5"
	return output;
};
exports.fizzbuzz = function(num)
	if (num % 3 == 0 && num % 5 == 0)
		console.log("fizzbuzz")
	else if	(num % 3 == 0)
		console.log("fizz");
	else if (num % 5 == 0)
		console.log("buzz");
	else if 
		console.log(num)

	 