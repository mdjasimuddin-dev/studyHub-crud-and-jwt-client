import React from 'react';

const FeatureCard = ({Feature}) => {
    const {title, imageURL, description} = Feature
    return (
        <div className='border-2 bg-base-200 p-4'>
            <h1 className='text-5xl font-bold'>{title}</h1>
        </div>
    );
};

export default FeatureCard;