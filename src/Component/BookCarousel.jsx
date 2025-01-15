import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const BookCarousel = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  console.log(books);
  return (
    <div className={`bg-[url("https://i.ibb.co.com/ccRDjKw/man-woman-reading.jpg")] p-10 bg-no-repeat bg-cover bg-green-300 px-2 my-16`}>
      <p className="text-xl text-center text-white">Unique Features of our programs</p>
      <h1 className="text-5xl font-bold text-center text-white">
        What do you want to study?
      </h1>

      <Swiper
        spaceBetween={30}
        loop={true}
        // centeredSlides={true}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 40 },
        }}
      >
        <div>
          {books?.map((book) => (
            <SwiperSlide key={book.id} className="my-5 lg:my-20">
              <div
                key={book.id}
                className=" bg-gray-200 flex p-5 flex-col justify-center items-center"
              >
                <img src={book.cover_image} alt="" className="lg:h-24" />

                <h1 className="text-2xl font-Bebas">{book.title}</h1>
                {/* <p className="font-Inter">
                  {book.reviews.length > 20
                    ? book.reviews.slice(0, 20) + "..."
                    : book.reviews}
                </p> */}
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default BookCarousel;
