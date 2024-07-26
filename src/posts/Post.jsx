import { makeRequest } from "../axios";
import SubPost from "../subpost/SubPost";
import "./Post.scss";
import { useQuery } from 'react-query';

const Post = () => {
  const { isLoading, error, data } = useQuery('posts', () =>
    makeRequest.get("/posts").then(res => res.data)
  );

  console.log('Loading:', isLoading);
  console.log('Error:', error);
  console.log('Data:', data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="posts">
      {data.map(post => (
        <SubPost post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Post;
