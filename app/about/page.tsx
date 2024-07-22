"use client";

import React from "react";
import Image from "next/image";
import data from "@/assets/data.jpg"; 
import graphic from "@/assets/graphic.jpg";
import analysis from "@/assets/analysis.jpg";
import test from "@/assets/test.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
function AboutPage() {
    return (
        <>
            <body className="bg-white text-gray-900">
                <header className="bg-black text-white py-6">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl font-bold">About Us</h1>
                    </div>
                </header>

                <main className="container mx-auto px-6 py-10">
                    {/* Our Mission */}
                    <section className="mb-12 flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                            <p className="text-lg leading-relaxed">
                                At EduAI, our mission is to revolutionize education through cutting-edge AI technology. We believe in making learning accessible, engaging, and effective for everyone.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <Image
                                alt="Our Mission"
                                src={data}
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                        </div>
                    </section>

                    {/* Who We Are */}
                    <section className="mb-12 flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 px-4 mb-8 order-2 md:order-1">
                            <Image
                                alt="Who We Are"
                                src={graphic}
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8 order-1 md:order-2">
                            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
                            <p className="text-lg leading-relaxed">
                                We are a team of passionate educators, developers, and AI enthusiasts dedicated to creating innovative educational solutions. Our diverse backgrounds and expertise enable us to tackle challenges from multiple angles and deliver a comprehensive learning experience.
                            </p>
                        </div>
                    </section>

                    {/* What We Offer */}
                    <section className="mb-12 flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
                            <p className="text-lg leading-relaxed">
                                AI-Powered Learning: Our platform uses advanced AI algorithms to personalize the learning journey for each student. Interactive Content: Engage with interactive lessons, quizzes, and real-time feedback. Community Support: Connect with fellow learners and educators in our supportive online community.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <Image
                                alt="What We Offer"
                                src={analysis}
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                        </div>
                    </section>
                           {/* Testimonials */}
                    <section className="mb-12 flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
                            <p className="text-lg leading-relaxed">
                                "EduAI has transformed the way I learn. The personalized approach is incredibly effective!" - Student A
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <Image
                                alt="Testimonials"
                                src={test}
                                width={600}
                                height={600}
                                className="rounded-lg"
                            />
                        </div>
                    </section>

                    {/* Call to Action Section */}
                    <section className="mb-12 text-center">
                        <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Ready to revolutionize your learning experience? Join EduAI today and embark on a journey of discovery and growth.
                        </p>
                        <Link href="/signup">
                            <h6 className="bg-black text-white px-4 py-2 rounded-full text-sm inline-block">Get Started</h6>
                        </Link>
                    </section>
                </main>
            </body>
            <footer className="bg-gray-900 text-white py-6">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; 2024 EduAI. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default AboutPage;
