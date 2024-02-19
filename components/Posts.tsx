'use client'
import { getAllPosts } from "@/services/getPosts";
// import { usePosts } from "@/store";
import Link from "next/link";
import React, { FC, useEffect } from "react";
import useSWR from "swr";
// import { shallow } from "zustand/shallow";

 
const Posts: FC = () => {
    const  {data: posts, isLoading: loading} = useSWR('posts', getAllPosts)
    // const [posts, loading, getAllPosts] = usePosts(state => [
    //     state.posts, state.loading, state.getAllPosts
    // ], shallow)

    // useEffect(() => {
    //     getAllPosts()
    // }, [getAllPosts])


  return (loading ? (
    <h3 className=" text-2xl font-extrabold text-center mt-32">
      Loading...
    </h3>
  ) : 
    <ul className=" ml-32 mt-24">
      {posts.map((post: any) => (
        <li key={post.id} className="hover:underline">
          <Link href={`/blog/${post.id}`}> {post.title} </Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
