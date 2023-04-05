import Image from "next/image";
import Link from "next/link";
import Swr from "../pages/utils/swr";
import Author from "./child/author";
import Error from "./error";
import Spinner from "./spinner";

export default function Section2() {

  const { data, isLoading, isError } = Swr("api/posts");


    if (isLoading)
      return (
        <div>
          <Spinner></Spinner>
        </div>
      );
    if (isError) return <div><Error/></div>;
  return (
    <section className="container px-2 mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl pb-12 text-center">Latest Posts</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => {
          return <Post data={item} key={index}></Post>;
        })}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image
            src={img || "/"}
            className="rounded"
            width={500}
            height={350}
            alt="jkjg"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
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
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-xl text-center md:text-sm lg:text-xl font-bold text-gray-800 hover:text-gray-600"
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
        <div className="flex justify-center">
          <div className="flex justify-center">
            {author ? <Author></Author> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
}