import Image from "next/image";
import FoodGallery from "@/components/food-imges";
import CommentSection from "@/components/comments";

export default async function RecipePage({
  searchParams,
}: {
  searchParams: Promise<{
    recipeImg: string;
    recipeTitle: string;
    recipeDescription: string;
  }>;
}) {
  const { recipeDescription, recipeImg, recipeTitle } = await searchParams;
  return (
    <div className="bg-lime-50">
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="bg-lime-50 shadow-2xl">
            <h1 className="text-[28px] font-serif text-black">
              Here is the complete guideline of{" "}
              <b className="text-lime-600">{recipeTitle} </b> by Yasmeen Nazeer
            </h1>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden justify-center items-center flex">
            <Image
              src={recipeImg}
              alt={recipeTitle}
              width={500}
              height={500}
              layout="responsive"
              className=" w-full h-full object-contain overflow-hidden"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl  text-gray-700 font-thin">
              {recipeTitle} Recipe:
            </h3>
          </div>

          {/* Content */}
          <div className="prose prose-lg  max-w-full border border-lime-700   bg-lime-50 px-8 shadow-2xl py-8 text-zinc-700">
            <p>{recipeDescription}</p>
          </div>
        </div>
      </article>
      <CommentSection />
      <FoodGallery />
    </div>
  );
}
