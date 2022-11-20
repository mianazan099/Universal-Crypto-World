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
            content {
              html
            }
          }
        }
      `
    ).then((res) => {
      setData(res.blogPost.content.html);
    });
  }, [id]);

  return (
    <>
      {
        <div
          className=" prose prose-blue mx-auto px-6 pt-12 pb-8 dark:prose-invert md:prose-lg lg:prose-xl lg:pt-20"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      }
    </>
  );
};

export default Post;
