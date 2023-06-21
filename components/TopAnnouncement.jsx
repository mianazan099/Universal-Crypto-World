function TopAnnouncement() {
  return (
    <section className="mb-24">
      <h2 className="text-h2 mb-8 text-center">Top Announcement</h2>
      <div className="mx-auto max-w-3xl sm:grid sm:grid-cols-3 sm:gap-5">
        <div className="mx-auto mb-8 h-48 w-full max-w-xs rounded-lg bg-[#c9c9c9] sm:mb-0 lg:h-52"></div>
        <div className="text-start sm:col-span-2">
          <p className="mb-5 text-lg font-bold leading-[25px]">
            Weekly AMA Hosting:
          </p>
          <p className="text-md leading-[22.5px]">
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
