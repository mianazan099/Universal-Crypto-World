const partners = [
  "https://fakeimg.pl/700x700/",
  "https://fakeimg.pl/700x700/",
  "https://fakeimg.pl/700x700/",
  "https://fakeimg.pl/700x700/",
  "https://fakeimg.pl/700x700/",
  "https://fakeimg.pl/700x700/",
];

function OurPartners() {
  return (
    <section className="mb-24">
      <h2 className="mb-8 text-center text-xl font-bold sm:text-4xl">
        Our Current Partners
      </h2>
      <div className="full-border mx-auto grid max-w-xl grid-cols-3 gap-2 lg:max-w-none lg:grid-cols-6">
        <div className="tl"></div>
        <div className="br"></div>
        {partners.map((img, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-lg">
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurPartners;
