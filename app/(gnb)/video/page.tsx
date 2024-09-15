import Rating from "@/components/common/rating";

export default function Videos() {
  const temp = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
      {temp.map((v) => (
        <div
          className="w-full h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={v.id}
        >
          <div className="aspect-video w-full object-cover">
            <iframe
              width={560}
              height={315}
              src={`https://www.youtube.com/embed/7MNlLXdEUwc?si=yFvhHJMBACaj-nAX`}
              className="w-full h-full rounded-t-lg"
            ></iframe>
          </div>

          <div className="p-5">
            {/* <a href="#"> */}
            <div className="">
              <h5 className="line-clamp-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                오늘의 음악추천 😗 부 티 풀
              </h5>
              <p className="inline-block mr-1 text-sm text-gray-700 dark:text-gray-400">
                추천한 음잘알🎶
              </p>
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="mx-px inline-block text-gray-800 dark:text-white w-8 h-8 rounded-full"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                ))}
              <p className="ml-2 bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
                + 34명
              </p>
            </div>
            {/* </a> */}
            <p className="line-clamp-4 mb-3 font-normal text-gray-700 dark:text-gray-400">
              음악만이 나라에서 허락하는 유일한 마약이니까 어쩌구 <br />
              추천사유: 나만 혼자듣기 아쉬움
            </p>
            <Rating rate={3.1} />
          </div>
        </div>
      ))}
    </div>
  );
}
