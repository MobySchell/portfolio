function LandingPage() {
  return (
    <>
      <div className="grid w-[100%] h-screen bg-primary">
        <div className="place-self-center w-[80%] h-[80%] bg-action">
          <div className="grid place-content-center w-[100%] h-[100%] gap-5">
            <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
              Hi I'm Joshua{" "}
              <span className="text-white inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
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
        </div>
      </div>
    </>
  );
}

export default LandingPage;
