import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export default async function RecipeSection() {
  interface RecipeCard {
    recipeTitle: string;
    recipeDescription: string;
    recipeImg: string;
  }

  interface RecipeSectionResponse {
    cardSectionHeading: string;
    cards: RecipeCard[];
  }

  const res: RecipeSectionResponse = await client.fetch(
    "*[_type=='landingPage'][0].pageSections[1]{'cardSectionHeading':cardSectionHeading, 'cards':cards[]{'recipeTitle':recipeTitle, 'recipeDescription':recipeDescription, 'recipeImg':recipeImg.asset->url }}");

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-lime-500 mb-4 font-mono">
          Recipes tips
        </h2>
        <p className="text-lg text-gray-800 font-semibold">
        Cook a dish like a professional and enrich the Taste of your Food.
        </p>
      </div>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {res.cards.map((item: RecipeCard, index: number) => (
          <div
            key={index}
            className="bg-lime-200 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative h-48 sm:h-64">
              <Image
                src={item.recipeImg}
                alt={item.recipeTitle}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.recipeTitle}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2 font-serif">
                {item.recipeDescription}
              </p>
              <Link
                href={`/recipes/DynamicPage?recipeImg=${item.recipeImg}&recipeTitle=${item.recipeTitle}&recipeDescription=${item.recipeDescription}`}
              >
                <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded hover:bg-lime-600 transition-colors duration-300">
                  Read More
                </button>{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
