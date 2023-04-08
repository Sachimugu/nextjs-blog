import Link from "next/link";
import React from "react";
import {ImTwitter, ImLinkedin, ImGithub } from "react-icons/im";

export default function Header() {

  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
  };

  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-2 flex justify-center py-4 sm:py-0">
          <input
            className="input-text"
            type="text"
            placeholder="search..."
          ></input>
        </div>
        <div className="w-96 sm:order-1">
          <Link
            href={"/"}
            className="font-bold uppercase text-3xl text-orange-500  hover:text-orange-600"
          >
            Design
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6  hover:text-orange-600">
            <Link
              className="hover:text-orange-600"
              href="https://web.facebook.com/suleiman.achimugu/"
            >
              <ImGithub color="orange" />
            </Link>
            <Link href="https://www.linkedin.com/in/sachimugu/">
              <ImLinkedin color="orange" />
            </Link>
            <Link href="https://twitter.com/achimugu_a">
              <ImTwitter color="orange" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}