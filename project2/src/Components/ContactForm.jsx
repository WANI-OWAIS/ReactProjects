import React from "react";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import Button from "./Button";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target.name.value);
    setEmail(event.target.email.value);
    setText(event.target.text.value);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side: Buttons + Form */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-7 mb-4">
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize={24} />}
            />
            <Button text="VIA PHONE CALL" icon={<IoCall fontSize={24} />} />
          </div>

          <button className="flex items-center justify-center gap-2 px-50 py-3 bg-white text-black border border-black rounded-md cursor-pointer font-semibold mb-5">
            <MdMail fontSize={24} />
            VIA EMAIL FORM
          </button>

          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="text" className="block mb-1 font-medium">
                Text
              </label>
              <textarea
                name="text"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <Button text="SUBMIT" />
            </div>

            <div>{name + " " + email + " " + text}</div>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center items-start">
          <img
            src="/Images/contact.svg"
            alt="contact"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
