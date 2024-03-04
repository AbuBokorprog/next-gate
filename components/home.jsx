import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js Project</h1>
      <p className="text-lg mb-4">
        This is a clean and professional home page for your Next.js project.
      </p>
      <p className="text-lg mb-4">
        You can customize this page further based on your project's
        requirements.
      </p>
      <p className="text-lg mb-8">
        If you need assistance, feel free to reach out!
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        // onClick={handleAction}
      >
        Action Button
      </button>
    </div>
  );
};

export default Home;
