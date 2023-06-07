const form = document.getElementById('lost-item-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	// Get form fields values
	const itemName = document.getElementById('item-name').value;
	const itemCategory = document.getElementById('item-category').value;
	const description = document.getElementById('description').value;
	const contactName = document.getElementById('contact-name').value;
	const contactEmail = document.getElementById('contact-email').value;

	// TODO: Send form data to server or do something with it

	alert('Form submitted successfully');
	form.reset();
});
