function LandingPage() {
  return (
    <>
      <div className="grid w-[100%] h-screen bg-primary">
        <div className="place-self-center w-[80%] h-[80%] bg-action">
          <div className="grid grid-cols-3 place-content-center w-[100%] h-[100%]">
            <div className="text-right text-white">Welcome message</div>
            <div className="text-center text-white">|</div>
            <div className="test-left text-white">Details</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
