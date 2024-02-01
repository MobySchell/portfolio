import { useEffect } from "react";

/* eslint-disable react/prop-types */
const Navigation = ({ items }) => {
  useEffect(() => {
    const nav = document.getElementById("nav");

    setTimeout(() => {
      window.addEventListener("load", function () {
        nav.style.transform = "translateX(0)";
      });
    }, 100);
  });
  return (
    <>
      <div
        id="nav"
        className="bg-white text-white shadow bg-opacity-20 backdrop-blur-lg drop-shadow-lg w-full flex justify-end flex-row p-5 fixed z-40 translate-x-[100%] duration-1000"
      >
        <ul className="flex flex-row mr-24">
          {items.map((item, index) => (
            <li key={index} className="drop-shadow-lg mx-5 p-1">
              <a
                className="hover:text-gray-950 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 rounded-md py-1 px-4"
                href={item.link}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
