import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotos =async () => {

    const res =await fetch('http://localhost:3000/data.json')
    const AllPhotos= await res.json()
    return (
        <div>
            <div className='grid grid-cols-3 gap-10 my-6'>
                {
                    AllPhotos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotos;