import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard/FeatureCard";
import Footer from "../../Component/Footer/Footer";



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
            <div className='m-2 flex relative border-2'>
                <img className='w-full h-[600px] brightness-50' src="https://i.postimg.cc/vH2jg0tL/pexels-pixabay-207636.jpg" alt="" />

                <div className='absolute space-y-4 flex flex-col justify-center items-center border w-full h-full'>
                    <h1 className='text-6xl lg:text-7xl text-white text-center font-bold'>Welcome to <span className="text-orange-600">Study</span>Hub</h1>
                    <p className="text-white text-center p-2 text-xl lg:text-3xl">where learning together is easier than ever!</p>
                    <p className='lg:text-2xl lg:pt-5 text-white lg:w-1/2 text-center'>Create any school college assignment very easily and quickly and show your talent</p>

                    <div className='lg:flex justify-center gap-5 hidden'>
                        <div className=' bg-orange-400 text-white p-4'>
                            <h1>Assignment</h1>
                            <p>Create, update</p>
                            <p>Delete, Save</p>
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


            <div className="my-6 lg:my-16">
                <h1 className="text-5xl font-bold text-center ">Feature Section </h1>
                <p className="text-2xl font-bold text-center mt-4 text-orange-600">All our features at a glance</p>
            </div>


            {/* feature Section  */}
            <div className='grid grid-cols-2 lg:grid-cols-3 m-2 gap-3 lg:gap-10'>
                {
                    feature.map((webFeature, index) => <FeatureCard
                        key={index}
                        Feature={webFeature}
                    ></FeatureCard>)
                }
            </div>


            {/* faq section  */}

            <div className="my-10 lg:my-16">
                <h1 className="text-5xl font-bold text-center ">Faq Section </h1>
                <p className="text-2xl px-2 font-bold text-center mt-4 text-orange-600">All the questions and answers you want</p>
            </div>

            <div className="grid lg:grid-cols-2 p-4 lg:p-10 gap-10 bg-[#070F2B] text-white">
                <div className="space-y-5 grid grid-cols-1">
                    <h1 className="text-5xl text-center lg:text-left lg:text-7xl font-bold">Most Questions We Answered</h1>
                    <p className="text-xl text-center lg:text-left lg:text-2xl">Explore our FAQ page for comprehensive answers to common queries. Find solutions, troubleshoot, and gain insights into our services and offerings. Your questions, answered with clarity and detail.</p>
                </div>

                <div className="grid grid-cols-1">
                    <img className="" src="https://i.postimg.cc/R0rYXGgx/support.jpg" alt="" />
                </div>
            </div>

            <div>
                <h1 className="text-2xl text-center lg:text-left lg:text-4xl font-bold mt-10">Most Asked Question To Us</h1>
                <div className="grid lg:grid-cols-2 gap-5 mt-5">
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


            {/* Footer Sections  */}
            <div className="my-16">
                <Footer />
            </div>
        </div>


    );
};

export default HomePage;