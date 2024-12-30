import { getAllRecipes} from "@/constant/cards";
import Image from "next/image";
import Link from "next/link";

export default async function RecipeSection() {

    const recipes = await getAllRecipes()
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-lime-400 mb-4 font-sans">
          Recipes tips
        </h2>
        <p className="text-lg text-gray-800 font-semibold">
          Cook a dish like a professional and enrich the Taste of your food.
        </p>
      </div>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
                  >
            {/* Image */}
            <div className="relative h-48 sm:h-64">
              <Image
                src={recipe.image}
                alt={recipe.title}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                  />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {recipe.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2 font-serif">
                {recipe.description}
              </p>
              <Link href={`/recipes/${recipe.slug}`}>
              <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded hover:bg-lime-200 transition-colors duration-300">
                Read More    
              </button> </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

















