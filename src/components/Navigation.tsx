import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 968;

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      {isMobile ? (
        <div className="absolute top-0 right-0 mt-5 mr-5 grid grid-rows-fr gap-2 bg-primary bg-opacity-80 z-50 rounded-xl">
          <div
            className="flex justify-around flex-col flex-nowrap z-10 w-[2rem] h-[2rem] place-self-end"
            onClick={toggleHamburger}
          >
            <div className="w-[2rem] h-[0.25rem] rounded bg-white" />
            <div className="w-[2rem] h-[0.25rem] rounded bg-white" />
            <div className="w-[2rem] h-[0.25rem] rounded bg-white" />
          </div>

          <div>
            {hamburgerOpen ? (
              <div className="grid grid-rows-4 gap-y-10 px-4 pb-2">
                {/* Home */}
                <Link
                  to="/"
                  className="grid grid-flow-col auto-cols-max gap-x-5 text-white place-self-start transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                  onClick={toggleHamburger}
                >
                  <svg
                    className="place-self-end"
                    fill="none"
                    height="24"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21H15M9 21V17C9 15.3431 10.3431 14 12 14V14C13.6569 14 15 15.3431 15 17V21M9 21H15"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div>Home</div>
                </Link>

                {/* About me */}
                <Link
                  to="/about"
                  className="grid grid-flow-col auto-cols-max gap-x-5 text-white place-self-start transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                  onClick={toggleHamburger}
                >
                  <svg
                    className="place-self-end"
                    fill="none"
                    height="24"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.90039 8.07954C7.90039 3.30678 15.4004 3.30682 15.4004 8.07955C15.4004 11.4886 11.9913 10.8067 11.9913 14.8976"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 19.01L12.01 18.9989"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div>About Me</div>
                </Link>

                {/* Projects */}
                <Link
                  to="/projects"
                  className="grid grid-flow-col auto-cols-max gap-x-5 text-white place-self-start transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                  onClick={toggleHamburger}
                >
                  <svg
                    className="place-self-end"
                    fill="none"
                    height="24"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6H20H22"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.4 20H2.6C2.26863 20 2 19.7314 2 19.4V11H21.4C21.7314 11 22 11.2686 22 11.6V19.4C22 19.7314 21.7314 20 21.4 20Z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 11V4.6C2 4.26863 2.26863 4 2.6 4H8.77805C8.92127 4 9.05977 4.05124 9.16852 4.14445L12.3315 6.85555C12.4402 6.94876 12.5787 7 12.722 7H14"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div>Projects</div>
                </Link>

                {/* Contact Me */}
                <Link
                  to="/contact"
                  className="grid grid-flow-col auto-cols-max gap-x-5 text-white place-self-start transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                  onClick={toggleHamburger}
                >
                  <svg
                    className="place-self-end"
                    fill="none"
                    height="24"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 12L11 15L16 10"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div>Contact</div>
                </Link>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="absolute top-0 right-0">
            <div className="grid grid-flow-col-dense mt-5 mr-48 gap-5">
              {/* Home */}
              <Link
                to="/"
                className="grid grid-flow-col auto-cols-max gap-x-3 text-white place-self-end transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              >
                <svg
                  className="place-self-end"
                  fill="none"
                  height="24"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21H15M9 21V17C9 15.3431 10.3431 14 12 14V14C13.6569 14 15 15.3431 15 17V21M9 21H15"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>Home</div>
              </Link>

              {/* About me */}
              <Link
                to="/about"
                className="grid grid-flow-col auto-cols-max gap-x-3 text-white place-self-end transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              >
                <svg
                  className="place-self-end"
                  fill="none"
                  height="24"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.90039 8.07954C7.90039 3.30678 15.4004 3.30682 15.4004 8.07955C15.4004 11.4886 11.9913 10.8067 11.9913 14.8976"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 19.01L12.01 18.9989"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>About Me</div>
              </Link>

              {/* Projects */}
              <Link
                to="/projects"
                className="grid grid-flow-col auto-cols-max gap-x-3 text-white place-self-end transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              >
                <svg
                  className="place-self-end"
                  fill="none"
                  height="24"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6H20H22"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.4 20H2.6C2.26863 20 2 19.7314 2 19.4V11H21.4C21.7314 11 22 11.2686 22 11.6V19.4C22 19.7314 21.7314 20 21.4 20Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 11V4.6C2 4.26863 2.26863 4 2.6 4H8.77805C8.92127 4 9.05977 4.05124 9.16852 4.14445L12.3315 6.85555C12.4402 6.94876 12.5787 7 12.722 7H14"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>Projects</div>
              </Link>

              {/* Contact Me */}
              <Link
                to="/contact"
                className="grid grid-flow-col auto-cols-max gap-x-3 text-white place-self-end transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              >
                <svg
                  className="place-self-end"
                  fill="none"
                  height="24"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12L11 15L16 10"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>Contact</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
