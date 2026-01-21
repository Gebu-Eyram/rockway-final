import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPosts } from "@/constants";
import { BlurFade } from "@/components/ui/blur-fade";

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 py-8 lg:py-20 inter">
      <BlurFade delay={0.1}>
        <div>
          <h2 className="text-3xl font-semibold mb-6 tracking-tighter text-balance text-gray-900 md:text-4xl max-w-2xl">
            Latest Stories
          </h2>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BlogPosts.map((post, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.1} inView>
            <Link href={post.link}>
            <div className="w-full bg-gray-100 rounded-2xl cursor-pointer p-2">
              <div className="mb-4 p-4">
                <time className="text-xs text-gray-500 block mb-2">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <p className="text-gray-700 capitalize tracking-tight font-sans leading-[104%] mt-4 text-lg font-medium line-clamp-1">
                  {post.title}
                </p>
                <p className="line-clamp-2 text-gray-600 text-sm mt-3">
                  {post.summary}
                </p>
              </div>
              <div className="bg-gray-100 rounded-2xl w-full h-80 overflow-hidden relative flex items-start justify-end">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="h-full object-cover -bottom-[12%] left-0 absolute"
                />
              </div>
            </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
