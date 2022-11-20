import { reviewer1, reviewer2, reviewer3 } from "../../../assets";

const Review = (props) => {
  return (
    <div className="rounded-lg border p-8 dark:border-gray-700">
      <p className="leading-loose text-gray-500 dark:text-gray-400">
        {props.review}
      </p>

      <div className="-mx-2 mt-8 flex items-center">
        <img
          className="mx-2 h-14 w-14 shrink-0 rounded-full object-cover ring-4 ring-gray-300 dark:ring-gray-700"
          src={props.img}
          alt=""
        />

        <div className="mx-2">
          <h1 className="font-semibold text-gray-800 dark:text-white">
            {props.name}
          </h1>
          <span className="text-sm text-gray-500">{props.role}</span>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl xl:text-5xl">
            What our clients say
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
            Our Customers love to work with us and appreciate our efforts at the
            end.
          </p>

          <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-12 xl:grid-cols-3">
            <Review
              name="Hugo Borges de Sousa"
              role="CEO - Dark Earth"
              review="“Thank you so much for hosting us today, we feel it was a very productive session, and you'll have an amazing community who seems to be very excited about the NFTS sector we would love to host everyone in this community in her room and social media.”"
              img={reviewer1}
            />
            <Review
              name="Pavel salas"
              role="Founder - Gear Protocol"
              review="“Thanks for having us here again, i guess there are many experts, developers in this group looking forward to work with you together, build up ecosystem together, enjoy success together.”"
              img={reviewer2}
            />
            <Review
              name="Vincent Irlweck"
              role="CMO - Inery"
              review="“I want to express how grateful we are to the Universal Crypto World Community for giving us this opportunity to share some time with you all this evening This is a very exciting time for Inery, and we are trying our best to spread awareness, because we think this could be very big.”"
              img={reviewer3}
            />
          </section>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
