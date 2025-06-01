import React from 'react';
import Header from '../../components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
        <p>This is where all posts will appear.</p>
      </main>
    </div>
  );
};

export default PostsPage;