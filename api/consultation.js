import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Create clients here, at request time — env vars are guaranteed to be loaded by now
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // 1. Save the lead to Supabase
    const { error: dbError } = await supabase
      .from('Leads')
      .insert([{ name, email, phone: phone || null, message: message || null }]);

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      return res.status(500).json({ error: 'Failed to save lead' });
    }

    // 2. Send a notification email to yourself
    await resend.emails.send({
      from: 'info@nexoviraai.com',
      to: 'stellarforge24@gmail.com', // replace with your real email
      subject: `New consultation request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message || 'Not provided'}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Consultation handler error:', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}