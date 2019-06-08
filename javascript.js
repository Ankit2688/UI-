1) Ternary operator 

	a) case-1
		var userInput = Number(prompt("Enter the number" , ""));
		var message = (userInput % 2 == 0) ? "Your Number is Even" : "Your Number is odd" ;
		alert(message);
	
	b) case-2
		var userInput = Number(prompt("Enter the Number",""));
		var message = (userInput % 2 == 0) ? (alert("your number is even"),alert("The number is "+userInput))
										   : (alert("your number is odd"), alert("The Number is"+userInput));
	c) case-3
		var userInput = Number(prompt("Enter the Months 1 2 3 ..",""));
		var month = (userInput ==1) ? "Month is jan" : (userInput ==2) ? "Month is feb" : (userInput ==3) ?"Month is Mar" : "Month is not valid"
		
													