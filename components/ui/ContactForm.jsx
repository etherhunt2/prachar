import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    industry: '',
    customIndustry: '',
    services: [],
    targetAudience: '',
    customTargetAudience: '',
    howDidYouKnow: '',
    businessName: '',
    yourRole: '',
    socialPlatforms: [],
    meetingTime: '',
    problemStatement: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const industryOptions = [
    'E-commerce & Retail',
    'Healthcare & Wellness',
    'Education & EdTech',
    'Real Estate & Construction',
    'Hospitality & Travel',
    'Food & Beverage',
    'Fashion & Lifestyle',
    'Automobile',
    'Finance & Fintech',
    'Technology & IT Services',
    'Startups & Entrepreneurship',
    'Gaming & Entertainment',
    'Beauty, Salon & Personal Care',
    'Sports & Fitness',
    'Events & Wedding Industry',
    'Legal & Consulting Services',
    'Logistics & Transport',
    'NGOs & Social Causes',
    'Manufacturing & Industrial',
    'Pharma & Biotech',
    'Energy & Environment',
    'Recruitment & HR/Staffing',
    'Other'
  ];

  const serviceOptions = [
  'Search Engine Optimization (SEO)',
  'Search Engine Marketing (SEM/PPC Ads)',
  'Social Media Marketing (SMM)',
  'Social Media Advertising',
  'Content Marketing',
  'Email Marketing',
  'Influencer Marketing',
  'Video Marketing',
  'Mobile Marketing',
  'Online Reputation Management (ORM)',
  'Web Development & UX Optimization',
  'Google my business',
  'LinkedIn Marketing',
  'Strategic Marketing'
];

  const targetAudienceOptions = [
    'B2B',
    'B2C',
    'D2C',
    'Other'
  ];

  const howDidYouKnowOptions = [
    'LinkedIn',
    'Facebook',
    'Instagram',
    'Youtube',
    'Twitter',
    'TikTok',
    'Pinterest',
    'Google Search',
    'Friend/Colleague Referral',
    'Email',
    'Blog/Website',
    'Online Advertisement',
    'Other'
  ];

  const socialPlatformOptions = [
    'Facebook',
    'Instagram',
    'LinkedIn',
    'Twitter',
    'YouTube',
    'TikTok',
    'Pinterest',
    'Snapchat',
    'WhatsApp',
    'Telegram',
    'Reddit',
    'Discord'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e, fieldName) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const currentArray = prev[fieldName] || [];
      if (checked) {
        return {
          ...prev,
          [fieldName]: [...currentArray, value]
        };
      } else {
        return {
          ...prev,
          [fieldName]: currentArray.filter(item => item !== value)
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    // Console log the form data as requested
    console.log('Form Data:', formData);

    try {
      const response = await axios.post('https://prachar-contact.vercel.app/api/contact', {
        ...formData,
        services: formData.services.join(', '),
        socialPlatforms: formData.socialPlatforms.join(', ')
      });

      if (response.status === 200) {
        setFormStatus('success');
        setFormData({
          name: '',
          phone: '',
          whatsapp: '',
          email: '',
          industry: '',
          customIndustry: '',
          services: [],
          targetAudience: '',
          customTargetAudience: '',
          howDidYouKnow: '',
          businessName: '',
          yourRole: '',
          socialPlatforms: [],
          meetingTime: '',
          problemStatement: ''
        });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10">
      <motion.form
        variants={formVariants}
        initial="hidden"
        animate="visible"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <motion.h2
          variants={fieldVariants}
          className="text-3xl font-bold text-white text-center mb-8"
        >
          Get In Touch
        </motion.h2>

        {/* Row 1 - Name and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={fieldVariants}>
            <label className="block text-white text-sm font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your full name"
            />
          </motion.div>

          <motion.div variants={fieldVariants}>
            <label className="block text-white text-sm font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your phone number"
            />
          </motion.div>
        </div>

        {/* Row 2 - WhatsApp and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={fieldVariants}>
            <label className="block text-white text-sm font-medium mb-2">
              WhatsApp Number
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your WhatsApp number"
            />
          </motion.div>

          <motion.div variants={fieldVariants}>
            <label className="block text-white text-sm font-medium mb-2">
              Email ID *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your email address"
            />
          </motion.div>
        </div>

        {/* Row 3 - Industry */}
        <motion.div variants={fieldVariants}>
          <label className="block text-white text-sm font-medium mb-2">
            Your Industry *
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          >
            <option value="" className="bg-gray-800">Select your industry</option>
            {industryOptions.map((option, index) => (
              <option key={index} value={option} className="bg-gray-800">
                {option}
              </option>
            ))}
          </select>
          {formData.industry === 'Other' && (
            <motion.input
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              type="text"
              name="customIndustry"
              value={formData.customIndustry}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 mt-3"
              placeholder="Please specify your industry"
            />
          )}
        </motion.div>

        {/* Row 4 - Services */}
        <motion.div variants={fieldVariants}>
          <label className="block text-white text-sm font-medium mb-3">
            Services Interested in? (Select all that apply)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {serviceOptions.map((service, index) => (
              <motion.label
                key={index}
                className="flex items-center space-x-3 cursor-pointer p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="checkbox"
                  value={service}
                  checked={formData.services.includes(service)}
                  onChange={(e) => handleCheckboxChange(e, 'services')}
                  className="w-4 h-4 text-blue-600 bg-white/10 border-white/30 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-white text-sm">{service}</span>
              </motion.label>
            ))}
          </div>
        </motion.div>

        {/* Row 5 - Target Audience and How did you know */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={fieldVariants}>
            <label className="block text-white text-sm font-medium mb-2">
              Target Audience *
            </label>
            <select
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            >
              <option value="" className="bg-gray-800">Select target audience</option>
              {targetAudienceOptions.map((option, index) => (
                <option key={index} value={option} className="bg-gray-800">
                  {option}
                </option>
              ))}
            </select>
            {formData.targetAudience === 'Other' && (
              <motion.input
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                type="text"
                name="customTargetAudience"
                value={formData.customTargetAudience}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 mt-3"
                placeholder="Please specify your target audience"
              />
            )}
          </motion.div>

          <motion.div variants={fieldVariants}>
            <label className="block text-white text-sm font-medium mb-2">
              How do you know about us? *
            </label>
            <select
              name="howDidYouKnow"
              value={formData.howDidYouKnow}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            >
              <option value="" className="bg-gray-800">Select an option</option>
              {howDidYouKnowOptions.map((option, index) => (
                <option key={index} value={option} className="bg-gray-800">
                  {option}
                </option>
              ))}
            </select>
            {formData.howDidYouKnow === 'Other' && (
              <motion.input
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                type="text"
                name="customHowDidYouKnow"
                value={formData.customHowDidYouKnow}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 mt-3"
                placeholder="Please specify How Did You Know Us"
              />
            )}
          </motion.div>
        </div>

        {/* Row 6 - Business Name and Role */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={fieldVariants}>
            <label className="block text-white text-sm font-medium mb-2">
              Business Name *
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your business name"
            />
          </motion.div>

          <motion.div variants={fieldVariants}>
            <label className="block text-white text-sm font-medium mb-2">
              Your Role in the Business *
            </label>
            <input
              type="text"
              name="yourRole"
              value={formData.yourRole}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="e.g., CEO, Marketing Manager"
            />
          </motion.div>
        </div>

        {/* Row 7 - Social Platforms */}
        <motion.div variants={fieldVariants}>
          <label className="block text-white text-sm font-medium mb-3">
            Which social media platforms are you active on? (Select all that apply)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socialPlatformOptions.map((platform, index) => (
              <motion.label
                key={index}
                className="flex items-center space-x-3 cursor-pointer p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input
                  type="checkbox"
                  value={platform}
                  checked={formData.socialPlatforms.includes(platform)}
                  onChange={(e) => handleCheckboxChange(e, 'socialPlatforms')}
                  className="w-4 h-4 text-blue-600 bg-white/10 border-white/30 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-white text-sm">{platform}</span>
              </motion.label>
            ))}
          </div>
        </motion.div>

        {/* Row 8 - Meeting Time */}
        <motion.div variants={fieldVariants}>
          <label className="block text-white text-sm font-medium mb-2">
            When can we schedule a meeting?
          </label>
          <input
            type="text"
            name="meetingTime"
            value={formData.meetingTime}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="e.g., Next week afternoons, Weekdays after 5 PM"
          />
        </motion.div>

        {/* Row 9 - Problem Statement */}
        <motion.div variants={fieldVariants}>
          <label className="block text-white text-sm font-medium mb-2">
            Your main problem statement in one line *
          </label>
          <textarea
            name="problemStatement"
            value={formData.problemStatement}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
            placeholder="Describe your main challenge or goal in one line..."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          variants={fieldVariants}
          className="text-center"
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 min-w-[200px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </motion.div>

        {/* Status Messages */}
        {formStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-center"
          >
            <p className="text-green-400 font-medium">
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </p>
          </motion.div>
        )}

        {formStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-center"
          >
            <p className="text-red-400 font-medium">
              Sorry, there was an error sending your message. Please try again.
            </p>
          </motion.div>
        )}
      </motion.form>
    </div>
  );
};

export default ContactForm;
