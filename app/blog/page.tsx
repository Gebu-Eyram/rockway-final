import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPosts } from "@/constants";

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 lg:py-20 px-4">
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 tracking-tighter text-balance text-gray-900 md:text-4xl max-w-2xl">
          Latest Stories
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl">
          Stay updated with the latest insights, innovations, and industry
          trends in oil and gas services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BlogPosts.map((post, index) => (
          <Link key={index} href={post.link} className="group cursor-pointer">
            <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full h-64 bg-gray-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500 mb-2 block">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">{post.summary}</p>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  Read more
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
