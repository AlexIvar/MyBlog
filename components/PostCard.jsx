import React from 'react'
import Link from 'next/link'
import moment from 'moment'

const PostCard = ({ post }) => {
  return (
    <div className="rounder-lg mb-8 bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden pb-80 shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-cover absolute h-80 w-full rounded-t-lg object-top lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 cursor-pointer text-center text-2xl font-semibold transition duration-700 hover:text-orange-600">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
              <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                  <img alt={post.author.name} height="40px" width="40px" className="align-middle rounded-full" src={post.author.photo.url}></img>
                  <p className="inline align-middle text-gray-700 ml-2 text-lg">{ post.author.name}</p>
              </div>
              <div className="font-medium text-gray-700">
                  <span>
                      {moment(post.createdAt).format('MMM DD, YYYY')}
                </span>
              </div>
          </div>
          <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">{post.excerpt}</p>
          <div className="text-center">
              <Link href={`/post/${post.slug}`}>
                  <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-orange-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue reading</span>
              </Link>
          </div>
    </div>
  )
}

export default PostCard
