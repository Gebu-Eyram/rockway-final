"use client";

import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPosts } from "@/constants";
import { notFound } from "next/navigation";

const BlogPost = () => {
  const { slug } = useParams();
  const post = BlogPosts.find((p) => p.link === `/blog/${slug}`);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl inter mx-auto py-8 lg:py-20 px-4">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
      >
        <svg
          className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-8">
        <time className="text-sm text-gray-500 mb-4 block">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">{post.summary}</p>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {post.content.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-6">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Related Posts */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          More Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BlogPosts.filter((p) => p.link !== post.link).map(
            (relatedPost, index) => (
              <Link key={index} href={relatedPost.link} className="group">
                <article className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative w-full h-48">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.summary}
                    </p>
                  </div>
                </article>
              </Link>
            ),
          )}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
