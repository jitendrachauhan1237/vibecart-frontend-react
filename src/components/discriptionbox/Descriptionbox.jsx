import React, { useState } from "react";

const Descriptionbox = () => {
  const [activeTab, setActiveTab] = useState("description");



  return (
    <div className="mx-4 lg:mx-36 my-10 font-poppins">
     
      <div className="flex border-b border-gray-300 relative">
        <div
          className={`flex items-center justify-center text-sm lg:text-base font-semibold w-36 h-14 lg:w-40 lg:h-16 border-b-2 border-gray-300 ${
            activeTab === "description"
              ? "border-b-2 border-blue-500 text-blue-600 bg-gray-100"
              : "text-gray-600 hover:text-blue-500"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </div>
        <div
          className={`flex items-center justify-center text-sm lg:text-base font-semibold w-36 h-14 lg:w-40 lg:h-16  text-gray-600 ${
            activeTab === "reviews"
              ? "border-b-2 border-blue-500 text-blue-600 bg-gray-100"
              : "text-gray-600 hover:text-blue-500 "
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (122)
        </div>
      </div>

      {/* Tab Content */}
      <div className="border border-gray-300 p-6 text-sm lg:text-base mt-2 shadow-lg rounded-lg transition-all duration-300">
        {activeTab === "description" ? (
          <div className="space-y-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum
              quaerat recusandae sapiente nobis quis veniam ex ipsam aut inventore
              obcaecati minima numquam blanditiis voluptatibus, magni perspiciatis
              nemo possimus? Minus delectus dolores perferendis reiciendis ratione
              nobis quam eum placeat illum, unde sit voluptate in beatae, velit
              autem, amet tempora incidunt?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae esse
              perspiciatis dolorum nisi iste quae iusto aut provident, reprehenderit
              eaque labore est voluptas facere! Rerum nesciunt debitis alias
              deserunt voluptatibus voluptatum temporibus labore hic exercitationem,
              facilis sapiente aperiam facere magnam recusandae nulla repellat illum
              beatae aut quas, excepturi deleniti suscipit!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-700">Customer Reviews</h3>
            <p className="text-gray-600">
              ★★★★★ - "Amazing product! Highly recommend."
            </p>
            <p className="text-gray-600">
              ★★★★☆ - "Good quality but delivery was a bit slow."
            </p>
            <p className="text-gray-600">
              ★★★★☆ - "Decent for the price. Would buy again."
            </p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
              Write a Review
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Descriptionbox;
