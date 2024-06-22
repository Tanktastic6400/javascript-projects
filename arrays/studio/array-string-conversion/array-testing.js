let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];




//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check = protoArray1.includes(",");
	let temp = [];
	let output= "";
	//TODO: 2. write the code required for this step
	if(check){
		temp = protoArray1.split(",");
		temp.reverse();
		console.log(temp);
	}
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output = temp.join(",");
}

//3)
function semiDash() {
	let check = protoArray2.includes(";");
	let temp = [];
	let output;
//TODO: write the code required for this step
	if(check){
		temp = protoArray2.split(";");
		temp.sort();
	}
  
	return output = temp.join("-");
}

//4)
function reverseSpaces() {
	let check = protoArray3.includes(" ");
	let temp = [];
	let output;
  //TODO: write the code required for this step
		if(check){
			temp = protoArray3.split(" ");
			temp.sort().reverse();
		}
	return output = temp.join(" ");
}

//5)
function commaSpace() {
	let check = protoArray4.includes(", ");
	let temp = [];
	let output;
	//TODO: write the code required for this step
	if(check){
		temp = protoArray4.split(", ");
		temp.reverse();
	}

	return output = temp.join(",");
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
