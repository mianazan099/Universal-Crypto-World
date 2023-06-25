function Testimonial() {
  return (
    <section className="mx-auto mb-24 text-center sm:max-w-2xl lg:max-w-[1100px]">
      <h2 className="mb-5 text-xl font-bold sm:text-3xl">
        What Our Clients Say
      </h2>
      <p className="mb-8 text-sm sm:mb-10 sm:text-md">
        Our Customers love to work with us and appreciate our efforts at the end
      </p>
      <div className="grid gap-10 lg:grid-cols-3">
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
    <div className="skew-border review-border rounded-lg bg-darkPurple-400 p-8">
      <div className="flex h-full flex-col justify-between text-sm">
        <p className="mb-5">{review}</p>
        <div className="flex items-center gap-3 text-start">
          <img
            src="https://fakeimg.pl/46x46/"
            alt=""
            className="h-12 w-12 rounded-full"
          />
          <div className="">
            <p className="font-bold sm:text-md">{reviewer}</p>
            <span>{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
