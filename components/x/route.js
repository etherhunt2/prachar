import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      whatsapp,
      email,
      industry,
      customIndustry,
      services,
      targetAudience,
      customTargetAudience,
      howDidYouKnow,
      businessName,
      yourRole,
      socialPlatforms,
      meetingTime,
      problemStatement
    } = body;

    // Create transporter using Gmail
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EmailID,
        pass: process.env.APP_PASS
      }
    });

    // Prepare the email content
    const finalIndustry = industry === 'Other' ? customIndustry : industry;
    const finalTargetAudience = targetAudience === 'Other' ? customTargetAudience : targetAudience;

    const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; background-color: #f8f9fa; padding: 20px;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 28px; font-weight: bold;">🎯 New Contact Form Submission</h1>
        <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">प्रचार Website - Contact Form</p>
      </div>

      <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

        <!-- Personal Information Section -->
        <div style="margin-bottom: 30px;">
          <h2 style="color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-bottom: 20px;">👤 Personal Information</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 15px;">
            <div>
              <strong style="color: #333;">Name:</strong><br>
              <span style="color: #555; font-size: 16px;">${name}</span>
            </div>
            <div>
              <strong style="color: #333;">Email:</strong><br>
              <span style="color: #555; font-size: 16px;">${email}</span>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
              <strong style="color: #333;">Phone:</strong><br>
              <span style="color: #555; font-size: 16px;">${phone}</span>
            </div>
            <div>
              <strong style="color: #333;">WhatsApp:</strong><br>
              <span style="color: #555; font-size: 16px;">${whatsapp || 'Not provided'}</span>
            </div>
          </div>
        </div>

        <!-- Business Information Section -->
        <div style="margin-bottom: 30px;">
          <h2 style="color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-bottom: 20px;">🏢 Business Information</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 15px;">
            <div>
              <strong style="color: #333;">Business Name:</strong><br>
              <span style="color: #555; font-size: 16px;">${businessName}</span>
            </div>
            <div>
              <strong style="color: #333;">Role:</strong><br>
              <span style="color: #555; font-size: 16px;">${yourRole}</span>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
              <strong style="color: #333;">Industry:</strong><br>
              <span style="color: #555; font-size: 16px;">${finalIndustry}</span>
            </div>
            <div>
              <strong style="color: #333;">Target Audience:</strong><br>
              <span style="color: #555; font-size: 16px;">${finalTargetAudience}</span>
            </div>
          </div>
        </div>

        <!-- Services & Marketing Section -->
        <div style="margin-bottom: 30px;">
          <h2 style="color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-bottom: 20px;">🎯 Services & Marketing</h2>
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Services Interested in:</strong><br>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 8px;">
              ${services || 'None selected'}
            </div>
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Active Social Platforms:</strong><br>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 8px;">
              ${socialPlatforms || 'None selected'}
            </div>
          </div>
          <div>
            <strong style="color: #333;">How they found us:</strong><br>
            <span style="color: #555; font-size: 16px;">${howDidYouKnow}</span>
          </div>
        </div>

        <!-- Meeting & Problem Statement Section -->
        <div style="margin-bottom: 30px;">
          <h2 style="color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-bottom: 20px;">📅 Meeting & Requirements</h2>
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Preferred Meeting Time:</strong><br>
            <span style="color: #555; font-size: 16px;">${meetingTime || 'Not specified'}</span>
          </div>
          <div>
            <strong style="color: #333;">Problem Statement:</strong><br>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 8px; border-left: 4px solid #667eea;">
              <em style="color: #555; font-size: 16px; line-height: 1.6;">"${problemStatement}"</em>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center; color: #666;">
          <p style="margin: 0; font-size: 14px;">
            📧 This email was sent from the प्रचार website contact form<br>
            🕒 Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      </div>
    </div>
    `;

    // Text version for better compatibility
    const textContent = `
🎯 NEW CONTACT FORM SUBMISSION - प्रचार Website

👤 PERSONAL INFORMATION:
• Name: ${name}
• Email: ${email}
• Phone: ${phone}
• WhatsApp: ${whatsapp || 'Not provided'}

🏢 BUSINESS INFORMATION:
• Business Name: ${businessName}
• Role: ${yourRole}
• Industry: ${finalIndustry}
• Target Audience: ${finalTargetAudience}

🎯 SERVICES & MARKETING:
• Services Interested: ${services || 'None selected'}
• Social Platforms: ${socialPlatforms || 'None selected'}
• How they found us: ${howDidYouKnow}

📅 MEETING & REQUIREMENTS:
• Preferred Meeting Time: ${meetingTime || 'Not specified'}
• Problem Statement: "${problemStatement}"

📧 Sent from प्रचार website contact form
🕒 Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `;

    // Email options
    const mailOptions = {
      from: process.env.EmailID,
      to: process.env.EmailID, // Send to the same email
      subject: `🎯 नया संपर्क फॉर्म - ${name} से प्रचार वेबसाइट`,
      text: textContent,
      html: emailContent,
      replyTo: email // Set reply-to as the customer's email
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: info.messageId 
      }, 
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email',
        error: error.message 
      }, 
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'This endpoint only accepts POST requests' }, 
    { status: 405 }
  );
}