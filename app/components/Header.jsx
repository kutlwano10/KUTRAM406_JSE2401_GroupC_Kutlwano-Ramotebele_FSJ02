
import Link from "next/link";
import Image from "next/image";
import cart from "../public/cart.svg";
import profile from "../public/profile.svg";
import menu from "../public/menu.svg";


const Header = () => {
  return (
    <>
      <header className="w-full fixed top-0 bg-white shadow-md z-10">
        <nav className="flex justify-between items-center px-[8%] py-3 md:py-6">
          <Link href="">
            <Image src={menu} alt="" />
          </Link>
          <Link href="/" className=" text-[#87e64b] font-extrabold text-4xl md:text-6xl">
            Reka.
          </Link>
          <div className="navbar-left flex items-center gap-4">
            {/* cart */}
            <Link  href="" className="hidden md:block">
              <Image src={cart} alt="" />
            </Link>
            {/* Login */}
            <Link href="">
              <Image src={profile} alt="" />
            </Link>
          </div>
        </nav>
        {/* <hr className="border   min-w-[100vw] mx-auto" /> */}
      </header>
    </>
  );
};

export default Header;
