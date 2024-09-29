"use client";
import { ChangeEvent, useState } from "react";

export default function Tags() {
  const maxLength = 5;
  const tags = ["감성", "장기자랑", "숨듣명", "과몰입", "내 장례식 브금"]; // base 데이터 만들기?
  const [values, setValues] = useState(Array<string>);

  const addTag = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      return;
    }

    setValues((prev) =>
      [...prev, e.target.value].filter((_, i) => {
        // max초과 시 앞에서 삭제
        const length = prev.length + 1;
        return length <= maxLength || i >= length - maxLength;
      })
    );
  };

  const removeTag = (value: string) => {
    setValues((prev) => prev.filter((v) => v !== value));
  };

  return (
    <>
      <label
        htmlFor="tag"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        태그<span className="text-xs">Tag</span> ({maxLength}개까지)
      </label>
      <select
        id="tag"
        onChange={addTag}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">이 곡은...</option>
        {tags.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </select>

      <div className="mt-2">
        {values.map((v, i) => (
          <kbd
            key={i}
            className="inline-flex items-center px-2 py-1.5 mr-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
          >
            {v}
            &nbsp;
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              onClick={() => removeTag(v)}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
            <input type="hidden" name="tag" value={v} />
          </kbd>
        ))}
      </div>
    </>
  );
}
