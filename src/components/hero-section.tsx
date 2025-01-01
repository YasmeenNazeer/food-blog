import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

export default async function Hero() {

  const res = await client.fetch("*[_type =='landingPage'][0].pageSections[0]{'heroImg':heroImg.asset->url,  'heading':heading,  'description':description}")

   const {  heroImg, heading, description } = await res;
  return (
    <section className="relative bg-gray-50 py-12 px-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImg}
          alt="Featured Dish"
          fill
          className="z-0 object-cover justify-center"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay for readability */}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            {heading}
          </h2>
          <p className="text-white font-thin mb-6">
            {description}
          </p>
          <Link
            href="/blogs"
            className="bg-lime-400 text-black font-bold px-5 py-3 rounded shadow hover:bg-lime-500 transition text-[18px] "
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
