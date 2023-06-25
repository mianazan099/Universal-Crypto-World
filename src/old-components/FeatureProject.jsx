function FeatureProject() {
  return (
    <section className="mb-24">
      <div className="mx-auto mb-16 hidden h-[324px] max-w-[920px] gap-10 rounded-lg bg-darkPurple-400 px-10 py-14 text-start lg:flex">
        <div className="relative -top-32 h-[340px] w-[300px] rounded-lg bg-[hsla(0,0%,85%,1)]"></div>
        <div>
          <div className="mb-8">
            <h2 className="mb-8 text-xl font-bold sm:text-4xl">
              Feature Project
            </h2>
            <p className="text-xl font-bold">
              Starting Market Cap:{" "}
              <span className="gradient-text bg-gradientTwo">24.77M</span>
            </p>
            <p className="text-xl font-bold">
              All-time High Market Cap(ATH):{" "}
              <span className="gradient-text bg-gradientTwo">744M</span>
            </p>
          </div>
          <div className="flex flex-row-reverse items-center justify-end gap-5">
            <button className="bg-gradientTwo rounded-lg px-10 py-3 text-md font-bold">
              Chart Link
            </button>
            <div className="flex gap-5">
              {/* mx-auto flex w-fit gap-5 */}
              <img src="/www-icon.svg" alt="" height="24" width="24" />
              <img src="/telegram-logo.svg" alt="" height="24" width="24" />
              <img src="/twitter-logo.svg" alt="" height="24" width="24" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-fit space-y-5 lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
        <Card title="" starting="" highest="" />
        <Card title="" starting="" highest="" />
        <Card title="" starting="" highest="" />
      </div>
    </section>
  );
}

function Card({ title, starting, highest }) {
  return (
    <div className="rounded-lg bg-darkPurple-400 p-8 pb-5">
      <div className="mx-auto mb-5 aspect-square h-52 rounded-lg bg-white opacity-50"></div>
      <div className="mb-5 text-start">
        <h3 className="mb-2.5 text-xl font-bold leading-8">Feature Project</h3>
        <p className="text-sm font-bold">
          Starting Market Cap:{" "}
          <span className="gradient-text bg-gradientTwo">24.77M</span>
        </p>
        <p className="text-sm font-bold">
          All-time High Market Cap(ATH):{" "}
          <span className="gradient-text bg-gradientTwo">744M</span>
        </p>
      </div>
      <button className="bg-gradientTwo mb-5 rounded-lg px-9 py-3 text-md font-bold">
        Chart Link
      </button>
      <div className="mx-auto flex w-fit gap-5">
        <img src="/www-icon.svg" alt="" height="24" width="24" />
        <img src="/telegram-logo.svg" alt="" height="24" width="24" />
        <img src="/twitter-logo.svg" alt="" height="24" width="24" />
      </div>
    </div>
  );
}

export default FeatureProject;
