import PostItem from "../postItem/PostItem";
import { useEffect, useState } from "react";
import "./post_style.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import WaitingLoader from "../../Loader/WaitingLoader";
import NodataLoader from "../../Loader/NoDataLoader";

const PostBlock = () => {
  const axiosPrivate = useAxiosPrivate();

  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    try {
      const { data } = await axiosPrivate.get("/api/post/getpost");
      setPosts(posts.concat(data.data));
    } catch (error) {
      if (error.originalStatus === 404) {
        console.log("No more posts available");
        return;
      }
    }
  };
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const { data } = await axiosPrivate.get("/api/post/getpost");
        isMounted && setPosts(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    getUsers();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={fetchPost}
      hasMore={posts.length != 120}
      loader={<WaitingLoader />}
    >
      <div className="container grid gap-12 justify-items-center content-center pt-16 pb-12 px-12 justify-self-center xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {posts.map((post, index) => {
          return <PostItem key={index} post={post} />;
        })}
      </div>
      {posts.length == 120 && <NodataLoader />}
    </InfiniteScroll>
  );
};

export default PostBlock;
