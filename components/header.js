import React from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

export default function Header() {
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
          <a className="font-bold uppercase text-3xl">Design</a>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <a>
              <ImFacebook color="blue" />
            </a>
            <a>
              <ImTwitter color="blue" />
            </a>
            <a>
              <ImYoutube color="red" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
