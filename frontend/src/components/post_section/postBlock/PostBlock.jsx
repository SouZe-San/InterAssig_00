import PostItem from "../postItem/PostItem";

// import React from 'react'
import "./post_style.scss";
const PostArray = [
  {
    userName: "jane_smith",
    title: "A Culinary Adventure",
    body: "Embarked on a culinary adventure and experimented with flavors from around the world. The kitchen became my canvas, and the result was a symphony of tastes and aromas that delighted the senses. Culinary creativity knows no bounds!",
  },
  {
    userName: "chef_john",
    title: "Cooking Around the Globe",
    body: "Traveled the world to learn various cooking techniques and local ingredients. Each dish I create is a testament to my global culinary journey.",
  },
  {
    userName: "food_explorer",
    title: "Kitchen Odyssey",
    body: "Dived into the world of gastronomy, exploring diverse cuisines and refining my culinary skills. Every meal is a new adventure!",
  },
];

const PostBlock = () => {
  return (
    <div className="container grid gap-12 justify-items-center content-center pt-16 pb-12 px-12 justify-self-center xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {PostArray.map((post, index) => {
        return <PostItem key={index} post={post} />;
      })}
    </div>
  );
};

export default PostBlock;
