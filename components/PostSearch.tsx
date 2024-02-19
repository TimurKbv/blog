"use client";
import { getPostsBySearch } from "@/services/getPosts";
import { usePosts } from "@/store";
import React, { FC, FormEventHandler, useState } from "react";
import useSWR from "swr";


const PostSearch: FC= () => {
    const { mutate } = useSWR('posts')
  const [search, setSearch] = useState("");
//   const getPostsBySearch = usePosts(state => state.getPostsBySearch)

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const posts = await getPostsBySearch(search);
    mutate(posts)
  };

  return (
    <form onSubmit={handleSubmit} className=" mx-auto w-fit my-16">
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="outline-none "
      />
      <button type="submit" className=" bg-blue-400 py-1 px-2 rounded-md">
        Search
      </button>
    </form>
  );
};

export default PostSearch;
