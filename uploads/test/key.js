var key = ""; // Declare a global variable to store the key
		
		// Bind an event listener to the "Get Key" button
		document.getElementById("key").addEventListener("click", function() {
			// Generate a random key of 20 characters
			key = "";
			for (var i = 0; i < 20; i++) {
				// Generate a random number between 0 and 1
				var rand = Math.random();
				
				// If the random number is less than 0.5, add a random letter to the key
				// Otherwise, add a random number to the key
				if (rand < 0.5) {
					key += String.fromCharCode(Math.floor(Math.random() * 26) + 65); // A-Z
				} else {
					key += Math.floor(Math.random() * 10); // 0-9
				}
			}
