"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogHeader
} from "@/components/ui/dialog";
import { ThreeDText } from "../ui/3d-text";

import i from '@/public/Images/Testimonial/1.jpeg'
import m from '@/public/Images/Testimonial/2.jpeg'
import g from '@/public/Images/Testimonial/3.jpeg'

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Sample images - replace these with your actual images
    const images = [
        {
            id: 1,
            src: i,
            alt: "Testimony Image 1",
            width: 800,
            height: 600,
        },
        {
            id: 2,
            src: m,
            alt: "Testimony Image 2",
            width: 800,
            height: 600,
        },
        {
            id: 3,
            src: g,
            alt: "Testimony Image 3",
            width: 800,
            height: 600,
        },
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

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
                        >
                            Our Testimonials
                        </ThreeDText>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                                onClick={() => handleImageClick(image)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="z-0 object-cover transition-transform duration-300 group-hover:scale-110 group-active:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 group-active:bg-opacity-20 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <Dialog open={!!selectedImage} onOpenChange={handleCloseModal}>
                    <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                        <DialogHeader className="sr-only">
                            <DialogTitle>
                                {selectedImage?.alt || "Image Preview"}
                            </DialogTitle>
                        </DialogHeader>
                        {selectedImage && (
                            <div className="relative w-full aspect-auto z-10">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    width={selectedImage.width}
                                    height={selectedImage.height}
                                    className="w-full h-auto"
                                />
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};

export default ImageGallery;