import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/icons/logo.svg";
import { buttonVariants } from "../ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Navbar = async() => {
  const user = await currentUser();

  return (
    <div
      className="px-4 h-14 sticky top-0 inset-x-0 w-full 
    bg-background/40 backdrop-blur-lg border-b border-border z-50"
    >
      <div
        className="flex items-center justify-between 
      h-full mx-auto md:max-w-screen-xl"
      >
        <div className="flex items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image className="w-8 h-8" src={logo} alt="logo" />
            <span className="text-lg font-medium">SparkStudio</span>
          </Link>
        </div>

        <nav
          className="hidden md:flex absolute left-1/2 top-1/2
         -translate-x-1/2 -translate-y-1/2 transform"
        >
          <ul className="flex items-center justify-center gap-8">
            <li className="hover:text-foreground/80 text-sm">
              <Link href="#">Pricing</Link>
            </li>
            {/* <li className="hover:text-foreground/80 text-sm">
              <Link href="#">About</Link>
            </li> */}
            <li className="hover:text-foreground/80 text-sm">
              <Link href="#">Features</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href="#">Pre-made Designs</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <UserButton />
          ) : (
            <>
              <Link
                href="/sign-in"
                className={buttonVariants({ 
                    size: "sm", 
                    variant: "ghost" 
                })}
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: "sm",
                  className: "hidden md:flex",
                })}
              >
                Start free trial
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
