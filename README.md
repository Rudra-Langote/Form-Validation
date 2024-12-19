# Form-Validation

## Overview
This project is a responsive and user-friendly web form with robust validation functionality. The form collects the following fields:
- Full Name
- Email ID
- Phone Number
- Password
- Confirm Password

The form ensures that all fields meet specific validation criteria and provides clear feedback to users when the inputs are invalid. The design is responsive and implemented using HTML, CSS, Bootstrap, and JavaScript.

## Features
1. **Validation Criteria**:
   - Full Name: Must be at least 5 characters long.
   - Email ID: Must include the `@` character.
   - Phone Number: Must be a 10-digit number and cannot be `1234567890`.
   - Password: Cannot be the string `password`, the user’s name, or fewer than 8 characters.
   - Confirm Password: Must match the Password field.
2. **Error Messages**:
   - Displays specific error messages like "Enter a correct email" or "Password is not correct."
3. **Responsive Design**:
   - Utilizes Bootstrap for a mobile-friendly layout.
4. **Deployment**:
   - Hosted on GitHub and Netlify for easy accessibility.

## Technologies Used
- **HTML**: Structure of the form.
- **CSS and Bootstrap**: Styling and responsive design.
- **JavaScript**: Form validation logic using event listeners, functions, loops, and conditionals.

## Folder Structure
```
project-folder/
|-- index.html        # Main HTML file
|-- style.css         # Custom CSS for styling
|-- index.js         # JavaScript for validation logic
|-- README.md         # Project documentation
```

## Validation Logic
The following JavaScript features are implemented:
- **Event Listeners**:
  - `onSubmit`: Validates all fields when the form is submitted.
- **Feedback**:
  - Adds Bootstrap classes `is-valid` and `is-invalid` to inputs dynamically.
  - Updates error messages in the `invalid-feedback` section.

## Deployment
1. **GitHub**:
   - The project is hosted on a GitHub repository for version control.
2. **Netlify**:
   - Integrated with Netlify for live deployment.

### Deployment Links
- https://github.com/Rudra-Langote/Form-Validation
- https://form-rl.netlify.app/

## Instructions for Use
1. Clone the repository:
   ```bash
   git clone https://github.com/Rudra-Langote/Form-Validation.git
   ```
2. Open the project folder and launch `index.html` in your browser.
3. Submit the form and observe real-time validation feedback.
---
Thank you for checking out this project! Feel free to reach out with any questions or suggestions.

