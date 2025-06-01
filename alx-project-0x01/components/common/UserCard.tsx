import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, username, email, address, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">Username: {username}</p>
      </div>
      <p className="text-gray-700 mb-4">Email: {email}</p>
      <div className="mt-4 text-sm text-gray-500">
        <p>City: {address.city}</p>
        <p>Company: {company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;