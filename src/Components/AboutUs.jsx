import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to our web application, where convenience meets innovation. We are dedicated to providing our users with an exceptional online experience through seamless navigation, robust features, and user-centric designs.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Our mission is to simplify your day-to-day tasks by offering a platform that adapts to your needs. From intuitive interfaces to cutting-edge technologies, we strive to ensure that every interaction on our platform is smooth, fast, and efficient.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          We believe in continuous improvement and are committed to regularly updating our features to align with your evolving expectations. Our dedicated team works tirelessly to ensure a secure and enjoyable experience for every user.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Vision</h2>
        <p className="text-lg leading-relaxed mb-6">
          To become the leading platform in delivering tailored solutions that make your digital journey delightful and efficient.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>Innovation: Always seeking new ways to enhance our offerings.</li>
          <li>Customer First: Prioritizing your needs in every decision we make.</li>
          <li>Security: Ensuring the safety and privacy of your data.</li>
          <li>Continuous Improvement: Striving for excellence through regular enhancements.</li>
        </ul>
        <p className="text-lg leading-relaxed mt-8">
          Thank you for being a part of our journey. We look forward to growing with you and providing even better experiences in the future.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
