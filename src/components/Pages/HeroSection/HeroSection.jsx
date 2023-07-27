export default function HeroSection() {
  return (
    <>
      <div className="w-full h-[100%] flex justify-center items-center pt-10">
        <div className="w-[75%] h-[75%] p-6 text-white bg-white rounded-lg shadow bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
          <div className="w-full h-full">
            <div className="">
              <img
                src="../src/assets/ME.png"
                alt="me"
                className="h-72 rounded-xl shadow-xl"
              />
            </div>
            <div>
              <h1 className="uppercase">welcome joshua schell here</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
