
import RecipeSection from "@/components/cards";
import FeaturesSection from "@/components/features";
import FoodGallery from "@/components/food-imges";
import Hero from "@/components/hero-section";



export default function Home() {
  return (
    <>
     
<div className="bg-lime-50">
     <Hero/>
   <  FeaturesSection/>
   <RecipeSection/>
   <FoodGallery/>
     </div> 
    </>
  )
}

