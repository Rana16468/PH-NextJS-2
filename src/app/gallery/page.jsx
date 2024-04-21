import Image from 'next/image';
import React from 'react';
import nextImage from '../../assets/myimage.jpg'
const GalleryPage = () => {
    return (
        <div>
            <h1 className='text-4xl'>Regyller Image</h1>
             <img className='mx-auto w-full' src="https://nextjs.org/api/docs-og?title=Optimizing:%20Images" alt="" />
             <h1 className='text-4xl'> Image Componrnts</h1>
        <Image className='mx-auto w-full'  width={500}  height={500} src="https://nextjs.org/api/docs-og?title=Optimizing:%20Images" alt='next image'>

        </Image>

        <h1 className='text-4xl'>Local  Image Componrnts</h1>
        <Image className='mx-auto w-full'  width={500}  height={500} src={nextImage} alt='next image'>

        </Image>
        </div>
    );
};

export default GalleryPage;