import React from 'react'
import Title from './Title'
import {useSelector} from 'react-redux'
import ListingCard from './ListingCard'

const LatestListings = () => {

    const {listings} = useSelector(state => state.listing)
  return (
    <div className='mt-20 mb-8'>
      <Title title="Latest Listings" description="Browse the most recent social media profiles added to our marketplace." />



      <div className="flex flex-col gap-6 px-6">
        {listings.slice(0, 5).map((listing, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <ListingCard listing={listing}/>
            </div>  
        ))}
      </div>
    </div>
  )
}

export default LatestListings
