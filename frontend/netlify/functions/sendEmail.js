// sendEmail.js — Function removed
// This project now uses Netlify Forms for contact/checkout submissions.
// Calling this function returns a 410 to indicate the function is intentionally removed.

exports.handler = async () => {
  return {
    statusCode: 410,
    body: 'sendEmail function removed — use Netlify Forms for submissions'
  };
};
