export default function ContactSection() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[80%] h-[75%] p-6 text-white bg-white rounded-lg shadow bg-opacity-20 backdrop-blur-lg drop-shadow-lg flex justify-center items-center">
          <div className="w-[80%] h-[80%]">
            <div className="grid grid-cols-2 gap-9 w-[100%] h-[100%]">
              <div className="bg-black flex justify-center items-center">
                Location, image
              </div>
              <div className="bg-white text-black flex justify-center items-center">
                Contact form
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
