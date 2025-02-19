import blogImg from "../assets/images/top-education-blogs-feed.png";

const Blog = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10">
          <div className="my-6 lg:my-16">
            <h1 className="text-5xl font-bold text-center ">Get Started</h1>
            <p className="text-2xl font-bold text-center mt-4 text-orange-600">
              You choose right website
            </p>
          </div>

          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
              src={blogImg}
              alt=""
            />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <a
                href="#"
                className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
              >
                All the features you want to know
              </a>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                id voluptas molestiae? Eos quidem est similique magnam modi
                deleniti praesentium doloribus nobis, quibusdam voluptatibus
                pariatur saepe? Possimus, delectus. Esse architecto numquam
                dolor dignissimos enim dolores hic, ipsum, explicabo molestiae
                odit sequi expedita illo a aliquid dicta voluptas ut laboriosam
                aliquam rerum eum illum? Delectus asperiores rem repudiandae
                nisi nam ducimus eum, ratione sunt, quam molestias animi
                mollitia voluptates, cupiditate consequatur excepturi repellat
                possimus nulla quibusdam optio totam. Delectus itaque inventore
                maxime quod dolor nostrum, mollitia aperiam. Culpa beatae
                deleniti dolore incidunt nulla quibusdam, deserunt voluptas rem
                modi perferendis alias nihil.
              </p>

              <a
                href="#"
                className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
              >
                Read more
              </a>

              <div className="flex items-center mt-6">
                <img
                  className="object-cover object-center w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />

                <div className="mx-4">
                  <h1 className="text-sm text-gray-700 dark:text-gray-200">
                    Amelia. Anderson
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lead Developer, studyHub.ltd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
