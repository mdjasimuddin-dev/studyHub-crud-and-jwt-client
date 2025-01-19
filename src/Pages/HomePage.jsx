import { useEffect, useState } from "react";
import Blog from "../Component/Blog";
import FeatureCard from "../Component/FeatureCard";
import BookCarousel from "../Component/BookCarousel";
import Footer from "../Component/Footer";
import Banner from "../Component/Banner";
import Faq from "../Component/Faq";

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
      <Banner />
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
      <Faq />

      {/* Footer Sections  */}
      <div className="my-16">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
