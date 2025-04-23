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

import ias from '@/public/Portfolio/ias.jpg'
import isos from '@/public/Portfolio/isos.jpg'
import belso from '@/public/Portfolio/belso.jpg'
import innovate from '@/public/Portfolio/innovate.jpg'
import qualis from '@/public/Portfolio/qualis.jpg'
import rms from '@/public/Portfolio/rms.jpg'

const PortfolioGallery = () => {

    // Sample images - replace these with your actual images
    const images = [
        {
            id: 1,
            src: ias,
            alt: "ias",
            width: 800,
            height: 600,
            link: `https://www.facebook.com/SpectrumIasStudyCenter/ `
        },
        {
            id: 2,
            src: isos,
            alt: "isos",
            width: 800,
            height: 600,
            link: `https://www.instagram.com/biologybypalak/`
        },
        {
            id: 3,
            src: belso,
            alt: "belso",
            width: 800,
            height: 600,
            link: `https://www.instagram.com/belsoceramicsmohali/`
        },
        {
            id: 4,
            src: innovate,
            alt: "innovate",
            width: 800,
            height: 600,
            link: `https://www.instagram.com/innovate.__design/`
        },
        {
            id: 5,
            src: qualis,
            alt: "qualis",
            width: 800,
            height: 600,
            link: `https://www.instagram.com/qualishomeware/`
        },
        {
            id: 6,
            src: rms,
            alt: "rms",
            width: 800,
            height: 600,
            link: `https://www.instagram.com/rms_chandigarh/`
        },
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    // Handle clicking the image to redirect to the link
    const handleImageClick = (image) => {
        // Open the link in a new tab
        window.open(image.link, '_blank', 'noopener,noreferrer');
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
                            Our Clients
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
                                    className="z-1 object-cover transition-transform duration-300 group-hover:scale-110 group-active:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 group-active:bg-opacity-20 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioGallery;