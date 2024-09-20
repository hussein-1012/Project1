"use client";
import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_5eb2ocs", // Your service ID
          "template_r0p4cmy", // Your template ID
          form.current,
          "NN6-BFA97PHDxPilm" // Your public key from EmailJS
        )
        .then(
          (result) => {
            console.log("Message sent successfully:", result.text);
          },
          (error) => {
            console.error("Message failed to send:", error.text);
          }
        );
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center">
      <div className="bg-black text-yellow-500 w-full max-w-lg p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center"><u>Contact_Us</u></h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <div>
            <label className="block mb-2 text-yellow-400">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Type Your Name"
              className="w-full p-3 rounded-lg text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block mb-2 text-yellow-300">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Type Your Email"
              className="w-full p-3 rounded-lg text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block mb-2 text-yellow-300">Message</label>
            <textarea
              name="message"
              placeholder="Type Your Message"
              className="w-full p-3 rounded-lg  text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32"
            />
          </div>
          <input
            type="submit"
            value="Send"
            className="bg-yellow-400 text-gray-900 py-2 rounded-lg cursor-pointer hover:bg-yellow-500 transition-colors duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
