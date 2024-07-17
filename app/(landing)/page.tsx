
"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import React from "react";

function HomePage() {



    return (<>
        <div className="flex flex-col md:flex-row md:justify-between h-full w-full">
            <div className="flex flex-col px-4  md:pr-2">


                <div className="flex flex-col md:pr-32 md:pl-12 items-start gap-4">
                    <div className="mt-48"></div>
                    <h2 className="text-4xl font-bold  text-white my-8">
                        Symettry: Next-Gen Fashion AI
                    </h2>
                    <p className="text-lg text-justify text-white leading-relaxed">
                        Symettry revolutionizes fashion with cutting-edge AI, analyzing trends, fabrics, and styles to keep you ahead. Designers, retailers, and fashion enthusiasts benefit from our tailored solutions. Experience the future of fashion with Symettry.
                    </p>

                    <div className="flex flex-row gap-4">
                        <Link href="/chat"><Button>Get Started</Button></Link>
                        <Link href="/chat"><Button variant={"secondary"} >Learn More</Button></Link>
                    </div>

                </div>
            </div>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}>
                <CarouselContent className="w-[400px]">
                    <CarouselItem>  <img className={cn("rounded-lg", "h-[100dvh] object-cover")} width={500} alt="Landing" src={"https://unsplash.com/photos/tiWcNvpQF4E/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHx8fDE3MjEwOTM2MjJ8MA&force=true&w=2400"} /></CarouselItem>
                    <CarouselItem>  <img className={cn("rounded-lg", "h-[100dvh] object-cover")} width={500} alt="Landing" src={"https://unsplash.com/photos/6Xai7XxOgBc/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzIxMTU4NTE1fA&force=true"} /></CarouselItem>
                    <CarouselItem>  <img className={cn("rounded-lg", "h-[100dvh] object-cover")} width={500} alt="Landing" src={"https://unsplash.com/photos/ttdio_nOPjQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NjN8fGZhc2hpb258ZW58MHx8fHwxNzIxMTYwNzM3fDA&force=true"} /></CarouselItem>

                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
            </Carousel>


        </div>

    </>);
}

export default HomePage;