import { BadgeCheck, Currency, LineChart, User } from 'lucide-react'
import React from 'react'
import { platformIcons } from '../assets/assets';

const ListingCard = ({listing}) => {

      const currency = import.meta.env.VITE_CURRENCY || '₹';

  return (
    <div className='relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition'>
      {/* ---------FEATURED BANNER---------- */}
      {
        listing.isFeatured && (
            <>
            <p className='py-1'></p>
            <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center text-xs font-semibold py-1 tracking-wide uppercase">Featured</div>
            </>
        )
      }

      <div className="p-5 pt-8">
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-3">
            {platformIcons[listing.platform]}

            <div className="flex flex-col">
                <h2>{listing.title}</h2>
                <p>@{listing.username} - <span className=' capitalize'>{listing.platform}</span></p>
            </div>

            {listing.verified && <BadgeCheck className='ml-auto text-green-500 w-5 h-5' />}
        </div>

       {/* ------------STATS------------ */}
       <div className="flex flex-wrap justify-between max-w-lg items-center gap-3 my-5">

        <div className="flex items-center text-sm text-gray-600">
            <User className='size-4 mr-1 text-gray-400' />
            <span className='text-lg font-medium text-slate-800 mr-1.5'>
            {listing.followers_count.toLocaleString()}</span>Followers
        </div>

        {
            listing.engagement_rate && (
                <div className="flex items-center text-sm text-gray-600">
                    <LineChart className='size-4 mr-1 text-gray-400' />
                    <span className='text-lg font-medium text-slate-800 mr-1.5'>{listing.engagement_rate}</span> % engagement
                </div>
            )
        }
       </div>

      </div>
    </div>
  )
}

export default ListingCard
