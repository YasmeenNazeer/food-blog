
import { client } from '@/sanity/lib/client'
import Image from 'next/image'

export default async function AboutPage() {


  interface AboutPageData {
    aboutImg: string;
    heading: string;
  }

  const res: AboutPageData = await client.fetch("*[_type== 'aboutPage'][0].pageSections[0]{'aboutImg':aboutImg.asset->url, 'heading':heading } ")
  const { aboutImg, heading } =   res


  
    

  return (
    <main className="min-h-screen bg-lime-50 px-4 py-8 md:px-8 lg:px-16">
      {/* Header & Hero Section */}
      <div className="mb-5">
        <div className="mb-4">
          <h1 className="text-4xl mt-6  font-serif text-center font-bold  tracking-wider text-lime-500">
            ABOUT US
            </h1>
        </div>
       
          
        <div className="  flex justify-center items-center py-10">
  <h2 className="text-2xl font-light  text-center text-gray-600 md:text-3xl lg:text-[2.5rem]">
    {heading}
  </h2>
</div>
  

 

      </div>

      {/* Main Image with Stats Overlay */}
      <div className="relative mb-36">
        <div className="relative h-[400px] w-full overflow-hidden rounded-2xl md:h-[500px]">
          <Image
            src={aboutImg}
            alt="Team of food enthusiasts"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Stats Section - Overlaid on image */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4 md:px-8">
          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4 rounded-xl bg-lime-200  p-6 shadow-xl md:gap-8 md:p-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 md:text-4xl">12K+</div>
              <div className="mt-1 text-xs text-gray-600 md:text-sm">Recipes Published</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 md:text-4xl">18K+</div>
              <div className="mt-1 text-xs text-gray-600 md:text-sm">Monthly Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 md:text-4xl">30K+</div>
              <div className="mt-1 text-xs text-gray-600 md:text-sm">Active Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">OUR MISSION</h3>
            <h4 className="mb-4 text-2xl font-light text-gray-800">
              Creating valuable recipes for food lovers all around the world
            </h4>
            <p className="text-gray-600">
              Our mission is to preserve and share authentic desi recipes, making traditional 
              South Asian cooking accessible to everyone. We believe in keeping our culinary 
              heritage alive through detailed recipes and cooking guides.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">OUR VISION</h3>
            <h4 className="mb-4 text-2xl font-light text-gray-800">
              A platform that empowers individuals to master desi cooking
            </h4>
            <p className="text-gray-600">
              We envision a global community where passionate food lovers can learn, 
              share, and celebrate the rich traditions of South Asian cuisine. Our platform 
              aims to make cooking traditional dishes approachable and enjoyable.
            </p>
          </div>
        </div>
      </div>
    
    </main>
  )
}



