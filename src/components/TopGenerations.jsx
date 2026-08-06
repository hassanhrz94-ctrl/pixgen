import { Key } from 'lucide-react';
import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenerations = async() => {
 const res =await fetch('http://localhost:3000/data.json')
 const photos=await res.json()
 const topPhotos=photos.slice(0,8)


    return (
        <div>
            <h1 className='text-sky-400 text-3xl '>Top Photos</h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    topPhotos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopGenerations;