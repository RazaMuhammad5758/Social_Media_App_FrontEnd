
import SubPost from "../subpost/SubPost";
import "./Post.scss";

const Post = () => {
  
  
  return <div className="posts">
    {posts.map(post=>(
      <SubPost post={post} key={post.id}/>
    ))}
  </div>;
};

export default Post;