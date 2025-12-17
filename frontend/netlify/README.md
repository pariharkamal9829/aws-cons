Netlify Functions and Email forwarding

This project includes a Netlify function at `netlify/functions/sendEmail.js` that forwards checkout submissions to an email address using SendGrid.

Setup steps:

1. In Netlify site settings -> Build & deploy -> Environment, add:
   - `SENDGRID_API_KEY` = your SendGrid API key
   - `SENDGRID_FROM` = verified sender email (e.g. no-reply@yourdomain.com)

2. Deploy the site. The checkout form in the frontend will POST to `/.netlify/functions/sendEmail` and the function will forward the details to `kamlesh@webclickindia.site`.

Netlify Forms

The checkout form also includes Netlify Forms attributes (`data-netlify="true"`). Netlify will capture submissions in the site dashboard as well.

If you prefer not to use SendGrid, you can instead configure Netlify alerts or integrate with Zapier/Make to forward Netlify form submissions to an email address.
