import CustomSwiper from "@/component/common/custom-swiper";

export default function Home() {
  const categories = [
    { id: 1, name: "All categories", url: "/" },
    { id: 2, name: "Clothing", url: "/clothing" },
    { id: 3, name: "Shoes", url: "/shoes" },
    { id: 4, name: "Bags", url: "/bags" },
    { id: 5, name: "Electronics", url: "/electronics" },
    { id: 6, name: "Gaming", url: "/gaming" },
    { id: 6, name: "Gaming", url: "/gaming" },
    { id: 6, name: "Gaming", url: "/gaming" },
    { id: 6, name: "Gaming", url: "/gaming" },
    { id: 6, name: "Gaming", url: "/gaming" },
    { id: 6, name: "Gaming", url: "/gaming" },
    { id: 6, name: "Gaming", url: "/gaming" },
    { id: 6, name: "Gaming", url: "/gaming" },
    { id: 6, name: "Gaming", url: "/gaming" },
    { id: 6, name: "Gaming", url: "/gaming" },
    { id: 6, name: "last", url: "/gaming" },
  ];
  return (
    <div>
      {/* 카테고리 */}
      <CustomSwiper arr={categories} />

      {/* 리스트 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
