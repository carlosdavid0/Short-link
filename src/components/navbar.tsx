import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<string>();
  useEffect(() => {
    const tema = localStorage.getItem("theme");

    if (tema) {
      setTheme(tema);
      if (tema == "dark") {
        const body = document.querySelector("body");
        body?.classList.toggle("dark");
      }
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <nav>
      <div className="flex items-center justify-between flex-wrap bg-gray-100 dark:bg-gray-800 p-6">
        <div className="w-full block flex-grow lg:flex justify-end lg:items-center lg:w-auto">
          <div>
            <label
              htmlFor="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                checked={theme === "dark" ? true : false}
                onChange={(e) => {
                  const body = document.querySelector("body");
                  body?.classList.toggle("dark");
                  localStorage.setItem(
                    "theme",
                    e.target.checked ? "dark" : "light"
                  );
                  setTheme(e.target.checked ? "dark" : "light");
                }}
                id="default-toggle"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-white-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white-900"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
