function TopAnnouncement() {
  return (
    <section className="mb-24">
      <h2 className="mb-8 text-center text-xl font-bold sm:text-4xl">
        Top Announcement
      </h2>
      <div className="mx-auto flex w-fit max-w-[39ch] flex-col gap-5 sm:max-w-none sm:flex-row">
        <div className="">
          <img
            src="https://fakeimg.pl/700x700/"
            alt=""
            className="h-48 w-full rounded-lg object-cover sm:aspect-[1/.75] sm:h-52"
          />
        </div>
        <div className="text-start">
          <p className="mb-5 text-lg font-bold">Weekly AMA Hosting:</p>
          <p className="max-w-[39ch] text-md">
            Through these AMAs, we want to help our community members grow and
            learn. Every week or every two weeks we will have one of these to
            share valuable and insightful advice that members of our community
            can use daily.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TopAnnouncement;
