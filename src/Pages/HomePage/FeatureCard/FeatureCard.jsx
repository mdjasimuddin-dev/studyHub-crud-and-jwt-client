import React from 'react';

const FeatureCard = ({Feature}) => {
    const {title, imageURL, description} = Feature
    return (
        <div className='border-2 bg-base-200 p-4'>
            <img className='rounded-xl h-48 w-full' src={imageURL} alt="" />
            <h1 className='text-2xl font-bold my-4'>{title}</h1>
        </div>
    );
};

export default FeatureCard;