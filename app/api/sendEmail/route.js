import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { to, subject, text } = await request.json();

        // नोडमेलर ट्रांसपोर्टर कॉन्फ़िगर करें
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // ईमेल ऑप्शन कॉन्फ़िगर करें
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: to,
            subject: subject,
            text: text,
        };

        console.log('Sending email with config:', {
            user: process.env.EMAIL_USER,
            to: to,
            subject: subject
        });

        // ईमेल भेजें
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'ईमेल सफलतापूर्वक भेजा गया' });
    } catch (error) {
        console.error('ईमेल भेजने में त्रुटि:', error);
        return NextResponse.json(
            { success: false, message: 'ईमेल भेजने में त्रुटि हुई', error: error.message },
            { status: 500 }
        );
    }
} 