
import { getAllRecipes, getRecipe } from "@/constant/cards"
import { notFound } from "next/navigation"
import Image from "next/image"
import FoodGallery from "@/components/food-imges"
import CommentSection from "@/components/comments"



export async function generateStaticParams()  : Promise<{ slug: string }[]> {
  const recipes = await getAllRecipes()
  return recipes.map((recipe:any) => ({
    slug: recipe.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }){
     
  const recipe = await getRecipe(params.slug)
  
  if (!recipe) {
    return {
      title: 'Recipe Not Found',
      description: 'redcipe not found'}
  }
  
  return {
    title: recipe.title,
    description: recipe.description,
  }
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {  
  const { slug } = await params;
  const recipe = await getRecipe(slug)

  if (!recipe) {
    notFound()
  }

  return (
    <div className="bg-lime-50">
    <article className="max-w-3xl mx-auto px-4 py-12 ">
      <div className="space-y-8">
        {/* Header */}
        <div>
            <h1 className="text-[28px] font-serif text-lime-500">Here is the complete detailde recipe by Yasmeen Nazeer</h1>
        </div>
        <div className="space-y-4">
        <h3 className="text-2xl  text-gray-700 font-thin">{recipe.title}</h3>
        </div>

        {/* Image */}
        <div className="relative h-96 rounded-lg overflow-hidden justify-center items-center flex">
          <Image
            src={recipe.image}
            alt={recipe.title} 
            width={500} height={500}
            layout="responsive"
            className=" w-full h-full object-contain overflow-hidden"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-full bg-gray-50 px-8 shadow-2xl py-8 text-zinc-700">
          <p>{recipe.content}</p>
        </div>
      </div>
    </article>
    <CommentSection/>
    <FoodGallery/>
    </div>
  )
}


