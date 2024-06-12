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
                    <h1 className='text-7xl text-white text-center font-bold'>Welcome to <span className="text-orange-600">Study</span>Hub</h1>
                    <p className="text-white text-3xl">where learning together is easier than ever!</p>
                    <p className='text-2xl pt-5 text-white w-1/2 text-center'>Create any school college assignment very easily and quickly and show your talent</p>

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


            <h1 className='text-5xl font-bold text-center my-5'>Feature of StudyHub</h1>


            {/* feature Section  */}
            <div className='grid grid-cols-3 gap-10'>
                {
                    feature.map((webFeature, index) => <FeatureCard
                        key={index}
                        Feature={webFeature}
                    ></FeatureCard>)
                }
            </div>


            {/* faq section  */}

            <h1 className="text-5xl font-bold text-center my-10">Faq Section </h1>

            <div className="grid grid-cols-2 p-10 gap-10 bg-[#070F2B] text-white">
                <div className="space-y-5 grid grid-cols-1">
                    <h1 className="text-7xl font-bold">Most Questions We Answered</h1>
                    <p className="text-2xl">Explore our FAQ page for comprehensive answers to common queries. Find solutions, troubleshoot, and gain insights into our services and offerings. Your questions, answered with clarity and detail.</p>
                </div>

                <div className="grid grid-cols-1">
                    <img className="" src="https://i.postimg.cc/R0rYXGgx/support.jpg" alt="" />
                </div>
            </div>

            <div>
                <h1 className="text-4xl font-bold mt-10">Most Asked Question To Us</h1>
                <div className="grid grid-cols-2 gap-5 mt-5">

                    <div className="grid grid-cols-1 join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                <h1>How can I join you?</h1>
                            </div>
                            <div className="collapse-content">
                                <p>To join us you need to go to the sign up page of our site and fill the form with all the information. And update your account by clicking on sign up button. Only then you can join us.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                <h1>Will I get all the services for free?</h1>
                            </div>
                            <div className="collapse-content">
                                <p>Yes, you will get most of the services for free. However, some services may require you to pay a small fee.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                <h1>What benefits will I get if I use the website?</h1>
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Using our website you can create, solve, save and update your school, college and university assignments. Besides, you will get all the information you need very easily.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                <h1>Will I get all the services for free?</h1>
                            </div>
                            <div className="collapse-content">
                                <p>Yes, you will get most of the services for free. However, some services may require you to pay a small fee.</p>
                            </div>
                        </div>


                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                <h1>What benefits will I get if I use the website?</h1>
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Using our website you can create, solve, save and update your school, college and university assignments. Besides, you will get all the information you need very easily.</p>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 join join-vertical w-full">

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                <h1>What benefits will I get if I use the website?</h1>
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Using our website you can create, solve, save and update your school, college and university assignments. Besides, you will get all the information you need very easily.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                <h1>Will I get all the services for free?</h1>
                            </div>
                            <div className="collapse-content">
                                <p>Yes, you will get most of the services for free. However, some services may require you to pay a small fee.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                <h1>What benefits will I get if I use the website?</h1>
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Using our website you can create, solve, save and update your school, college and university assignments. Besides, you will get all the information you need very easily.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                <h1>Will I get all the services for free?</h1>
                            </div>
                            <div className="collapse-content">
                                <p>Yes, you will get most of the services for free. However, some services may require you to pay a small fee.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                <h1>What benefits will I get if I use the website?</h1>
                            </div>
                            <div className="collapse-content">
                                <p>
                                    Using our website you can create, solve, save and update your school, college and university assignments. Besides, you will get all the information you need very easily.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default HomePage;