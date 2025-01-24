

const FeatureCard = ({Feature}) => {
    const {title, imageURL} = Feature
    return (
        <div className='border-2 bg-base-200 p-1 md:p-4'>
            <img className='rounded-xl lg:h-48 w-full' src={imageURL} alt="" />
            <h1 className='text-xl md:text-2xl font-bold my-4'>{title}</h1>
        </div>
    );
};

export default FeatureCard;