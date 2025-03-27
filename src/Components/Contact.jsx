import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg leading-relaxed mb-6 text-center">
          We would love to hear from you! Feel free to reach out using the form
          below.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-lg font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700"
              placeholder="Write your message here"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    // <div>
    //   <CartComponent />
    // </div>
  );
};

export default ContactUs;
