import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Home Page",
  description: "This is my Home Page Discription",
};

const HomePage = async () => {
  const respone = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });
  const SohesData = await respone.json();
  // throw new Error("Home Page Error");

  return (
    <>
      <h1 className="text-4xl text-center"> This Is my Home Page Two</h1>

      <div className="grid lg:grid-cols-4 gap-4 m-3">
        {SohesData?.slice(0, 4)?.map((v, index) => (
          <div key={index} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {v.title}
                <div className="badge badge-secondary">Price :{v?.price}</div>
              </h2>
              <p>{v?.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline btn-sm text-black btn btn-primary">
                  Buy Now
                </div>
                <div className="badge badge-outline text-black btn-sm btn btn-primary">
                  Details
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex justify-center">
        <Link
          href="/allshoes"
          className="badge badge-outline text-black  btn btn-primary">
          See More
        </Link>
      </div>
    </>
  );
};

export default HomePage;
