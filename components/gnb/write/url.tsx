"use client";

import { useState } from "react";

export default function WriteUrl() {
  const [url, setUrl] = useState("");
  const [before, setBefore] = useState("");
  const [after, setAfter] = useState("");

  const modifyUrl = () => {
    const regex = /(?<=src=").*?(?=[\*"])/g;
    const found = before.match(regex)?.join("") || "";
    setAfter(found);
  };

  return (
    <>
      <label
        htmlFor="url"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        링크
        <span className="text-xs">(embed 링크를 입력하세요)</span>
        <div className="group inline">
          <button type="button">
            <svg
              className="w-4 h-4 text-gray-400 hover:text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Show information button</span>
          </button>
          <div
            role="tooltip"
            className="invisible opacity-0 group-hover:visible group-hover:opacity-100 z-10 absolute left-1/2 md:left-1/3 transform -translate-x-1/2 block w-screen md:w-96 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
          >
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="p-4 md:p-5">
                <div>
                  <label
                    htmlFor="before"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    modify url
                  </label>
                  <input
                    type="input"
                    id="before"
                    value={before}
                    onChange={(e) => setBefore(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder='<iframe width="560" height="315" ...'
                  />
                </div>
                <button
                  type="button"
                  className="py-2.5 px-5 my-1.5 mx-auto flex justify-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={modifyUrl}
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19V5m0 14-4-4m4 4 4-4"
                    />
                  </svg>
                </button>
                <div>
                  <input
                    type="input"
                    value={after}
                    onChange={(e) => setAfter(e.target.value)}
                    placeholder="https://www.youtube.com/embed/"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setUrl(after)}
                  className="w-full mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  적용
                </button>
              </div>
            </div>
          </div>
        </div>
      </label>

      <input
        type="text"
        id="url"
        name="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="https://www.youtube.com/embed/"
        required
      />
    </>
  );
}
