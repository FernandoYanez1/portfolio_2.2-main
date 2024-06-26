import Image from "next/image";
import React from "react";

const NavBarLogo = () => {
  return (
    <div className="flex items-center justify-center border-2 border-white p-1 rounded-lg  shadow-[5px_5px_0px_0px_rgba(155,179,203)] cursor-pointer">
      <Image
        src="/images/Terno.jpeg"
        alt="logo"
        width={38}
        height={38}
        className="rounded-lg"
      />
      <h1 className=" font-bold  ml-1">FernandoYañez</h1>
    </div>
  );
};

export default NavBarLogo;
