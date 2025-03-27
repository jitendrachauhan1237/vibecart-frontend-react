import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Salman Khan",
    email: "Salman@example.com",
    phone: "123-456-7890",
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Profile</h2>
        {isEditing ? (
          <div className="space-y-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Enter Name"
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter Email"
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              placeholder="Enter Phone"
            />
            <button
              className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
              onClick={() => setIsEditing(false)}
            >
              Save Changes
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-blue-500 text-white flex items-center justify-center rounded-full text-4xl">
              <FaUserEdit />
            </div>
            <p className="text-lg font-semibold text-gray-700">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
            <button
              className="mt-5 w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition flex items-center justify-center gap-2"
              onClick={() => setIsEditing(true)}
            >
              <FaUserEdit /> Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}