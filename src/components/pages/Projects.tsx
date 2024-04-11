import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      <div className="grid w-[100%] h-screen bg-primary">
        <div className="w-[90%] md:w-[80%] h-[80%] place-self-center bg-secondary rounded-lg p-5 mt-[32px]">
          <div className="grid place-content-center w-[100%] h-[100%]">
            <div className=" text-white">
              Currently Still Building Projects To Showcase 👷
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
