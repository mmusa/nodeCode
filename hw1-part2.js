#!/usr/bin/env node
var fs = require('fs');
var outfile = "myPrimes.txt";

var i =3;
var myPrimes = new Array();
myPrimes.push(2);

while (myPrimes.length < 100)
{
	if (isPrime(i)) {
		myPrimes.push(i);
	}
	++i;
}
var out = "";
for (var x=0; x < myPrimes.length-1; x++) {
	out += myPrimes[x]+ ",";
}

out += myPrimes[myPrimes.length-1] + "\n"; 

fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

// isPrime returns true if the num argument is a prime number and false otherwise 
// based on http://en.wikipedia.org/wiki/Primality_test
// Given an input number n, check whether any integer m from 2 to n − 1 evenly divides n (
//	the division leaves no remainder). If n is divisible by any m then n is composite, 
//  otherwise it is prime.
function isPrime(num) {
	
	for (var i=2; i <= num -1 ; i++) {
		if (num%i == 0 )
			return false;
	}
	
	return true; 
}
