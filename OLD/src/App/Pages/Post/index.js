import { useParams } from "react-router-dom";
import { request, gql } from "graphql-request";
import { useEffect, useState } from "react";

const Post = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    request(
      process.env.REACT_APP_CONTENT_API,
      gql`
        {
          blogPost(where: { slug: "${id}" }) {
            title
            content {
              html
            }
            coverImage {
               url
            }
          }
        }
      `
    ).then((res) => {
      setData([
        res.blogPost.title,
        res.blogPost.coverImage.url,
        res.blogPost.content.html,
      ]);
    });
  }, [id]);

  return (
    <div className=" prose prose-blue mx-auto px-6 pt-12 pb-8 dark:prose-invert md:prose-lg lg:prose-xl lg:pt-20">
      <h1>{data[0]}</h1>
      <img src={data[1]} alt="blog img" />
      <div dangerouslySetInnerHTML={{ __html: data[2] }} />
    </div>
  );
};

export default Post;
