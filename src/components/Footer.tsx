import Link from "next/link";

// Extracting Sub-Components from Footer Component for better code readability and debugging

// Categories Div Component for Footer
const CategoriesComponent = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-4 text-[#B6BDC4]">
      <h4 className="text-base text-white">CATAGORIES</h4>
      <Link href={"#"} className="">
        Web Builder
      </Link>
      <Link href={"#"} className="">
        Hosting
      </Link>
      <Link href={"#"} className="">
        Data Center
      </Link>
      <Link href={"#"} className="">
        Robotic-Automation
      </Link>
    </div>
  );
};

// Contact Div Component for Footer
const ContactComponent = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-4 text-[#B6BDC4]">
      <h4 className="text-base text-white">CONTACT</h4>
      <Link href={"#"} className="">
        Contact
      </Link>
      <Link href={"#"} className="">
        Privacy Policy
      </Link>
      <Link href={"#"} className="">
        Terms Of Service
      </Link>
      <Link href={"#"} className="">
        Categories
      </Link>
      <Link href={"#"} className="">
        About
      </Link>
    </div>
  );
};

// Countries Switch Component
const CountriesSwitchComponent = () => {
  return (
    <div className="flex justify-start items-center gap-2 my-auto mb-32 sm:mb-0 text-[#B6BDC4]">
      {/* A Dummy Image Component for showing countries flag */}
      <div className="w-8 h-8 rounded-full bg-primaryBackground" />

      <select
        className="bg-transparent font-light outline-none"
        defaultValue={"United States"}
      >
        <option value="United States" className="">
          United States
        </option>
        <option value="India" className="">
          India
        </option>
        <option value="United Kingdom" className="">
          United Kingdom
        </option>
        <option value="France" className="">
          France
        </option>
      </select>
    </div>
  );
};

// Footer Component
function Footer() {
  return (
    <footer className="w-full h-auto sm:h-[452px] bg-secondaryBackground border-4 border-secondaryBackground">
      <div className="m-auto mt-14 max-w-[1024px] text-[#D1D6DA] text-xs sm:text-sm flex flex-wrap justify-evenly items-start gap-10 sm:gap-6">
        <CategoriesComponent />
        <ContactComponent />
        <CountriesSwitchComponent />
      </div>
    </footer>
  );
}

export default Footer;
