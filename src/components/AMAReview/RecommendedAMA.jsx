const recommendations = [
  "https://fakeimg.pl/700x700/",
  "https://fakeimg.pl/700x700/",
  "https://fakeimg.pl/700x700/",
];

function RecommendedAMA() {
  return (
    <section className="mb-24 text-center">
      <h2 className="mb-5 text-xl font-bold sm:text-4xl">
        Recommended by AMAS
      </h2>
      <p className="mx-auto mb-8 max-w-[52ch] text-md sm:mb-10">
        Hey, investors are ahead of the people around you, join to our community
        and get information about the latest innovations in the crypto space
        thanks to our great collaboration and good AMA.
      </p>
      <div className="grid gap-3 sm:grid-cols-3 lg:gap-5">
        {recommendations.map((recommendation, index) => (
          <div key={index} className="">
            <img
              src={recommendation}
              alt=""
              className="h-48 w-full rounded-lg object-cover lg:h-56"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecommendedAMA;
