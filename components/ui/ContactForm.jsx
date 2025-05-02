import React, { useState } from 'react'
import { motion } from 'framer-motion';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus(null);

        try {
            const emailData = {
                to: 'etherhunt2@gmail.com',
                subject: `हे प्रचार - ${formData.name} से नया संदेश`,
                text: `
                    नाम: ${formData.name}
                    ईमेल: ${formData.email}
                    फोन: ${formData.phone}
                    संदेश: ${formData.message}
                `
            };

            console.log('Sending form data:', emailData);

            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailData)
            });

            const result = await response.json();
            console.log('API response:', result);

            if (response.ok) {
                setFormStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                console.error('Error response:', result);
                setFormStatus('error');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setFormStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

            {formStatus === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/50 text-green-200 p-3 rounded-lg mb-6"
                >
                    Form Submitted Successfully
                </motion.div>
            )}

            {formStatus === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500/50 text-red-200 p-3 rounded-lg mb-6"
                >
                    Error Submitting Form!
                </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900/50 text-white border border-white/10 rounded-lg p-3 focus:border-mustard focus:ring-1 focus:ring-mustard outline-none transition"
                        placeholder="Your Name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900/50 text-white border border-white/10 rounded-lg p-3 focus:border-mustard focus:ring-1 focus:ring-mustard outline-none transition"
                        placeholder="Your Email"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-white/80 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-900/50 text-white border border-white/10 rounded-lg p-3 focus:border-mustard focus:ring-1 focus:ring-mustard outline-none transition"
                        placeholder="Your Contact Number"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full bg-gray-900/50 text-white border border-white/10 rounded-lg p-3 focus:border-mustard focus:ring-1 focus:ring-mustard outline-none transition"
                        placeholder="Description"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-yellow-400/20 text-orange-400 cursor-pointer font-medium rounded-lg transition-all transform hover:scale-105 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {isSubmitting ? 'Wait...' : 'Submit'}
                </button>
            </form>
        </div>
    )
}

export default ContactForm