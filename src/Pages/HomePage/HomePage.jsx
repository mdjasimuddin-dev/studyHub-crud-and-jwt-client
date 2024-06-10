import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard/FeatureCard";



const HomePage = () => {

    const [feature, setFeature] = useState([])

    useEffect(() => {
        fetch("Feature.json")
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])

    return (
        <div>
            {/* Banner Section  */}
            <div className='flex relative border-2'>
                <img className='w-full h-[600px] brightness-50' src="https://i.postimg.cc/vH2jg0tL/pexels-pixabay-207636.jpg" alt="" />

                <div className='absolute space-y-4 flex flex-col justify-center items-center border w-full h-full'>
                    <h1 className='text-7xl text-white text-center font-bold'>Everything is easy now</h1>
                    <p className='text-2xl text-white w-1/3'>Create any school college assignment very easily and quickly and show your talent</p>

                    <div className='flex justify-center gap-5'>
                        <div className=' bg-orange-400 text-white p-4'>
                            <h1>School Assignment</h1>
                            <p>Create, Update</p>
                        </div>

                        <div className=' bg-orange-500 text-white p-4'>
                            <h1>School Assignment</h1>
                            <p>Create, Update</p>
                        </div>

                        <div className=' bg-orange-600 text-white p-4'>
                            <h1>School Assignment</h1>
                            <p>Create, Update</p>
                        </div>

                    </div>
                </div>
            </div>


            <h1 className='text-5xl font-bold text-center my-5'>Fetature of myTask</h1>


            {/* feature Section  */}
            <div className='grid grid-cols-3 gap-10'>
                {
                    feature.map((webFeature, index) => <FeatureCard
                        key={index}
                        Feature = {webFeature}
                    ></FeatureCard>)
                }
            </div>




        </div>
    );
};

export default HomePage;