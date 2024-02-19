"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEventHandler } from "react";

const SignInForm = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      router.push("/profile");
    } else {
      console.log(res);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className=" border-b-2">
        <input type="email" name="email" required placeholder="email..." />
      </div>
      <div className=" border-b-2">
        <input
          type="password"
          name="password"
          required
          placeholder="password..."
        />
      </div>
      <button type="submit" className=" px-5 py-3 bg-cyan-600 text-white">
        SignIn
      </button>
    </form>
  );
};

export default SignInForm;
