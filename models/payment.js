// Set your publishable key.
var stripe = Stripe('YOUR_PUBLISHABLE_KEY');

// Create a Stripe client-side Element for card details.
var elements = stripe.elements();
var cardElement = elements.create('card');

// Mount the Element in the payment form.
cardElement.mount('#card-element');

// Handle form submission.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
	event.preventDefault();
	// Disable the submit button to prevent multiple clicks.
	document.getElementById('submit-payment-btn').disabled = true;
	// Send the card data to Stripe for tokenization.
	stripe.createToken(cardElement).then(function(result) {
		if (result.error) {
			// Inform the user if there was an error.
			var errorElement = document.getElementById('card-errors');
			errorElement.textContent = result.error.message;
			// Enable the submit button.
			document.getElementById('submit-payment-btn').disabled = false;
		} else {
			// Send the token to your server.
			var token = result.token.id;
			var name = document.getElementById('name').value;
			var email = document.getElementById('email').value;
			var xhr = new XMLHttpRequest();
			xhr.open('POST', '/charge');
			xhr.setRequestHeader('Content-Type', 'application/json');
			xhr.onload = function() {
				if (xhr.status === 200) {
					// Show a success message to the user.
					window.location.href = 'success.html';
				} else {
					// Inform the user if there was an error.
					alert('Error: ' + xhr.responseText);
					// Enable the
