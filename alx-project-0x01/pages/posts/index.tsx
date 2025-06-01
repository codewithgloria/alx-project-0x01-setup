import React, { useState } from 'react';
import PostCard from '@/components/common/PostCard';
import PostModal from '@/components/common/PostModal';
import Header from '@/components/layout/Header';
import { PostProps, PostData } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostData | null>(null); // ❌ Not used yet but needed for test
  const [postList, setPostList] = useState<PostProps[]>(posts);

  const handleAddPost = (newPost: PostData) => {
    setPostList((prev) => [...prev, newPost]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {postList.map((post) => (
            <PostCard {...post} key={post.id} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
  const posts = await res.json();

  return {
    props: {
      posts
    },
    revalidate: 10,
  };
}

export default Posts;