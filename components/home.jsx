"use client";
import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen my-10 lg:my-20">
      {/* Hero Section */}
      <div className="bg-blue-500 py-20 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Automate Your Finances
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Streamline savings, investing, budgeting, and debt management with
            our intuitive mobile app.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact">
              <p className="bg-white text-blue-500 hover:bg-blue-100 font-bold py-3 px-6 rounded-full">
                Contact
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How Our App Can Help You
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Our mobile app provides powerful tools to automate your financial
            management and achieve your goals.
          </p>
          <ul className="text-left">
            <li className="mb-4">
              <span className="font-bold">Savings:</span> Automatically save a
              portion of your income and track your progress.
            </li>
            <li className="mb-4">
              <span className="font-bold">Investing:</span> Easily invest in
              stocks, bonds, and other assets with our user-friendly platform.
            </li>
            <li className="mb-4">
              <span className="font-bold">Budgeting:</span> Set budgets, track
              expenses, and stay on top of your spending habits.
            </li>
            <li className="mb-4">
              <span className="font-bold">Debt Management:</span> Strategize
              debt payoff and monitor your debt-free journey.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
