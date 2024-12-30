

import Image from 'next/image';

function  FeaturesSection () {
  return (
    <div className="bg-lime-300 py-8 shadow-md">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3  text-balance items-center  justify-evenly">
     
          <div  className="flex flex-col items-center gap-2 ">
        
         <Image src={"/quality.png"} alt="food" width={150} height={150} className='overflow-hidden object-cover'></Image>
            <h3 className= " text-[24px] text-gray-800">Food quality</h3>
          </div>

          <div  className="flex flex-col items-center gap-2">
        
        <Image src={"/exp.png"} alt="food" width={70} height={70} className='overflow-hidden object-cover'></Image>
           <h3 className="text-[24px]  text-gray-800">Best Explanation</h3>
         </div>

         <div  className="flex flex-col items-center gap-2">
         <Image src={"/piza.png"} alt="food" width={70} height={70} className='overflow-hidden object-cover'></Image>
           <h3 className="text-[24px]  text-gray-800">Amazing Recepies</h3>
         </div>

      </div>
    </div>
  );
};

export default FeaturesSection;