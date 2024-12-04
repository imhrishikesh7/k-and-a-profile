import React from 'react';

const Navigation = ({ theme, page }) => {
  return (
    <div className="fixed bottom-6 m-auto flex justify-center items-center ">
      <div className="w-[90%]  pt">
        {theme === 'black' ? (
          <img src="/images/Navigation-in-black.webp" alt="Navigation in Black" />
        ) : (
          <img src="/images/Navigation-in-white.png" className="mix-blend-multiply" alt="Navigation in White" />
        )}
      </div>
      <div className="ml-4 h-full ">
        <p className={`text-[0.8rem] ${theme === 'white' ? 'text-white' : 'text-black'}`}>
          {page}
        </p>
      </div>
    </div>
  );
};

export default Navigation;
