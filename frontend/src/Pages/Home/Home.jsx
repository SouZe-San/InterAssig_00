// import React from "react";

import Hero from "../../components/herosection/Hero";
import PostBlock from "../../components/post_section/postBlock/PostBlock";
import useAuth from "../../hooks/userAuth.hook";

const Home = () => {
  const { auth } = useAuth();

  return (
    <div>
      <Hero />
      <div className="post_heading">
        <h1 className="text-6xl font-bold text-center mt-24">
          World&apos;s <span className="special_word"> Posts</span>
        </h1>
      </div>
      {auth.accessToken ? (
        <PostBlock />
      ) : (
        <div className=" my-12 w-full text-center">
          <h2 className="text-5xl font-bold text-[#a9a9a9]"> Log In First.</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
