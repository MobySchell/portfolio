import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function LandingPage() {
  // useEffect(() => {
  //   const saveLastVisitedPage = () => {
  //     localStorage.setItem("lastVisitedPage", "/");
  //   };

  //   saveLastVisitedPage();
  // }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      <div className="grid w-[100%] h-screen bg-primary">
        <div className="place-self-center w-[90%] md:w-fit lg:md:w-fit h-fit bg-secondary rounded-lg px-5 py-5">
          <div className="grid place-content-center w-[100%] h-[100%] gap-8">
            <div className="text-white font-extrabold text-3xl lg:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
              Hi I'm Joshua{" "}
              <span className="text-white inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] lg:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
                  <li>a Web Developer</li>
                  <li>a Leader</li>
                  <li>a Mentor</li>
                  <li>a Hardware Guru</li>
                  <li>an Explorer</li>
                  <li aria-hidden="true">a Web Developer</li>
                </ul>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 w-[100%] mt-2">
            <div className="grid text-white content-center font-semibold">
              Get to know me
            </div>
            <div className="place-self-end ">
              <div className="absolute animate-my-pingg">
                <svg
                  data-name="Layer 1"
                  height="50"
                  id="Layer_1"
                  viewBox="0 0 200 200"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path
                    fill="#FFFFFF"
                    d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165ZM97.5,57.5a9.9,9.9,0,0,0-14,14L112,100,83.5,128.5a9.9,9.9,0,0,0,14,14L126,114a19.92,19.92,0,0,0,0-28.5Z"
                  />
                </svg>
              </div>
              <Link to="/about" className="relative">
                <svg
                  data-name="Layer 1"
                  height="50"
                  id="Layer_1"
                  viewBox="0 0 200 200"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path
                    fill="#FFFFFF"
                    d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165ZM97.5,57.5a9.9,9.9,0,0,0-14,14L112,100,83.5,128.5a9.9,9.9,0,0,0,14,14L126,114a19.92,19.92,0,0,0,0-28.5Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default LandingPage;
