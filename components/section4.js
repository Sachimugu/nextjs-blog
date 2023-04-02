import Link from "next/link";
import Image from "next/image";
import Author from "./child/author";
import Error from "./error";
import Spinner from "./spinner";
import Swr from "@/pages/utils/swr";

export default function Section4() {
  const { data, isLoading, isError } = Swr("api/posts");
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
    <section className="container mx-auto md:px-20">
      <div className="grid md:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-3xl py-12 text-center">Business</h1>
          <div className="flex flex-col gap-6">
            {/* posts */}

            {data.slice(0, 3).map((value, index) => {
              return <Post key={index} data={value}></Post>;
            })}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-3xl py-12 text-center">Travel</h1>
          <div className="flex flex-col gap-6">
            {data.slice(2, 5).map((value, index) => {
              return <Post key={index} data={value}></Post>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author, description } = data;

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={img}
            className="rounded"
            alt="dgf"
            width={300}
            height={250}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            {category || "Unknown"}
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            -  {published || "Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-md font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "Title"}
          </Link>
        </div>
        <Author></Author>
      </div>
    </div>
  );
}
