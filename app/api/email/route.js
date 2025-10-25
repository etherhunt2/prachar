import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a reusable transporter using SMTP
const createTransporter = () => {
  const email = process.env.SMTP_EMAIL;
  const password = process.env.SMTP_PASSWORD;
  
  if (!email || !password) {
    throw new Error('Missing SMTP credentials. Please check your .env.local file.');
  }
  
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password
    }
  });
};

// Validate form data
const validateFormData = (data) => {
  const requiredFields = [
    'name', 'email', 'phone', 'industry', 
    'targetAudience', 'businessName', 'yourRole', 
    'problemStatement'
  ];

  // Check required fields
  for (const field of requiredFields) {
    if (!data[field] || (typeof data[field] === 'string' && data[field].trim() === '')) {
      console.log(`Validation failed: Missing or empty required field: ${field}`);
      return false;
    }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    console.log('Validation failed: Invalid email format');
    return false;
  }

  // Phone validation (basic check for digits)
  const phoneRegex = /^\d{10,}$/; // At least 10 digits
  const cleanPhone = data.phone.replace(/\D/g, ''); // Remove non-digits
  if (!phoneRegex.test(cleanPhone)) {
    console.log('Validation failed: Invalid phone format');
    return false;
  }

  return true;
};

// Helper function to format array or string data
const formatArrayOrString = (data) => {
  if (Array.isArray(data)) {
    return data.join(', ');
  }
  if (typeof data === 'string' && data.trim()) {
    return data;
  }
  return 'None';
};

// Format email HTML
const formatEmailHTML = (formData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>WhatsApp:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.whatsapp || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Industry:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">
            ${formData.industry}${formData.customIndustry ? ` (${formData.customIndustry})` : ''}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Services Interested:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${formatArrayOrString(formData.services)}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Target Audience:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">
            ${formData.targetAudience}${formData.customTargetAudience ? ` (${formData.customTargetAudience})` : ''}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Business Name:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.businessName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Your Role:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.yourRole}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Social Platforms:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${formatArrayOrString(formData.socialPlatforms)}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>How Did You Know:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.howDidYouKnow || 'Not specified'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Meeting Time:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.meetingTime || 'Not specified'}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Problem Statement:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.problemStatement}</td>
        </tr>
      </table>
    </div>
  `;
};

export async function POST(request) {
  try {
    // Parse the incoming JSON data
    const formData = await request.json();

    // Validate form data
    if (!validateFormData(formData)) {
      return NextResponse.json(
        { message: 'Incomplete form data' }, 
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Prepare email options
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: formatEmailHTML(formData)
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { message: 'Email sent successfully' }, 
      { status: 200 }
    );
  } catch (error) {
    // Log the full error for server-side debugging
    console.error('Email sending error:', error);

    // Return error response
    return NextResponse.json(
      { 
        message: 'Error sending email', 
        error: error instanceof Error ? error.message : String(error) 
      }, 
      { status: 500 }
    );
  }
}

// Explicitly handle OPTIONS method for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { 
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
