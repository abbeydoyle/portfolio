import React, { useState } from "react";
import emailjs from "emailjs-com";
import MessageAlert from "../components/MessageAlert";

const svgStyle = {
  height: "560px",
  width: "100%",
  zIndex: "-10",
  overflow: "hidden",
  marginTop: "10vw",
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [showMessageModal, setshowMessageModal] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_8d2kh4s";
      const templateId = "template_2jx1965";
      const userId = "cAKDVSNdfmuFAqd55";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
      setshowMessageModal(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="svg absolute hidden lg:block"
        style={svgStyle}
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgb(242,235,230)" offset="0%"></stop>
            <stop stopColor="rgb(210,183,164)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
        ></path>
      </svg>

      <h1 className="text-center pt-5 pb-5 text-[#3F5451] font-bold">
        Contact me
      </h1>
      <div className="grid grid-cols-2 w-full">
        <aside className="w-full self-center">
          <h4 className="text-[#312218] pb-2">Thank you for visiting!</h4>
          <p className="text-[#36261b]">
            This personal site was built entirely by me using the following technologies:
          </p>
          <p className="text-[#36261b]">
            HTML, CSS, JavaScript, EmailJS, NodeJs, TailwindCSS, CSS-in-JS, React, AWS
          </p>
          <p className="text-[#36261b]">
            Please use this contact form for any site feedback or professional inquiries.
          </p>
          <p className="text-[#36261b] text-sm">
            Check out the site on your phone!
          </p>
        </aside>
        <form className="w-full flex flex-col items-center">
          <div className="relative z-0 w-full mb-6 group border-b-2 border-[#885f43] peer-focus:border-[#573d2b]">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-[#573d2b] bg-transparent border-0 border-b-2 border-[#885f43] appearance-none focus:outline-none focus:ring-0 focus:border-[#573d2b] peer"
              placeholder=" "
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label

              className="peer-focus:font-medium absolute text-sm text-[#78543b] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#573d2b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group border-b-2 border-[#885f43] peer-focus:border-[#573d2b]">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-[#573d2b] bg-transparent border-0 border-b-2 border-[#885f43] appearance-none focus:outline-none focus:ring-0 focus:border-[#573d2b] peer"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label

              className="peer-focus:font-medium absolute text-sm text-[#78543b] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#573d2b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group border-b-2 border-[#885f43] peer-focus:border-[#573d2b]">
            <input
              type="text"
              name="floating_text"
              id="floating_text"
              className="block py-2.5 px-0 w-full text-sm text-[#573d2b] bg-transparent border-0 border-b-2 border-[#885f43] appearance-none focus:outline-none focus:ring-0 focus:border-[#573d2b] peer"
              placeholder=" "
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label

              className="peer-focus:font-medium absolute text-sm text-[#78543b] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#573d2b] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-2 p-2.5 flex-1 text-white hover:bg-[#825c40] bg-[#624530] rounded-md outline-none ring-offset-2 ring-[#825c40] focus:ring-2 text-sm sm:w-auto px-5 py-2.5 text-center"
            onClick={submit}
          >
            Submit
          </button>
        </form>
      </div>
      {showMessageModal && <MessageAlert setOpenMessageModal={setshowMessageModal} />}
    </>
  );
};

export default Contact;
