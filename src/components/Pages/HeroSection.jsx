export default function HeroSection() {
  return (
    <>
      <div className="w-full h-[100%] flex justify-center items-center pt-10">
        <div className="w-[80%] h-[75%] p-6 text-white bg-white rounded-lg shadow bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
          <div className="grid grid-cols-2 gap-2 h-full">
            <div className=" text-white w-30 h-full flex justify-center items-center bg-black">
              picture
            </div>

            <div className="w-30 drop-shadow-lg flex justify-center items-center">
              Summary
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
