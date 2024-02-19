import { Metadata } from "next";
import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";

const metadata: Metadata = {
  title: " Blog | Next App",
};

const Blog = () => {
  return (
    <>
      <h1 className="text-3xl font-extrabold text-center">Blog Page</h1>
      <PostSearch />
      <Posts />
    </>
  );
};

export default Blog;
