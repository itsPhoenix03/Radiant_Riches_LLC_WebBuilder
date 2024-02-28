import { data } from "@/assets/Data";
import FilterButton from "@/components/FilterButton";
import Footer from "@/components/Footer";
import { CheckMark, DropDown, Info } from "@/components/Icons";
import Layout from "@/components/Layout";
import MainCard from "@/components/MainCard";
import Navbar from "@/components/Navbar";
import RelatedDealsCard from "@/components/RelatedDealsCard";
import ShowPath from "@/components/ShowPath";
import SignUp from "@/components/SignUp";

export default function Home() {
  //  Dummy Related Deals Data
  const relatedDeals = new Array(3).fill({});

  return (
    <main className="min-h-screen bg-primaryBackground">
      <Navbar />
      <Layout>
        <h2 className="text-5xl mt-[38px] text-[#2C384A]">
          Best Website builders in the US
        </h2>

        <div className="border-y-2 border-[#E1E4E6] my-4 py-[10px] flex justify-between items-center">
          <div className="flex justify-start items-center gap-4">
            <div className="flex justify-between items-center gap-2 text-sm text-secondaryFontColor">
              <CheckMark />
              <span>Last Updated - February 22, 2020</span>
            </div>
            <div className="flex justify-between items-center gap-2 text-sm text-secondaryFontColor">
              <Info />
              <span>Advertising Disclosure</span>
            </div>
          </div>

          <div className="flex justify-between items-center gap-2 text-sm text-secondaryFontColor cursor-pointer">
            <span>Top Relevant</span>
            <DropDown />
          </div>
        </div>

        {/* Apply Filter Section */}
        <div className="my-4 flex justify-start items-center gap-5">
          <FilterButton label="Tools" />
          <FilterButton label="AWS Builder" />
          <FilterButton label="Start Build" />
          <FilterButton label="Build Supplies" />
          <FilterButton label="Tooling" />
          <FilterButton label="BlueHosting" />
        </div>

        {/* Current Path Component */}
        <ShowPath />

        {/* Main Cards Component */}
        <div className="mt-5 space-y-4">
          {data.map((item, index) => (
            <MainCard
              key={index}
              index={index}
              data={item}
              isBestChoice={index === 0}
              isBestValue={index === 1}
            />
          ))}
        </div>

        {/* Related Deals Section */}
        <h4 className="mt-20 mb-9 text-[32px] text-[#2C384A]">
          Related deals you might like for
        </h4>

        {/* Related Deals Cards */}
        <div className="flex justify-between items-center">
          {relatedDeals.map((card, index) => (
            <RelatedDealsCard key={index} />
          ))}
        </div>

        {/* Sign Up Section */}
        <SignUp />
      </Layout>
      <Footer />
    </main>
  );
}
