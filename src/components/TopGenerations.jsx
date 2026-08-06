import { Key } from 'lucide-react';
import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenerations = async() => {
 const res =await fetch('http://localhost:3000/data.json')
 const photos=await res.json()
 const topPhotos=photos.slice(0,8)


    return (
    
    
    );
};

export default TopGenerations;