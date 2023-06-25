function LatestAMAReviews() {
  return (
    <section className="mb-24">
      <h2 className="mb-8 text-center text-xl font-bold sm:mb-10 sm:text-4xl">
        The latest AMA review
      </h2>
      <div className="grid gap-5 lg:flex">
        <Card
          reviewer="Inery core team"
          review="This Inery mission is led by a fantastic team, which uses its experience and knowledge. They shed blood, sweat and tears to create a new data paradigm. In this article we introduce you to people who persevere work to ensure the success of the project. Dr. Naveen Singh, CEO..."
        />
        <Card
          reviewer="How Inery uses proof of stake in your blockchain"
          review="Proof of Stake is a consensus mechanism that which was created to increase speed and efficiency when lowering Commission Not requiring all miners perform math problems, which is energy-intensive process, Proof of Stake reduces costs. Transactions are confirmed by humans, which..."
        />
        <Card
          reviewer="Use cases"
          review="High performance capabilities and unmatched security allow Inery to maintain a wide range of options for use in various fields. Businesses and governments. Development of another economy. Businesses and governments can use blockchain and solutions Inery to manage databases to run programs..."
        />
        <Card
          reviewer="IneryDB: Protecting your identity in the metaverse"
          review="About:-Inery is the first ever blockchain level 1, which offers a solution for decentralized management of databases with vision of creating a new paradigm for data. Inery is designed to provide cross-chain data exchange, higher speed and better security. It specifically concerns database management..."
        />
      </div>
    </section>
  );
}

function Card({ reviewer, review }) {
  return (
    <div className="flex-1 overflow-hidden rounded-lg text-start">
      <div className="bg-darkPurple-400 px-8 py-5 xl:flex xl:h-24 xl:items-center">
        <h3 className="text-md font-bold leading-[22.5px]">{reviewer}</h3>
      </div>
      <div className="h-full bg-[hsla(267,14%,25%,1)] px-8 py-5">
        <p className="mb-3 text-sm">{review}</p>
        <a className="text-sm font-bold" href="">
          Read More...
        </a>
      </div>
    </div>
  );
}

export default LatestAMAReviews;
