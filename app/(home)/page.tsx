import CustomSwiper from "@/component/common/custom-swiper";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Home() {
  const categories = [
    { id: 1, name: "All categories", url: "/" },
    { id: 2, name: "Clothing", url: "/clothing" },
    { id: 3, name: "Shoes", url: "/shoes" },
    { id: 4, name: "Bags", url: "/bags" },
    { id: 5, name: "Electronics", url: "/electronics" },
    { id: 6, name: "Gaming", url: "/gaming" },
  ];

  async function Products() {
    const products = await fetch("https://fakestoreapi.com/products");
    const productsJson = await products.json();
    return (
      <>
        {productsJson.map((v: Product, i: number) => {
          return (
            <div key={i} className="h-auto max-w-full drop-shadow-xl">
              <Image
                src={v.image}
                alt={v.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-80 border-8 border-white rounded-lg"
              />
            </div>
          );
        })}
      </>
    );
  }
  return (
    <div>
      {/* 카테고리 */}
      <CustomSwiper arr={categories} />

      {/* 리스트 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4  ">
        <Products />
        {/* <div className="h-auto max-w-full rounded-lg">
          <Image
            src={
              "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            }
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
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
        </div> */}
      </div>
    </div>
  );
}
