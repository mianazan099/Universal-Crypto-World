import Image from "next/image";

function Testimonial() {
  return (
    <section className="mx-auto mb-24 text-center sm:max-w-2xl lg:max-w-[1100px]">
      <h2 className="mb-5 text-xl font-bold leading-8 sm:text-3xl sm:leading-[45px]">
        What Our Clients Say
      </h2>
      <p className="mb-8 text-sm sm:mb-10 sm:text-md">
        Our Customers love to work with us and appreciate our efforts at the end
      </p>
      <div className="flex flex-col gap-10 lg:flex-row ">
        <Review
          review="“Thank you so much for hosting us today, we feel it was a very
          productive session, and you'll have an amazing community who seems to
          be very excited about the NFTS sector we would love to host everyone
          in this community in her room and social media.”"
          reviewer="Hugo Borges de Sousa"
          role="CEO - Dark Earth"
        />
        <Review
          review="“Thanks for having us here again, i guess there are many experts, developers in this group looking forward to work with you together, build up ecosystem together, enjoy success together.”"
          reviewer="Pavel salas"
          role="Founder - Gear Protocol"
        />
        <Review
          review="“I want to express how grateful we are to the Universal Crypto World Community for giving us this opportunity to share some time with you all this evening This is a very exciting time for Inery, and we are trying our best to spread awareness, because we think this could be very big.”"
          reviewer="Vincent Irlweck"
          role="CMO - Inery"
        />
      </div>
    </section>
  );
}

const Review = ({ review, reviewer, role }) => {
  return (
    <div className="custom-border review flex-1 rounded-lg bg-dark-two p-8">
      <div className="">
        <p className="mb-5 text-sm">{review}</p>
        <div className="flex items-center gap-3 text-start">
          <Image
            src="https://fakeimg.pl/46x46/"
            alt=""
            height="46"
            width="46"
            className="rounded-full"
          />
          <div className="text-sm">
            <p className="font-bold sm:text-md">{reviewer}</p>
            <span>{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
