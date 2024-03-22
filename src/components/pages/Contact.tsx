const Contact: React.FC = () => {
  return (
    <>
      <div className="grid w-[100%] h-screen bg-primary">
        <div className="grid mt-[32px] place-self-center w-[90%] md:w-[80%] h-[80%] bg-action rounded-lg p-5">
          <div className="w-[100%] h-[100%] ">
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
                <input
                  type="text"
                  className="bg-white rounded-lg drop-shadow-lg h-36 px-2"
                  placeholder="Greetings"
                />
                <input
                  type="submit"
                  value="Send Away"
                  className="bg-white rounded-md px-5 py-1 w-[50%] place-self-center"
                />
              </div>
            </div>
            {/* Socials and some info */}
            <div className="grid grid-cols-2">
              {/* LinkedIn */}
              <div>
                <svg
                  height="50px"
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="100%"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 
                  -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 
                  -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 
                  38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z"
                  />
                </svg>
              </div>
              {/* Github */}
              <div>
                <svg
                  enable-background="new 0 0 32 32"
                  height="50px"
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
                    fill="#000000"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
