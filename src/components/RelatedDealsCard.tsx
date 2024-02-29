import Image from "next/image";

function RelatedDealsCard() {
  return (
    <div className="rounded-xl p-5 w-[333px] h-[425px] bg-white text-[#626E79] shadow-xl shadow-neutral-200 hover:-mt-4 transition-[margin-top] duration-300 ease-in-out">
      {/* Image Container */}
      <div className="h-1/2">
        <Image
          src={"/default-course-image.png"}
          alt="course image"
          width={150}
          height={150}
          loading="lazy"
          className="m-auto object-cover"
        />
      </div>

      {/* Labels Section */}
      <div className="flex justify-start items-center gap-1 text-sm text-[#074786]">
        <span className="px-2 py-1 bg-[#F2F4F7] rounded-lg border border-[#074786]/20">
          20% Off
        </span>
        <span className="px-2 py-1 bg-[#F2F4F7] rounded-lg border border-[#074786]/20">
          Limited time
        </span>
      </div>

      {/* Details */}
      <h6 className=" text-lg text-center my-3 font-bold">Webbuilder 1</h6>

      <p className="my-2 text-sm line-clamp-2">
        Computer Modern classic with wix support
      </p>

      <div className="flex justify-start items-center gap-1">
        <span className="text-xl font-semibold">$39.96</span>
        <span className="text-sm line-through">$49.96</span>
        <span className="text-sm text-[#EF4C5D]">(20% Off)</span>
      </div>

      {/* Button */}
      <button
        className="mt-3 py-3 px-[108px] rounded-xl border border-transparent bg-actionColor text-white text-base hover:bg-transparent hover:text-actionColor
        hover:border-actionColor/20 transition-all duration-300 ease-in-out
      "
      >
        View Deal
      </button>
    </div>
  );
}

export default RelatedDealsCard;
