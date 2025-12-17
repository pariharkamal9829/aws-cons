const sgMail = require('@sendgrid/mail');

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body || '{}');
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const SENDGRID_FROM = process.env.SENDGRID_FROM || 'no-reply@yourdomain.com';
    const to = data.to || 'info@awspartnerx.cloud';

    if (!SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured');
      return { statusCode: 500, body: 'SendGrid API key not configured' };
    }

    sgMail.setApiKey(SENDGRID_API_KEY);


    let subject = 'Website submission';
    let html = '';

    if (data.type === 'contact') {
      subject = 'New contact inquiry from website';
      html = `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${data.name || '-'} </p>
        <p><strong>Email:</strong> ${data.email || '-'} </p>
        <p><strong>Company:</strong> ${data.company || '-'} </p>
        <p><strong>Service:</strong> ${data.service || '-'} </p>
        <p><strong>Message:</strong> ${data.message || '-'} </p>
      `;
    } else {
      // default to checkout-like email
      subject = data.subject || 'New checkout from website';
      html = `
        <h2>New Checkout / Order Submission</h2>
        <p><strong>Name:</strong> ${data.name || '-'} </p>
        <p><strong>Phone:</strong> ${data.phone || '-'} </p>
        <p><strong>Email:</strong> ${data.email || '-'} </p>
        <p><strong>Amount:</strong> ${data.amount || '-'} </p>
        <p><strong>Certifications:</strong> ${data.certifications || '-'} </p>
      `;
    }

    const msg = {
      to,
      from: SENDGRID_FROM,
      subject,
      html
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true })
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: String(err) };
  }
};
