function shuffleLetters() {
			// Get the text element
			var textElement = document.getElementById("text");
			
			// Split the text into an array of characters
			var characters = textElement.innerHTML.split("");
			
			// Shuffle the array of characters, excluding the spaces
			for (var i = 0; i < characters.length; i++) {
				if (characters[i] !== " ") {
					// Pick a random character to swap with the current character
					var j = Math.floor(Math.random() * characters.length);
					
					// Swap the characters if the other character is not a space
					if (characters[j] !== " ") {
						var temp = characters[i];
						characters[i] = characters[j];
						characters[j] = temp;
					}
				}
			}
			
			// Join the characters back into a string and update the text element
			textElement.innerHTML = characters.join("");
		}
		
		// Shuffle the letters every 1000 milliseconds (1 second)
		setInterval(shuffleLetters, 100);