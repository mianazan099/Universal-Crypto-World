function FeatureProject() {
  return (
    <section className="mb-24">
      <BigCard
        img="https://fakeimg.pl/460x460/"
        starting="24.77M"
        highest="744M"
        link="/"
        twitter="/"
        telegram="/"
        website="/"
      />
      <div className="mx-auto grid w-fit gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:hidden">
          <Card
            img="https://fakeimg.pl/460x460/"
            starting="24.77M"
            highest="744M"
            link="/"
            twitter="/"
            telegram="/"
            website="/"
          />
        </div>
        <Card
          img="https://fakeimg.pl/460x460/"
          starting="24.77M"
          highest="744M"
          link="/"
          twitter="/"
          telegram="/"
          website="/"
        />
        <Card
          img="https://fakeimg.pl/460x460/"
          starting="24.77M"
          highest="744M"
          link="/"
          twitter="/"
          telegram="/"
          website="/"
        />
        <div className="hidden md:block">
          <Card
            img="https://fakeimg.pl/460x460/"
            starting="24.77M"
            highest="744M"
            link="/"
            twitter="/"
            telegram="/"
            website="/"
          />
        </div>
      </div>
    </section>
  );
}

function BigCard({ img, starting, highest, link, twitter, telegram, website }) {
  return (
    <div className="mx-auto mb-16 hidden h-[324px] max-w-[920px] gap-10 rounded-lg bg-darkPurple-400 px-10 py-14 text-start lg:flex">
      <div className="">
        <img
          src={img}
          alt=""
          className="relative -top-28 h-[340px] w-[300px] rounded-lg object-cover"
        />
      </div>
      <div>
        <div className="mb-8">
          <h2 className="mb-8 text-xl font-bold sm:text-3xl">
            Feature Project
          </h2>
          <p className="text-xl font-bold">
            Starting Market Cap:{" "}
            <span className="gradient-text bg-gradientSecondary">
              {starting}
            </span>
          </p>
          <p className="text-xl font-bold">
            All-time High Market Cap(ATH):{" "}
            <span className="gradient-text bg-gradientSecondary">
              {highest}
            </span>
          </p>
        </div>
        <div className="flex flex-row-reverse items-center justify-end gap-5">
          <a href={link}>
            <button className="rounded-lg bg-gradientSecondary px-10 py-3 text-md font-bold">
              Chart Link
            </button>
          </a>
          <div className="flex gap-5">
            <a href={website}>
              <img src="/www-icon.svg" alt="" height="24" width="24" />
            </a>
            <a href={telegram}>
              <img src="/telegram-logo.svg" alt="" height="24" width="24" />
            </a>
            <a href={twitter}>
              <img src="/twitter-logo.svg" alt="" height="24" width="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ img, starting, highest, link, twitter, telegram, website }) {
  return (
    <div className="rounded-lg bg-darkPurple-400 p-8 pb-5">
      <div className="mx-auto mb-5 w-fit">
        <img src={img} alt="" className="aspect-square h-52 rounded-lg" />
      </div>
      <div className="mb-5 text-start">
        <h3 className="mb-2.5 text-xl font-bold">Feature Project</h3>
        <p className="text-sm font-bold">
          Starting Market Cap:{" "}
          <span className="gradient-text bg-gradientSecondary">{starting}</span>
        </p>
        <p className="text-sm font-bold">
          All-time High Market Cap(ATH):{" "}
          <span className="gradient-text bg-gradientSecondary">{highest}</span>
        </p>
      </div>
      <a href={link} className="mx-auto block w-fit">
        <button className="mb-5 rounded-lg bg-gradientSecondary px-9 py-3 text-md font-bold">
          Chart Link
        </button>
      </a>
      <div className="mx-auto flex w-fit gap-5">
        <a href={website}>
          <img src="/www-icon.svg" alt="" height="24" width="24" />
        </a>
        <a href={telegram}>
          <img src="/telegram-logo.svg" alt="" height="24" width="24" />
        </a>
        <a href={twitter}>
          <img src="/twitter-logo.svg" alt="" height="24" width="24" />
        </a>
      </div>
    </div>
  );
}

export default FeatureProject;
