export default function HeroSection() {
  return (
    <>
      <div className="w-full h-[100%] flex justify-center items-center pt-10">
        <div className="w-[75%] h-[75%] p-6 text-white bg-white rounded-lg shadow bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className=" text-white w-30 h-full flex justify-center items-center">
              Hello
            </div>

            <div className="w-30 text-[75px] p-5 drop-shadow-lg flex items-center">
              Welcome, Take A Look Around!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <img
                src="../src/assets/ME.png"
                alt="me"
                className="h-[600px] rounded-xl shadow-xl"
              /> */
}
