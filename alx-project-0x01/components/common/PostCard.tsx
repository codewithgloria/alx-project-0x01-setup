import React from 'react';

interface PostCardProps {
  title: string;
  body: string;
  userId: number;
  id: number;
}

const PostCard: React.FC<PostCardProps> = ({ title, body, userId, id }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{body}</p>
      <div className="mt-2 text-sm text-gray-600">
        <p>User ID: {userId}</p>
        <p>Post ID: {id}</p>
      </div>
    </div>
  );
};

export default PostCard;