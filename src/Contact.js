function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  // Create a <h1> element for "Contact Us"
  const contactUsHeading = document.createElement("h1");
  contactUsHeading.textContent = "Contact Us";

  // Create a <p> element for the introductory message
  const introParagraph = document.createElement("p");
  introParagraph.textContent =
    "Have a question, suggestion, or just want to say hello? We'd love to hear from you! Reach out to us through any of the following means, and we'll get back to you as soon as possible.";

  // Create a <h2> element for "Contact Information"
  const contactInfoHeading = document.createElement("h2");
  contactInfoHeading.textContent = "Contact Information";

  // Create a <p> element for the address
  const addressParagraph = document.createElement("p");
  addressParagraph.innerHTML =
    "<strong>Our Address:</strong><br>123 Main Street,<br>Cityville, Country";

  // Create a <p> element for the phone number
  const phoneParagraph = document.createElement("p");
  phoneParagraph.innerHTML = "<strong>Phone:</strong><br>(555) 123-4567";

  // Create a <p> element for the email
  const emailParagraph = document.createElement("p");
  emailParagraph.innerHTML =
    "<strong>Email:</strong><br><a href='mailto:info@example.com'>info@example.com</a>";

  // Create a <p> element for the opening hours
  const openingHoursParagraph = document.createElement("p");
  openingHoursParagraph.innerHTML =
    "<strong>Opening Hours:</strong><br>Monday - Friday: 9:00 AM - 8:00 PM<br>Saturday - Sunday: 10:00 AM - 6:00 PM";

  // Create a <h2> element for "Get In Touch"
  const getInTouchHeading = document.createElement("h2");
  getInTouchHeading.textContent = "Get In Touch";

  // Create a <p> element for the "Get In Touch" message
  const getInTouchParagraph = document.createElement("p");
  getInTouchParagraph.textContent =
    "Whether you have a question about our menu, want to book a reservation, or need assistance with anything else, feel free to get in touch. Our friendly staff is ready to assist you.";

  contact.appendChild(contactUsHeading);
  contact.appendChild(introParagraph);
  contact.appendChild(contactInfoHeading);
  contact.appendChild(addressParagraph);
  contact.appendChild(phoneParagraph);
  contact.appendChild(emailParagraph);
  contact.appendChild(openingHoursParagraph);
  contact.appendChild(getInTouchHeading);
  contact.appendChild(getInTouchParagraph);
  return contact;
}

function Contact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default Contact;
