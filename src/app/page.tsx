

import FeaturesSection from "@/components/features";
import FoodGallery from "@/components/food-imges";
import Hero from "@/components/hero-section";
import { MoveRight } from "lucide-react";
import Link from "next/link";



export default function Home() {
  return (
    <>
     
<div className="bg-lime-50">
  <Hero/>
   <FeaturesSection/>
   <FoodGallery/>
   <div className="flex mt-8 mb-8 underline justify-center sm:ml-28 md:justify-start">
  <Link 
    href="/blogs"  className="text-lime-600 text-[22px] text-center md:text-left"> View detailed recipes here 
    <MoveRight className="inline-flex ml-1" size={33} />
  </Link>
</div>

     </div> 
    </>
  )
}

