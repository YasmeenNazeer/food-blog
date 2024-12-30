'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@/components/ui/dialog'
import { DialogContent } from '@/components/ui/dialog'
import { Plus } from 'lucide-react'

const foodItems = [
  {
    id: 1,
    title: 'Fish Platter',
    image: '/imgg1.jpg',
    category: 'Seafood'
  },
  {
    id: 2,
    title: 'Channa Dal',
    image: '/img2.jpeg',
    category: 'Lentils'
  },
  {
    id: 3,
    title: 'Shahi Tukra',
    image: '/img8.jpg',
    category: 'Dessert'
  },
  {
    id: 4,
    title: 'Dall Chawal Platter',
    image: '/img3.avif',
    category: 'Healthy'
  },
  {
    id: 5,
    title: 'Gajar ka Halwa',
    image: '/img5.jpg',
    category: 'Dessert'
  },
  {
    id: 6,
    title: 'Beef Pulao',
    image: '/img6.jpg',
    category: 'Rice'
  },
  {
    id: 7,
    title: 'Qeema Alo',
    image: '/img7.jpg',
    category: 'Meat'
  },
  {
    id: 8,
    title: 'Mix Haleem',
    image: '/img4.jpg',
    category: 'SouthAsian Cusine'
  },
]

export default function FoodGallery() {
  const [selectedItem, setSelectedItem] = useState<typeof foodItems[0] | null>(null)

  return (
    <>
    <h1 className='text-center font-semibold  mt-10 mb-8 text-[24px] text-lime-500'>Can write more blogs on the following recipes on your demand</h1>
    <div className="container mx-auto px-2 ">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 mb-16 ">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="group relative cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative w-full h-[150px] sm:h-[180px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transform transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <Plus className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent translate-y group-hover:translate-y-0 transition-transform duration-200">
              <h3 className="text-white text-sm font-medium truncate">{item.title}</h3>
              <p className="text-white/80 text-xs truncate">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="sm:max-w-[425px]">
          {selectedItem && (
            <div className="space-y-3">
              <div className="relative aspect-square">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{selectedItem.title}</h2>
                <p className="text-muted-foreground text-sm">{selectedItem.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
    </>
  )
}

