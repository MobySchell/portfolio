import "./App.css";

export default function App() {
  return (
    <>
      <div className="bg-[url('../src/assets/whalebackground.jpg')] bg-cover h-screen">
        <div className="w-full bg-slate-950 text-white flex flex-row items-center h-10">
          <div className="basis-2/3 px-10">Logo</div>
          <div className="basis-1/3 flex flex-row bg-slate-400 h-full items-center">
            <div className="px-8">Home</div>
            <div className="px-8">About</div>
            <div className="px-8">Contact</div>
          </div>
        </div>

        <div className="w-full h-full flex items-center justify-center">
          <div className="w-72 h-72 p-6 text-white bg-white rounded-lg shadow bg-opacity-20 backdrop-blur-lg drop-shadow-lg"></div>
        </div>
      </div>
      <div className="bg-gray-400 h-screen">
        <div className="text-white">
          <h1>Second Page</h1>
        </div>
      </div>
    </>
  );
}
