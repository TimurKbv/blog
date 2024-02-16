import { Metadata } from "next";
import React, { FC } from "react";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: post.title,
  };
}

const Post: FC<Props> = async ({ params: { id } }) => {
  const post = await getData(id);
  console.log(post)

  return (
    <div className=" w-full flex justify-center ">
      <div className=" w-4/6">
        <h1 className=" text-xl font-bold text-center">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
