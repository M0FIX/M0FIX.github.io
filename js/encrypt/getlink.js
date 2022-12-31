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
			
			// Set the value of the input box to the generated key
			document.getElementById("input").value = key;
		});
		
		// Bind an event listener to the "Get Link" button
		document.getElementById("link").addEventListener("click", function() {
			// Get the value of the input box
			var input = document.getElementById("input").value;
			
			// Check if the input is empty or not the correct key
			if (input === "" || input !== key) {
				alert("Please enter the correct key to access the link.");
			} else {
				// Redirect to the link if the key is correct
				//https://drive.google.com/uc?export=download&id= [ID] &confirm=t&uuid=
				
				//window.open("https://drive.google.com/uc?export=download&id=1aYlM65mzK71wsACZFtTm1LtcGNhpAY__&confirm=t&uuid= ", "_blank"); //new tabs
				window.location.href = "https://drive.google.com/uc?export=download&id=1aYlM65mzK71wsACZFtTm1LtcGNhpAY__&confirm=t&uuid=";	//sigle tabs
			}
		});