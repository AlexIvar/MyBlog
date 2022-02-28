import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'

export const getStaticProps = async () => {
  const posts = (await getPosts()) || []
  return {
    props: {
      posts,
    },
  }
}

const Home = ({ posts }) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Alex Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <PostWidget categories={posts.node} slug={posts.node} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
