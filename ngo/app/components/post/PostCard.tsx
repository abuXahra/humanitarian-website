"use client";
import Image from "next/image";
import ButtonB from "../button/ButtonB";
import { useRouter } from "next/navigation";
import { PostDataType } from "@/app/data/home/BlogPostData";

export default function PostCard({ post }: { post: PostDataType }) {
  const navigation = useRouter();

  return (
    <div className="flex flex-col w-full gap-4 bg-white shadow-lg hover:shadow-2xl rounded-xl transition duration-300 hover:-translate-y-1 hover:scale-100">
      <div className="flex flex-col relative h-75 w-full gap-4 overflow-hidden rounded-xl">
        <Image
          src={post.imgUrl}
          alt="hero-image"
          fill
          className="object-cover h-75 transition-transform duration-500 hover:scale-110"
        />
        <ButtonB
          text={post.btnText}
          onClick={() => navigation.push(`/blog/${post.slug}`)}
          props={"absolute bottom-0 right-0"}
        />
      </div>

      <div className="flex flex-col gap-4 p-8 ">
        <h2 className="text-2xl font-semibold text-black">{post.title}</h2>
        <p className="text-slate-600">{post.description.slice(0, 100)}</p>
      </div>
    </div>
  );
}
