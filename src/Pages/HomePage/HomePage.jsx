import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard/FeatureCard";
import Footer from "../../Component/Footer/Footer";
import Blog from "../../Component/Blog";
import BookCarousel from "../../Component/BookCarousel";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetch("Feature.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);

  return (
    <div>
      {/* Banner Section  */}
      <div
        className={`bg-[url("https://i.postimg.cc/vH2jg0tL/pexels-pixabay-207636.jpg")] flex justify-center bg-cover p-2 w-full md:h-[500px]`}
      >
        <div className="flex flex-col justify-center items-center md:w-1/2 space-y-3">
          <h1 className="text-6xl lg:text-7xl text-white text-center font-bold">
            Welcome to <span className="text-orange-600">Study</span>Hub
          </h1>

          <p className="text-white md:text-center p-2 text-xl mx-auto text-justify">
            where learning together is easier than ever! With StudyHub Online
            Group Study, learning is no longer a solo journey. Experience the
            power of collective knowledge and stay motivated by studying with a
            supportive community.
          </p>

          <Link to='/assignments' className="btn w-full md:w-auto bg-orange-500 text-white">
            View Assignment
          </Link>
        </div>
      </div>

      <Blog />

      <div className="my-6 lg:my-16">
        <h1 className="text-5xl font-bold text-center ">Feature Section </h1>
        <p className="text-2xl font-bold text-center mt-4 text-orange-600">
          All our features at a glance
        </p>
      </div>

      {/* feature Section  */}
      <div className="grid grid-cols-2 lg:grid-cols-3 m-2 gap-3 lg:gap-10">
        {feature.map((webFeature, index) => (
          <FeatureCard key={index} Feature={webFeature}></FeatureCard>
        ))}
      </div>

      <BookCarousel />

      {/* faq section  */}

      <div className="my-10 lg:my-16">
        <h1 className="text-5xl font-bold text-center ">Faq Section </h1>
        <p className="text-2xl px-2 font-bold text-center mt-4 text-orange-600">
          All the questions and answers you want
        </p>
      </div>

      <div className="grid md:grid-cols-2 p-4 lg:p-10 gap-10 bg-[#070F2B] text-white">
        <div className="space-y-5 grid grid-cols-1">
          <h1 className="text-5xl text-center lg:text-left lg:text-6xl font-bold">
            Most Questions We Answered
          </h1>
          <p className="text-xl text-center lg:text-left lg:text-2xl">
            Explore our FAQ page for comprehensive answers to common queries.
            Find solutions, troubleshoot, and gain insights into our services
            and offerings. Your questions, answered with clarity and detail.
          </p>
        </div>

        <div className="grid grid-cols-1">
          <img
            className="w-full h-full"
            src="https://i.postimg.cc/R0rYXGgx/support.jpg"
            alt=""
          />
        </div>
      </div>

      <div>
        <h1 className="text-2xl text-center lg:text-left lg:text-4xl font-bold mt-10">
          Most Asked Question To Us
        </h1>
        <div className="grid lg:grid-cols-2 gap-5 mt-5">
          <div className="grid grid-cols-1 join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                <h1>How can I join you?</h1>
              </div>
              <div className="collapse-content">
                <p>
                  To join us you need to go to the sign up page of our site and
                  fill the form with all the information. And update your
                  account by clicking on sign up button. Only then you can join
                  us.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                <h1>Will I get all the services for free?</h1>
              </div>
              <div className="collapse-content">
                <p>
                  Yes, you will get most of the services for free. However, some
                  services may require you to pay a small fee.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                <h1>What benefits will I get if I use the website?</h1>
              </div>
              <div className="collapse-content">
                <p>
                  Using our website you can create, solve, save and update your
                  school, college and university assignments. Besides, you will
                  get all the information you need very easily.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                <h1>Will I get all the services for free?</h1>
              </div>
              <div className="collapse-content">
                <p>
                  Yes, you will get most of the services for free. However, some
                  services may require you to pay a small fee.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                <h1>What benefits will I get if I use the website?</h1>
              </div>
              <div className="collapse-content">
                <p>
                  Using our website you can create, solve, save and update your
                  school, college and university assignments. Besides, you will
                  get all the information you need very easily.
                </p>
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
                  Using our website you can create, solve, save and update your
                  school, college and university assignments. Besides, you will
                  get all the information you need very easily.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                <h1>Will I get all the services for free?</h1>
              </div>
              <div className="collapse-content">
                <p>
                  Yes, you will get most of the services for free. However, some
                  services may require you to pay a small fee.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                <h1>What benefits will I get if I use the website?</h1>
              </div>
              <div className="collapse-content">
                <p>
                  Using our website you can create, solve, save and update your
                  school, college and university assignments. Besides, you will
                  get all the information you need very easily.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                <h1>Will I get all the services for free?</h1>
              </div>
              <div className="collapse-content">
                <p>
                  Yes, you will get most of the services for free. However, some
                  services may require you to pay a small fee.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                <h1>What benefits will I get if I use the website?</h1>
              </div>
              <div className="collapse-content">
                <p>
                  Using our website you can create, solve, save and update your
                  school, college and university assignments. Besides, you will
                  get all the information you need very easily.
                </p>
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
