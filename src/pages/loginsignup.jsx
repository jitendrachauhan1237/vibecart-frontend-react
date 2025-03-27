import React, { useState } from "react";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
 const onSubmit = (e) => {
  e.preventDefault();
}

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#c1e3ff] to-[#e1ffea22] flex items-center justify-center font-poppins">
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={onSubmit}>
        <div className="space-y-6">
          {!isLogin && (
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
        </div>
      
        <button className="w-full mt-6 p-3 text-white bg-blue-500 rounded-md text-lg font-medium hover:bg-blue-600">
          {isLogin ? "Login" : "Continue"}
        </button>
        </form>
        
        <p className="mt-4 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={toggleForm}
            className="text-blue-500 cursor-pointer hover:text-blue-700"
          >
            {isLogin ? "Sign Up Here" : "Login Here"}
          </span>
        </p>
        {!isLogin && (
          <div className="flex items-center mt-4 space-x-3">
            <input type="checkbox" id="terms" name="terms" className="h-5 w-5" />
            <label htmlFor="terms" className="text-gray-600">
              By continuing, I agree to the terms of use & privacy policy.
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
