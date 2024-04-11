import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      <div className="grid w-[100%] h-screen max-h-full bg-primary text-white">
        <div className="grid mt-[32px] place-self-center w-[90%] lg:w-[50%] h-fit bg-secondary rounded-lg p-5">
          <div className="w-[100%] h-[100%] lg:grid lg:grid-cols-2 lg:gap-6 p-2">
            <div>
              <div className="mb-10">
                <div className="text-white text-xl font-semibold">
                  Get In Touch
                </div>
                <div className="grid gap-5 mt-4">
                  <input
                    type="text"
                    className="bg-white rounded-lg drop-shadow-lg h-12 px-2"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="bg-white rounded-lg drop-shadow-lg h-12 px-2"
                    placeholder="Email"
                  />
                  <textarea
                    className="bg-white rounded-lg drop-shadow-lg h-36 px-2 pt-3 align-top"
                    placeholder="Greetings"
                  />
                  <input
                    type="submit"
                    value="Send Away"
                    className="bg-action rounded-md drop-shadow-lg px-5 py-2 w-[40%] place-self-center transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                  />
                </div>
              </div>
            </div>
            {/* Socials and some info */}
            <div className="grid place-content-center">
              <div className="grid grid-rows-2 w-[80%] gap-5 place-self-center">
                <div className="w-[100%]">Cape Town, South Africa</div>
                <div className="grid grid-cols-2 gap-5 place-self-center">
                  {/* LinkedIn */}
                  <Link
                    className="grid place-content-center w-[50px] h-[50px] bg-action rounded-xl px-2 shadow-xl transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                    to="https://www.linkedin.com/in/joshua-schell-0b2226182/"
                    target="_blank"
                  >
                    <svg
                      height="48px"
                      id="Layer_1"
                      version="1.1"
                      viewBox="0 0 512 512"
                      width="100%"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        className="st0"
                        d="M182.8,384V212.9h-54.9V384H182.8L182.8,384z M157.4,187c18.3,0,29.7-13.1,29.7-29.5    c-0.3-16.7-11.4-29.5-29.4-29.5c-18,0-29.7,12.8-29.7,29.5c0,16.4,11.4,29.5,29,29.5H157.4L157.4,187z"
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                      />
                      <path
                        className="st0"
                        d="M320.6,209c-29.1,0-41.6,16.4-49.6,27.8V213h-55v171h55v-97.4c0-5,0.4-10,1.9-13.5c4-10,13-20.3,28.2-20.3    c19.9,0,27.9,15.3,27.9,37.7V384h55v-99.9C384,232.8,356.8,209,320.6,209z"
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                      />
                      <path
                        d="M417.2,64H96.8C79.3,64,64,76.6,64,93.9v321.1c0,17.4,15.3,32.9,32.8,32.9h320.3c17.6,0,30.8-15.6,30.8-32.9V93.9   C448,76.6,434.7,64,417.2,64z M414,416c-1.1,0-313.1,0-314.9,0s-3.1-1.4-3.1-3.1S96,99.1,96,98s1-2,2-2s315,0,316,0s2,1,2,2   c0,23.3,0,314.9,0,316C416,414.9,415.1,416,414,416z"
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </Link>
                  {/* Github */}
                  <Link
                    className="grid place-content-center w-[50px] h-[50px] bg-action rounded-xl shadow-xl transition ease-in-out delay-50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                    to="https://github.com/MobySchell"
                    target="_blank"
                  >
                    <svg
                      enable-background="new 0 0 32 32"
                      height="32px"
                      id="Layer_1"
                      version="1.0"
                      viewBox="0 0 32 32"
                      width="100%"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  
                    c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  
                    c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  
                    c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  
                    c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  
                    c0,0,1.343-0.43,4.398,1.641c1.276-0.300000055,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  
                    c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  
                    c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  
                    C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
                        fill="#FFFFFF"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
