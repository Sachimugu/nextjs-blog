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

const Page = ({ post }) => {
  const { id, title, category, img, published, author, description, subtitle } =
    post;
  
  return (
    <Layout>
      {/* { data.map((x)=>{
        return data.title
      })} */}
      <section className="container mx-auto md:px-2 py-8 md:w-5/6">
        <div className="flex justify-center">
          {author ? <Author></Author> : <></>}
        </div>
        <div className="post py-4 md:py-8">
          <h1 className="font-bold text-center text-xl md:text-2xl">
            {title || "Title"} - {published || "published"}
          </h1>
          <p>{subtitle || "subtitle"}</p>
          <div className="flex justify-center">
            <Image src={img} width={800} height={400} alt="mee"></Image>
          </div>
          <div className="content flex flex-col gap-4 text-lg text-gray-600 py-4 md:py-8">
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
    props: { post },
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