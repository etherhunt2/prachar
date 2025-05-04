"use client";

import { motion } from 'framer-motion';
import { ThreeDText } from "../ui/3d-text";

const Testimonials = () => {
    // Testimonial content
    const testimonials = [
        {
            id: 1,
            text: "Thanks to Prachar for putting beautiful efforts for us. I am always happy to have Prachar as my team member.",
            author: "Malkit",
            company: "Innovative Design"
        },
        {
            id: 2,
            text: "Prachar's team is superfast and hardworking, Very few people work like this. Thankyou Prachar.",
            author: "Dinesh",
            company: "Qualis"
        },
        {
            id: 3,
            text: "Really loved the Reels edited by Prachar.",
            author: "Vanshika",
            company: "Freshkart"
        },
    ];

    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            <div className="flex mx-auto text-center">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-6"
                    >
                        <ThreeDText
                            elementType="h2"
                            className="text-2xl sm:text-3xl md:text-7xl font-extrabold hero-heading"
                            gradient={false}
                        >
                            Our Testimonials
                        </ThreeDText>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-gray-900 rounded-lg shadow-md p-6 text-center"
                            >
                                <p className="text-white mb-4">{testimonial.text}</p>
                                <div className="text-yellow-400 font-medium">
                                    By: {testimonial.author}, {testimonial.company} (Company)
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;