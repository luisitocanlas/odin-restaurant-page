function loadAbout() {
	const content = document.querySelector('#content');

	if (content.textContent !== '') {
		content.textContent = '';
	}

	const aboutHeading = document.createElement('h1');
	aboutHeading.textContent = 'About Us';

	const story = document.createElement('p');
	story.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus dicta
  assumenda voluptates officia aspernatur, repellendus ad aperiam illo quam
  quos molestias, magni blanditiis eligendi repellat quaerat fugiat delectus
  excepturi.`;

	const contactHeading = document.createElement('h2');
	contactHeading.textContent = 'Visit Us';

	const contactInfo = document.createElement('p');
	contactInfo.innerHTML = `123 Culinary Lane, Food Town, FL 12345<br>
    Phone: (123) 456-7890<br>
    Email: info@restaurant.com`;

	content.appendChild(aboutHeading);
	content.appendChild(story);
	content.appendChild(contactHeading);
	content.appendChild(contactInfo);
}

export default loadAbout;
