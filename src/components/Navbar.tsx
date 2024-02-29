import Link from "next/link";
import { Search } from "./Icons";

// Navbar Component
function Navbar() {
  return (
    <nav className="w-full h-auto sm:h-16 bg-secondaryBackground">
      <div className="m-auto h-full max-w-full sm:max-w-[720px] lg:max-w-[1024px] text-[#D1D6DA] text-sm flex flex-col sm:flex-row justify-evenly items-center gap-6">
        <div className="w-4/5 sm:w-2/4 mt-6 sm:mt-0 flex justify-start items-center gap-2 bg-white border border-[#E1E4E6] rounded-lg px-2 py-1">
          <Search />
          <input
            type="text"
            name="search"
            placeholder="Search for a website builder here..."
            className="w-full outline-none text-primaryFontColor placeholder:text-xs"
          />
        </div>

        <div className="mb-6 sm:mb-0 flex justify-evenly items-center gap-6 text-xs sm:text-sm">
          <Link href={"#"}>Categories</Link>
          <Link href={"#"}>Website Builder</Link>
          <Link href={"#"}>Today&apos;s Deal</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
