import React from "react";

const Descriptionbox = () => {
  return (
    <div className="mx-4 lg:mx-36 my-10 font-poppins">
      <div className="flex border-b border-gray-300">
        <div className="flex items-center justify-center text-sm lg:text-base font-semibold w-36 h-14 lg:w-40 lg:h-16 border-b-2 border-gray-300">
          Description
        </div>
        <div
          className="flex items-center justify-center text-sm lg:text-base font-semibold w-36 h-14 lg:w-40 lg:h-16 bg-gray-100 text-gray-600"
        >
          Reviews (122)
        </div>
      </div>

      <div className="flex flex-col gap-2 border border-gray-300 p-6 text-sm lg:text-base">
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
    </div>
  );
};

export default Descriptionbox;
