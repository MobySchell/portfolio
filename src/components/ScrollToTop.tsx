import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="fixed bottom-0 right-0 mr-4 lg:mr-20 mb-4 lg:mb-20">
        {showTopBtn ? (
          <div className="" onClick={goToTop}>
            <svg
              className="bg-action rounded-full border-4"
              fill="none"
              height="64"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="17 11 12 6 7 11" />
              <polyline points="17 18 12 13 7 18" />
            </svg>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default ScrollToTop;
