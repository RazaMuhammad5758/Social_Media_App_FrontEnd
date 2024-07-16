
import SubPost from "../subpost/SubPost";
import "./Post.scss";

const Post = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Raza Muhammad",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Friend ZOne",
      img: "https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?cs=srgb&dl=pexels-minan1398-853168.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "Noman",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=400",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
    {
      id: 3,
      name: "Ibrahim Riaz",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "GOAT",
      img: "https://phantom-marca.unidadeditorial.es/9b359a7adeec78d71faf5d54558ae2af/resize/828/f/jpg/assets/multimedia/imagenes/2021/07/17/16265320344770.jpg",
    },
    {
      id: 4,
      name: "Saeed Ahmed",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "GOAT",
      img: "https://phantom-marca.unidadeditorial.es/12515bdac16ea270cef99556492b7c57/resize/828/f/jpg/assets/multimedia/imagenes/2023/09/26/16957364939853.jpg",
    },

  ];

  return <div className="posts">
    {posts.map(post=>(
      <SubPost post={post} key={post.id}/>
    ))}
  </div>;
};

export default Post;