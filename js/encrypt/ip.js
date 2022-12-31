	fetch("https://api.ipify.org?format=json")
			.then(response => response.json())
			.then(data => {
				// Display the IP address in the page
				document.getElementById("ip-info").innerHTML = `You IP: ${data.ip} `;
			});
