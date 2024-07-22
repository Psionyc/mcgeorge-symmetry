"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import Partices from "@/components/particles";


const images = ["/images/1.webp", "/images/2.webp", "/images/3.webp"];

function HomePageMobile() {
	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<div className="h-16" />
				<div className="w-[300px] h-[300px] flex items-center justify-center rounded-lg">
					<Carousel
						plugins={[
							Autoplay({
								delay: 4000,
							}),
						]}
						opts={{
							align: "start",
							loop: true,
						}}
					>
						<CarouselContent className=" w-[300px] h-[300px]">
							{images.map((image, index) => {
								return (
									<CarouselItem key={image} className="w-[300px] h-[300px]">
										{" "}
										<Image
											className={cn(
												"object-cover borde-2 border-white overflow-visible rounded-lg px-2",
											)}
											width={300}
											height={300}
											alt={image}
											src={image}
										/>
									</CarouselItem>
								);
							})}
						</CarouselContent>
						{/* <CarouselPrevious /> */}
						{/* <CarouselNext /> */}
					</Carousel>
				</div>

				<div className="flex flex-col items-center justify-center gap-4 px-4">
					<h2 className="text-2xl font-bold text-center text-secondary-foreground my-8">
						Data2Analysis: Next-Gen Education AI
					</h2>
					<p className="text-md text-secondary-foreground leading-relaxed text-center">
						Data2Analysis revolutionizes education with cutting-edge GPT
						technology, providing students with the tools to analyze their
						data and enhance their learning process. Teachers, students, and
						educational institutions benefit from our tailored solutions.
						Experience the future of education with Data2Analysis, ensuring a
						standard and progressive technological future for all students.
					</p>

					<div className="flex flex-row gap-4">
						<Link href="/chat">
							<Button className="py-6">Get Started</Button>
						</Link>
						<Link href="/chat">
							<Button className="py-6" variant={"secondary"}>
								Learn More
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

function HomePageDesktop() {
	return (
		<>
			<Partices />

			<div className="flex flex-row items-center justify-between w-full h-[100dvh] px-28 gap-x-16 z-10">
				<div className="flex flex-col px-4 ">
					<div className="flex flex-col  items-start gap-4">
						<h2 className="text-4xl font-bold  text-secondary-foreground my-8">
							Data2Analysis: Next-Gen Education AI
						</h2>
						<p className="text-lg text-justify  text-secondary-foreground leading-relaxed">
							Data2Analysis revolutionizes education with cutting-edge GPT
							technology, providing students with the tools to analyze their
							data and enhance their learning process. Teachers, students, and
							educational institutions benefit from our tailored solutions.
							Experience the future of education with Data2Analysis, ensuring a
							standard and progressive technological future for all students.
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
function HomePage() {
	return (
		<div>
			<div className="md:hidden">
				<HomePageMobile />
			</div>
			<div className="hidden md:block">
				<HomePageDesktop />
			</div>
		</div>
	);
}


export default HomePage;



