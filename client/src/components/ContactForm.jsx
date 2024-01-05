import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SnackbarProvider, useSnackbar } from "notistack";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const { enqueueSnackbar } = useSnackbar();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9tx6fii",
        "template_0klkkfh",
        form.current,
        "xjBSn2bwYZOCQYHSC"
      )
      .then(
        (result) => {
          console.log(result.text);
          enqueueSnackbar("Message Sent successfully", { variant: "success" });
        },
        (error) => {
          console.log(error.text);
          enqueueSnackbar("Error in sending email", { variant: "error" });
        }
      );
  };

  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <form ref={form} onSubmit={sendEmail}>
          <div className=" px-80 pt-4">
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>
          <div className="px-80 pt-4">
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>
          <div className="px-80 pt-4">
            <textarea
              placeholder="Your message"
              name="message"
              className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
              required
            />
          </div>

          <div className="px-80 pt-4">
            <button
              className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear text-center bg-blue-500 rounded shadow outline-none"
              type="submit">
              Send a message
            </button>
          </div>
        </form>
      </SnackbarProvider>
    </>
  );
};

export default Contact;

// Styles
