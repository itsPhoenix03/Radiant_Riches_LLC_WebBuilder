import Image from "next/image";

function RelatedDealsCard() {
  return (
    <div className="rounded-xl p-3 lg:p-5 lg:w-[333px] sm:w-[250px] w-full lg:h-[425px] h-[350px] bg-white text-[#626E79] shadow-xl shadow-neutral-200 hover:-mt-4 transition-[margin-top] duration-300 ease-in-out">
      {/* Image Container */}
      <div className="lg:h-1/2 h-2/5">
        <Image
          src={"/default-course-image.png"}
          alt="course image"
          width={150}
          height={150}
          loading="lazy"
          className="m-auto h-auto w-auto object-cover"
        />
      </div>

      {/* Labels Section */}
      <div className="flex flex-wrap justify-start items-center gap-1 lg:text-sm text-xs text-[#074786]">
        <span className="px-2 py-1 bg-[#F2F4F7] rounded-lg border border-[#074786]/20">
          20% Off
        </span>
        <span className="px-2 py-1 bg-[#F2F4F7] rounded-lg border border-[#074786]/20">
          Limited time
        </span>
      </div>

      {/* Details */}
      <h6 className="lg:text-lg text-base text-center my-3 font-bold">
        Webbuilder 1
      </h6>

      <p className="my-2 lg:text-sm text-xs line-clamp-2">
        Computer Modern classic with wix support
      </p>

      <div className="flex justify-start items-center gap-1">
        <span className="lg:text-xl text-sm font-semibold">$39.96</span>
        <span className="lg:text-sm text-xs line-through">$49.96</span>
        <span className="lg:text-sm text-xs text-[#EF4C5D]">(20% Off)</span>
      </div>

      {/* Button */}
      <button
        className="mt-3 lg:py-3 sm:py-2 py-3 w-full rounded-xl border border-transparent bg-actionColor text-white lg:text-base text-sm hover:bg-transparent hover:text-actionColor
        hover:border-actionColor/20 transition-all duration-300 ease-in-out
      "
      >
        View Deal
      </button>
    </div>
  );
}

export default RelatedDealsCard;
