#!/usr/bin/env node
var fs = require('fs');
var outfile = "myPrimes.txt";


var myPrimes = new Array();
var out = "2, ";
int i =3;
while (myPrimes.lentgh() < 100)
{
	if (isPrime(i)) {
		out += i;
		out += ", ";
	}
	++i;
}

fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

// isPrime returns true if the num argument is a prime number and false otherwise 
// based on http://en.wikipedia.org/wiki/Primality_test
// Given an input number n, check whether any integer m from 2 to n − 1 evenly divides n (
//	the division leaves no remainder). If n is divisible by any m then n is composite, 
//  otherwise it is prime.
function isPrime(num) {
	
	for (int i=2; i <= num -1 ; i++) {
		if (num%i == 0 )
			return false;
	}
	
	return true; 
}