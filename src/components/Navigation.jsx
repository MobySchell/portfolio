export default function Navigation() {
  return (
    <>
      <div className="w-full bg-slate-950 text-white flex flex-row items-center h-12 fixed top-0 left-0 right-0">
        <div className="basis-2/3 px-10">Logo</div>
        <div className="basis-1/3 flex flex-row bg-slate-400 h-full items-center">
          <div className="px-8">Home</div>
          <div className="px-8">About</div>
          <div className="px-8">Contact</div>
        </div>
      </div>
    </>
  );
}
