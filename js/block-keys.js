		// Fetch the IP address of the machine
		fetch("https://api.ipify.org?format=json")
			.then(response => response.json())
			.then(data => {
				// Display the IP address in the page
				document.getElementById("ip-info").innerHTML = `You IP: ${data.ip} `;
			});
	</script>
	<script>
	// Disable the "Inspect" option in the context menu
	document.addEventListener("contextmenu", function(event) {
		event.preventDefault();
	});
	</script>
	<script>
	// Bind an event listener to the keydown event
	document.addEventListener("keydown", function(event) {
		// Check if the user pressed one of the keyboard shortcuts for inspecting elements
		if (event.keyCode === 123 || event.keyCode === 116 || event.keyCode === 117 || event.keyCode === 85) {
			// Prevent the default action (opening the Developer Tools, refreshing the page, or viewing the source code)
			event.preventDefault();
		}
	});
