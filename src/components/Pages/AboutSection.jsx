export default function AboutSection() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-[#264A61] from-10% via-[#07162B] via-30% to-[#78949E] to-90%">
        <div className="grid grid-cols-2 w-[80%] h-[75%]">
          <div className="bg-white rounded-l-lg flex justify-center items-center">
            <div className="bg-slate-300 w-[80%] h-[80%] rounded-lg">
              Headshot
            </div>
          </div>
          <div className="bg-slate-600 rounded-r-lg flex justify-center items-center">
            <div className="bg-gray-500 w-[80%] h-[80%] grid grid-cols-2 grid-rows-3">
              <div className="col-span-2 bg-red-600">Summary Of Myself</div>
              <div className="grid grid-cols-2 gap-2 col-span-2">
                <div className="bg-amber-400">Key Skills</div>
                <div className="bg-amber-400">Achievements</div>
              </div>
              <div>
                <button>Test</button>
                <button>Test</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Todo: Headshot
// Todo: Key skills and expertise
// Achievements
// Work Philosophy
// More sections - Hobbies, Testimonials, contact information etc.
