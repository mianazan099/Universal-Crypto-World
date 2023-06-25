function Team() {
  return (
    <section className="mx-auto mb-24 max-w-3xl text-center">
      <div className="mx-auto mb-8 max-w-[62ch]">
        <h2 className="mb-5 text-xl font-bold sm:text-3xl">
          Our Execution Team
        </h2>
        <p className="text-sm sm:text-md">
          All the members of our team are active, cooperative and available 24/7
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        <Card
          name="Malaika"
          role="Founder"
          img="https://fakeimg.pl/400x400/"
          telegramLink="#"
          twitterLink="#"
        />
        <Card
          name="John Granna"
          role="Co-Founder"
          img="https://fakeimg.pl/400x400/"
          telegramLink="#"
          twitterLink="#"
        />
        <Card
          name="Sophia Queen"
          role="CEO"
          img="https://fakeimg.pl/400x400/"
          telegramLink="#"
          twitterLink="#"
        />
        <Card
          name="Mr. Jack"
          role="CMO"
          img="https://fakeimg.pl/400x400/"
          telegramLink="#"
          twitterLink="#"
        />
      </div>
    </section>
  );
}

const Card = ({ name, role, img, twitterLink, telegramLink }) => {
  return (
    <div className="rounded-lg bg-darkPurple-400 px-3 py-5 ">
      <div className={`${twitterLink || telegramLink ? "mb-5" : ""}`}>
        <img src={img} alt="" className="mx-auto mb-2 h-24 w-24 rounded-full" />
        <p className="text-md font-bold sm:text-lg">{name}</p>
        <span className="text-sm">{role}</span>
      </div>
      <div className="mx-auto flex w-fit gap-5">
        {twitterLink ? (
          <a href={twitterLink}>
            <img src="/twitter-logo.svg" alt="" className="h-6 w-6" />
          </a>
        ) : (
          ""
        )}
        {telegramLink ? (
          <a href={telegramLink}>
            <img src="/telegram-logo.svg" alt="" className="h-6 w-6" />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Team;
