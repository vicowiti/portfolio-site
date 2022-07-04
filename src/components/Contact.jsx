import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4 text-gray-300"
    >
      <form
        action="https://getform.io/f/2e3b62f2-d020-4f0d-a749-80cd7a87c6a7"
        method="POST"
        className="flex flex-col max-w-[600px] w-full text-black"
      >
        <div className="pb-8">
          <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-green-600 ">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            Submit the form below and shoot me an email
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          className="bg-[#ccd6f6] p-2"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="20"
          placeholder="Message"
        ></textarea>

        <button className="text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center">
          Lets Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
