import { addVideo } from "@/api/sample-api";
import Tags from "@/components/gnb/write/tag";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import React from "react";
import { text } from "stream/consumers";

export default async function WriteList() {
  // const fileRef = React.useRef<HTMLInputElement>(null);

  const saveVideo = async () => {
    "use server";
    try {
      await addVideo({
        title: "부티풀",
        contents: "컨텐츠 test1234",
        url: "https://www.youtube.com/embed/7MNlLXdEUwc?si=yFvhHJMBACaj-nAX",
        reg_id: "test1",
        rating: 0,
      });
    } catch (e) {
      console.log("에러");
    }
    // revalidatePath("/write");
  };

  return (
    <>
      <form className="max-w-5xl mx-auto text-left" action={saveVideo}>
        {/* Title */}
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            제목<span className="text-xs">Title</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {/* url */}
        <div className="mb-6">
          <label
            htmlFor="url"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {/* <p> */}
            링크
            <span className="text-xs">(embed 링크를 입력하세요)</span>
            <div className="group inline">
              <button
                // data-popover-target="popover-description"
                // data-popover-placement="bottom-end"
                type="button"
                // className="group"
              >
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
                // data-popover
                // id="popover-user-profile"
                role="tooltip"
                // invisible
                // opacity-0
                className="invisible opacity-0 group-hover:visible group-hover:opacity-100 z-10 absolute left-1/2 transform -translate-x-1/2 block w-3/5 h-3/5 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
              >
                <div className="p-3">
                  <div className="flex">
                    <Image
                      src="/youtube.png"
                      alt="guide"
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
            {/* </p> */}
          </label>
          <input
            type="text"
            id="url"
            name="url"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="https://www.youtube.com/embed/"
          />
        </div>
        {/* radio */}
        {/* <div className="">
          <label
            htmlFor="default-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Default input
          </label>
        </div>
        <div className="flex gap-4 mb-5">
          <div className="flex grow items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              id="bordered-radio-1"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Default radio
            </label>
          </div>
          <div className="flex grow items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input
              defaultChecked
              id="bordered-radio-2"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Checked state
            </label>
          </div>
        </div> */}
        {/* select */}
        <div className="mb-5">
          <Tags />
        </div>
        {/* textarea */}
        <div className="mb-5">
          <label
            htmlFor="contents"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            내용<span className="text-xs">Contents</span>
            <span className="float-right">(/200)</span>
          </label>
          <textarea
            id="contents"
            name="contents"
            rows={3}
            maxLength={200}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        {/* file */}
        <div className="mb-5">
          {/* <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div> */}

          {/* <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="user_avatar"
          >
            Upload file
          </label>

          {/* <img
            className="h-auto w-auto lg:max-w-lg rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt="image description"
            onClick={() => fileRef.current?.click()}
          /> */}
          {/*<svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M16 18H8l2.5-6 2 4 1.5-2 2 4Zm-1-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 18h8l-2-4-1.5 2-2-4L8 18Zm7-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
            />
          </svg> */}

          <input
            className="hidden block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            // ref={fileRef}
          />
        </div>

        {/* button */}
        <div className="mb-5">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Save
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}
