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
