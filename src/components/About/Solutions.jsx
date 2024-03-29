function Solutions() {
  return (
    <section className="mb-24">
      <h2 className="mb-12 text-center text-xl font-bold sm:text-3xl">
        Our Solutions
      </h2>
      <div className="full-border grid gap-10 lg:grid-cols-2 lg:gap-5">
        <div className="tl max-lg:hidden"></div>
        <div className="br max-lg:hidden"></div>
        <div className="tr max-lg:hidden"></div>
        <div className="bl max-lg:hidden"></div>
        <div className="full-border grid gap-10 sm:grid-cols-2 sm:gap-5">
          <div className="tl lg:hidden"></div>
          <div className="br lg:hidden"></div>
          <Card
            num="01"
            name="Guiding new investors"
            disc="We are helping new investors by offering them guidance and educating them in the crypto space with the help of valuable content and guides. We are also providing our users with accurate news to keep them on the right path, so they don’t miss out on any hot topic in the crypto market."
          />
          <Card
            num="02"
            name="Bringing in the best companies"
            disc="We are active in the space and we bring some of the best crypto projects to our AMAs. We ask project leaders to explain their vision, current state, future goals and what is their development cycle."
          />
        </div>
        <div className="full-border grid gap-10 sm:grid-cols-2 sm:gap-5">
          <div className="tl lg:hidden"></div>
          <div className="br lg:hidden"></div>
          <Card
            num="03"
            name="Connect crypto investors with crypto startups"
            disc="We connect crypto projects in the ecosystem to our investors through our telegram channels. Our experienced team of experts has built a great audience through telegram, YouTube and Twitter."
          />
          <Card
            num="04"
            name="One-on-one consultations"
            disc="We believe that every entrepreneur can become and remain successful. We provide consulting services to startup founders who need help to grow in the crypto space. Our goal is to help you avoid pitfalls, understand your competitors, define your market, and create products that customers love."
          />
        </div>
        <div className="full-border grid gap-10 sm:grid-cols-2 sm:gap-5">
          <div className="tl lg:hidden"></div>
          <div className="br lg:hidden"></div>
          <Card
            num="05"
            name="Business Development"
            disc="As a strategic partner, we empower you to achieve your business goals. We work smart and fast, with a commitment to excellence in service that allows us to succeed at times when it may be difficult for other companies."
          />
          <Card
            num="06"
            name="Community Engagement"
            disc="By managing the community where it's most needed through announcements, developments and updates to facilitate community growth, we're able to bring together members by sharing ideas and material."
          />
        </div>
        <div className="full-border grid gap-10 sm:grid-cols-2 sm:gap-5">
          <div className="tl lg:hidden"></div>
          <div className="br lg:hidden"></div>
          <Card
            num="07"
            name="Marketing Operations"
            disc="We deliver an efficient system for you to focus on growth and opportunities. We will design your calendar and then manage it for you so that you are efficient with your business."
          />
          <Card
            num="08"
            name="Promotion and Distribution"
            disc="We have a good network of distribution and offer great distribution services for your products or services with good promotion. We ensure your product gets the attention it deserves."
          />
        </div>
      </div>
    </section>
  );
}

function Card({ num, name, disc }) {
  return (
    <div className="full-border rounded-lg bg-darkPurple-400 p-8 text-start text-xs sm:text-sm">
      <div className="tl sm:hidden"></div>
      <div className="br sm:hidden"></div>
      <span className="gradient-text mb-1 block bg-gradientSecondary font-bold">
        {num}
      </span>
      <h3 className="mb-4 text-sm font-bold sm:text-xl">{name}</h3>
      <p className="">{disc}</p>
    </div>
  );
}

export default Solutions;
