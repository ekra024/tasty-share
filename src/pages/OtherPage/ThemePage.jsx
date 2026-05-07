import React, { useEffect, useState } from 'react';

const ThemePage = () => {
  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // remember last choice
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onChange={handleToggle} checked={theme === "dark"} />

      {/* sun icon */}
      <svg
        className="swap-off fill-current w-8 h-8 text-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64 17l-.7.71-1.41-1.41.71-.7zM11 3h2v3h-2zm7.36 14l.7.71 1.41-1.41-.71-.7zM4 11H1v2h3zm19 0h-3v2h3zM5.64 7.05L4.23 5.64 5.64 4.23 7.05 5.64zM17 21h-2v-3h2zm1.95-14.36l1.41-1.41-1.41-1.41L17.54 5.64zM12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>

      {/* moon icon */}
      <svg
        className="swap-on fill-current w-8 h-8 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64 13A9 9 0 1111 2.36 7 7 0 0021.64 13z" />
      </svg>
    </label>
  );
};

export default ThemePage;