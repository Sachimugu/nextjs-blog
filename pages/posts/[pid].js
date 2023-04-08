import Author from "@/components/child/author";
// import Related from "@/components/child/related";
import Layout from "@/components/layout";
import Section4 from "@/components/section4";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import Error from "@/components/error";
import Spinner from "@/components/spinner";
import Swr from "../utils/swr";
import Link from "next/link";
import { SWRConfig } from "swr";



const Page = ({fallback}) => {
  const router = useRouter()
  const {pid}= router.query



  const { data, isLoading, isError } = Swr(`api/posts/${pid}`);
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
    <SWRConfig value={{fallback}}>
      <Article post={data}></Article>
    </SWRConfig>
  );
}

const Article = ({ post }) => {

  const { id, title, category, img, published, author, description, subtitle } =
    post;
  
  return (
    <Layout>
      {/* { data.map((x)=>{
        return data.title
      })} */}
      <section className="container px-2 mx-auto md:px-2 py-8 md:w-5/6">
        <div className="flex justify-center">
          {author ? <Author></Author> : <></>}
        </div>
        <div className="post py-4 md:py-8">
          <h1 className="font-bold text-center text-md md:text-xl pb-4">
            {title || "Title"}
            <Link
              href={`/posts/${id}`}
              className="text-orange-600 hover:text-orange-800"
            >
               <small>-{published || "Unknown"}</small>
            </Link>
          </h1>
          <p className="text-center lg:pb-8">{subtitle || "subtitle"}</p>
          <div className="flex justify-center">
            <Image src={img} width={800} height={400} alt="mee"></Image>
          </div>
          <div className="content flex flex-col text-center gap-4 text-lg text-gray-600 py-4 md:py-8">
            <p>{description || "description"}</p>
          </div>
        </div>
        <Section4></Section4>
      </section>
    </Layout>
  );
};
export default Page;


export async function getStaticProps({params}) {
  const res = await fetch(`http://localhost:3000/api/posts/${params.pid}`);
  console.log(params)
  
  
  const post = await res.json()
  // const Id = 1
  // const post = posts.find(value=>value.id==Id)
  return {
    props: {
      // post,
      fallback: {
        '/api/posts':post
      }
    },
  };
}


export async function getStaticPaths() {
  

  const res = await fetch(`http://localhost:3000/api/posts`);
  const posts = await res.json();

  const paths = posts.map(value => {
    return {
      params: {
        pid: value.id.toString()
      }
    }
  })
  
  return {
    paths,
    fallback: false,
  };
}