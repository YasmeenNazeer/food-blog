import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 py-12 px-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.avif"
          alt="Featured Dish"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Overlay for readability */}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Delicious Recipes for Every Taste
          </h2>
          <p className="text-gray-200 mb-6">
            Explore a variety of mouthwatering recipes from around the world. Whether you&aposre looking for quick meals or gourmet dishes, we have something for everyone.
          </p>
          <Link
            href="#cards"
            className="bg-lime-400 text-white px-6 py-3 rounded shadow hover:bg-lime-500 transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
