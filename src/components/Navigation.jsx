const Navigation = ({ items }) => {
  return (
    <>
      <div className="bg-white text-white shadow bg-opacity-20 backdrop-blur-lg drop-shadow-lg w-full flex justify-end flex-row p-5 fixed z-40">
        <ul className="flex flex-row space-x-8 mr-[165px]">
          {items.map((item, index) => (
            <li key={index} className="drop-shadow-lg mx-2">
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
