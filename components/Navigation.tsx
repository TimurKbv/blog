"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  console.log(session);

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            href={link.href}
            key={link.label}
            className={isActive ? "underline" : "hover:underline"}
          >
            {link.label}
          </Link>
        );
      })}
      {session?.data && <Link href={"/profile"}>Profile </Link>}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign Out
        </Link>
      ) : (
        <Link href="/signin">SignIn</Link>
      )}
    </>
  );
};

export default Navigation;
