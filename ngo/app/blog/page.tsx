import Link from "next/link";
import React from "react";
import { BiLinkAlt } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import PostCard from "../components/post/PostCard";
import { BLOGPOSTDATA } from "../data/home/BlogPostData";
import Wrapper from "../components/container-wrapper/ContainerWrapper";
import Image from "next/image";
import PageTitleBanner from "../components/utils/PageTitleBanner";

export default function Blog() {
  return (
    <div className="flex w-full flex-col bg-white">
      <PageTitleBanner
        pageTitle={"Blog Post"}
        subTitle={"Keep upto date with our trending news"}
        imgUrl={"/images/house.JPG"}
      />

      <Wrapper>
        <div className="flex w-full py-8 flex-col bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-4 gap-8">
            {BLOGPOSTDATA.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
