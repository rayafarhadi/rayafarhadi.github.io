import React from "react";

const ContactSection = () => {
  return (
    <div className="text-white grid grid-cols-2 mt-4 py-8">
      <div>
        <h5 className="text-xl font-bold my-2">Let&apos;s Connect</h5>
        <p className="text-text-secondary mb-2 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed
          augue lacus viverra vitae congue eu consequat. Feugiat in ante metus
          dictum at tempor commodo.
        </p>
        <div className="flex flex-row">
          <div>LinkedIn Icon</div>
          <div>Github Icon</div>
        </div>
      </div>
      <form className="flex flex-col gap-4 pl-4">
        <div className="flex flex-col">
          <label
            htmlFor="emailInput"
            className="block mb-2 text-sm font-medium"
          >
            Your Email
          </label>
          <input
            type="email"
            id="emailInput"
            required
            placeholder="myname@example.com"
            className="bg-background-secondary border border-[#333333] placeholder-[#8191a3] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="subjectInput"
            className="block mb-2 text-sm font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            id="subjectInput"
            required
            placeholder="Just saying hello!"
            className="bg-background-secondary border border-[#333333] placeholder-[#8191a3] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="messageInput"
            className="block mb-2 text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="messageInput"
            required
            placeholder="Hello! My name is..."
            className="bg-background-secondary border border-[#333333] placeholder-[#8191a3] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <button
          type="submit"
          className=" bg-gradient-to-br theme-gradient font-medium py-2 px-4 rounded-lg w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
