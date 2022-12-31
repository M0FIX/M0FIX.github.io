	// Bind an event listener to the keydown event
	document.addEventListener("keydown", function(event) {
		// Check if the user pressed one of the keyboard shortcuts for inspecting elements
		if (event.keyCode === 123 || event.keyCode === 116 || event.keyCode === 117 || event.keyCode === 85) {
			// Prevent the default action (opening the Developer Tools, refreshing the page, or viewing the source code)
			event.preventDefault();
		}
	});
