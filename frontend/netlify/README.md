Netlify Forms

This project uses Netlify Forms for `contact` and `checkout` submissions. No SendGrid, API keys, or serverless email forwarding are required.

How it works:

- The forms include `data-netlify="true"` and `form-name` hidden inputs so Netlify captures submissions.
- Configure Netlify site notifications (Build & deploy → Forms) or connect the form to third-party automations (Zapier/Make) to forward form submissions to email or other services.

Deployment notes:

- Keep the `netlify` folder for other helpers, but `netlify/functions/sendEmail.js` has been removed — Netlify will store the submissions and you can configure notifications in the Netlify dashboard.
