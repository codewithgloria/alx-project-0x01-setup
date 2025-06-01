import React, { useState } from 'react';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';
import UserModal from '@/components/common/UserModal';
import { UserProps, UserData, UserModalProps } from '@/interfaces';

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState(posts);

  const handleAddUser = (newUser: UserData) => {
    setUserList((prev) => [...prev, newUser]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">User Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {userList.map((user) => (
            <UserCard {...user} key={user.id} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users'); 
  const posts = await res.json();

  return {
    props: {
      posts
    },
    revalidate: 10
  };
}

export default Users;