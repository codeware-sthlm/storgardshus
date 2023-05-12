import type { Handler, HandlerEvent } from '@netlify/functions';
import fetch from 'node-fetch';
import { z } from 'zod';

import { FormData } from '../schemas';

const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const payload = FormData.parse(body.payload);

    const { name, email, message } = payload.data;

    const html = `
      <h1>Ny kontaktförfrågan från hemsidan</h1>
      <p><strong>Namn:</strong> ${name}</p>
      <p><strong>E-post:</strong> ${email}</p>
      <p><strong>Meddelande:</strong><br>${message.replace(/\n/g, '<br>')}</p>
    `;

    const emailData = {
      from: process.env.EMAIL_FROM || '',
      to: process.env.EMAIL_TO || '',
      subject: 'Ny kontaktförfrågan från hemsidan',
      html: html
    };

    try {
      console.log('Sending email to Mailgun');
      console.log('Email data:', emailData);
      console.log('Mailgun API key:', process.env.MAILGUN_API_KEY);
      console.log('Mailgun domain:', process.env.MAILGUN_DOMAIN);

      const auth = `${Buffer.from(
        `api:${process.env.MAILGUN_API_KEY}`
      ).toString('base64')}`;

      await fetch(
        `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`,
        {
          method: 'POST',
          body: new URLSearchParams(emailData),
          headers: {
            Authorization: `Basic ${auth}`
          }
        }
      );
      return {
        statusCode: 200,
        body: 'Email sent'
      };
    } catch (error) {
      console.error('Error sending email:', error);
      return {
        statusCode: 500,
        body: 'Error sending email'
      };
    }
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors);
      return {
        statusCode: 400,
        body: 'Bad Request: Invalid data'
      };
    }

    console.error('Unknown error:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error: Could not send email'
    };
  }
};

export { handler };
