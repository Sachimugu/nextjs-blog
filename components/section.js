import Image from "next/image";
import Link from "next/link";
import Author from "./child/author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Spinner from "./spinner";
import Swr from "@/pages/utils/swr";
import Error from "./error";

export default function section1() {


  const { data, isLoading, isError } = Swr("api/trending");
  console.log(data);

  if (isLoading)
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  if (isError) return (
    <div>
      <Error />
    </div>
  );

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          {data.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <Slide data={value}></Slide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

function Slide({data}) {
  const { id, title, category, img, published, author } = data;
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image src={img} alt="mememee" width={600} height={600} />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            {category || "Unknown"}
          </Link>

          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            - {published || "Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "Title"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
        {author ? <Author></Author> : <></>}
      </div>
    </div>
  );
}
