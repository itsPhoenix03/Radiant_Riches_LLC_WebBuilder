import Link from "next/link";
import { Search } from "./Icons";

// Navbar Component
function Navbar() {
  return (
    <nav className="w-full h-16 bg-secondaryBackground">
      <div className="m-auto h-full max-w-[1024px] text-[#D1D6DA] text-sm flex justify-evenly items-center gap-6">
        <div className="w-2/4 flex justify-start items-center gap-2 bg-white border border-[#E1E4E6] rounded-lg px-2 py-1">
          <Search />
          <input
            type="text"
            name="search"
            placeholder="Search for a website builder now..."
            className="w-full outline-none text-primaryFontColor placeholder:text-xs"
          />
        </div>

        <Link href={"#"}>Categories</Link>
        <Link href={"#"}>Website Builder</Link>
        <Link href={"#"}>Today&apos;s Deal</Link>
      </div>
    </nav>
  );
}

export default Navbar;
