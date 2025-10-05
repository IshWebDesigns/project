// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - email subject
//    - {{message}} - email message
//    - {{to_name}} - your name (recipient)
// 4. Get your service ID, template ID, and public key
// 5. Replace the values above with your actual credentials