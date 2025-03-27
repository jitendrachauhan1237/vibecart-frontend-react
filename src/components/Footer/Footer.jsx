import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-4 py-8 sm:px-6 md:px-8 lg:px-16 xl:px-20 bg-gray-100">
      <div className="flex items-center gap-5">
        <img src="/Assets/vibecart.png" alt="Logo" className="w-30 h-12" />
        {/* <p className="text-gray-800 text-3xl font-bold">VibeCart</p> */}
      </div>
      <ul className="flex flex-wrap justify-center gap-8 text-gray-700 text-lg">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-4">
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
          <img src="/Assets/instagram_icon.png" alt="Instagram" className="w-6 h-6" />
        </div>
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
          <img src="/Assets/pintester_icon.png" alt="Pinterest" className="w-6 h-6" />
        </div>
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
          <img src="/Assets/whatsapp_icon.png" alt="WhatsApp" className="w-6 h-6" />
        </div>
      </div>
      <div className="w-full mt-5">
        <hr className="border-t-2 border-gray-300" />
        <p className="text-gray-700 text-center mt-4">Copyright © 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
