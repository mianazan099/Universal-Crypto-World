const Hero = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="mx-auto max-w-md">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
              Universal Crypto World #1 Community To Join
            </h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300">
              With Awesome Services. That can help your Project Grow.
            </p>
            <button className="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">
              <a href="https://t.me/Sophia_Queen">Get Promotion</a>
            </button>
            <p className="mt-3 text-sm text-gray-400">
              Click Above Button For Services Details
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <img
              className="h-96 w-full rounded-xl object-cover lg:w-4/5"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
