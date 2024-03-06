// import React from "react";
import Hero from "../../components/herosection/Hero";
import PostBlock from "../../components/post_section/postBlock/PostBlock";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="post_heading">
        <h1 className="text-6xl font-bold text-center mt-24">
          World <span className="special_word"> Posts</span>
        </h1>
      </div>
      <PostBlock />
    </div>
  );
};

export default Home;
