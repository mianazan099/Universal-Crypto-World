import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const query = gql`
  {
    blogPosts(orderBy: createdAt_DESC) {
      title
      description
      category
      author
      createdAt
      slug
      coverImage {
        url
      }
    }
  }
`;

const convertDate = (date) => {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const newDate = new Date(date);
  return `${
    monthName[newDate.getMonth()]
  } ${newDate.getDate()}, ${newDate.getFullYear()}`;
};

const Blog = () => {
  const [data, setData] = useState([]);
  const [searching, setSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // TODO - stop request from happening multiple time
  useEffect(() => {
    request(process.env.REACT_APP_CONTENT_API, query).then((res) => {
      setData(res.blogPosts);
    });
  }, []);

  const filteredData = data.filter(
    (data) =>
      data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <div className="flex w-full items-center justify-between">
            {searching ? (
              <>
                <div className="w-[90%]">
                  <input
                    type="text"
                    placeholder="Searching"
                    className="
                    w-full
                    bg-transparent
                    text-3xl
                    text-gray-900
                    focus:outline-none
                    dark:text-gray-100
                    "
                    onInput={(e) => {
                      setSearchQuery(e.target.value);
                    }}
                    value={searchQuery}
                  />
                </div>
                <button
                  className="focus:outline-none"
                  onClick={() => {
                    setSearching(!searching);
                    setSearchQuery("");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-400"
                    height="24"
                    width="24"
                    fill="currentColor"
                  >
                    <path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" />
                  </svg>
                </button>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
                  recent posts
                </h1>
                <button
                  className="focus:outline-none"
                  onClick={() => setSearching(!searching)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredData.map((data, index) => (
              <div key={index}>
                <img
                  className="h-64 w-full rounded-lg object-cover object-center lg:h-80"
                  src={data.coverImage.url}
                  alt=""
                />

                <div className="mt-8">
                  <span className="uppercase text-blue-500">
                    {data.category}
                  </span>

                  <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                    {data.title}
                  </h1>

                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    {data.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      {/* <a href="/blog" className="text-lg font-medium text-gray-700 hover:text-gray-500 hover:underline dark:text-gray-300">{data.author}</a> */}
                      <p className="text-lg font-medium text-gray-700  dark:text-gray-300">
                        {data.author}
                      </p>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {convertDate(data.createdAt)}
                      </p>
                    </div>

                    <Link
                      to={`/blog/${data.slug}`}
                      className="inline-block text-blue-500 underline hover:text-blue-400"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
