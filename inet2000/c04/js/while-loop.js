var i = 1;       // Set counter to 1var msg = '';    // Message// Store 5 times table in a variable		if (i%3) {	while (i < 40) {		msg += i + ' x 7 = ' + (i * 7) + '<br />';        i++;	}	}document.getElementById('answer').innerHTML = msg;