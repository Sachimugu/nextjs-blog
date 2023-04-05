import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import Author from "./child/author";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Error from "./error";
import Spinner from "./spinner";
import Swr from "@/pages/utils/swr";

export default function Section3() {
  const { data, isLoading, isError } = Swr("api/popular");
  console.log(data);

  if (isLoading)
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  if (isError)
    return (
      <div>
        <Error />
      </div>
    );

  return (
    <section className="container mx-auto md:px-20 py-16 px-2">
      <h1 className="font-boldtext-4xl pb-12 text-center">Most Popular</h1>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10 },
        }}
        // slidesPerView={1}
      >
        {data.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <Post data={value}></Post>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author, description } = data;

  return (
    <div className="grid">
      <div className="images flex justify-center">
        <Link href={`/posts/${id}`}>
          <Image src={img} alt="gfg" width={350} height={200} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat flex justify-center">
          <Link
            href={`/posts/${id}`}
            className="text-orange-600 hover:text-orange-800"
          >
            {category || "Unknown"}
          </Link>
          <Link
            href={`/posts/${id}`}
            className="text-gray-800 hover:text-gray-600"
          >
            - {published || "Unknown"}
          </Link>
        </div>
        <div className="title flex justify-center">
          <Link
            href={`/posts/${id}`}
            className="text-xl text-center md:text-sm lg:text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "Title"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          {description.substr(0, 200) || "description"}
        </p>
        <div className="flex justify-center">
          {author ? <Author></Author> : <></>}
        </div>
      </div>
    </div>
  );
}
