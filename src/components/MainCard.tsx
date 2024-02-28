import { Data } from "@/assets/Data";
import Image from "next/image";
import { CheckMark, Diamond, DropDown, Star, Trophy } from "./Icons";

const BestChoiceComponent = () => (
  <div className="absolute top-3 left-0 py-2 px-2 rounded-r-lg bg-labelColor shadow-lg shadow-labelColor/50 text-white text-sm flex justify-evenly items-center gap-2">
    <Trophy />
    <p>Best Choice</p>
  </div>
);

const BestValueComponent = () => (
  <div className="absolute top-3 left-0 py-2 px-2 rounded-r-lg bg-labelColor shadow-lg shadow-labelColor/50 text-white text-sm flex justify-evenly items-center gap-2">
    <Diamond />
    <p>Best Value</p>
  </div>
);

const IndexComponent = ({ index }: { index: number }) => (
  <p className="absolute top-14 -left-4 w-8 h-8 text-center rounded-full text-xl text-[#626E79] border border-[#E1E4E6] bg-white">
    {index + 1}
  </p>
);

function MainCard({
  index,
  data,
  isBestChoice = false,
  isBestValue = false,
}: {
  index: number;
  data: Data;
  isBestChoice?: boolean;
  isBestValue?: boolean;
}) {
  return (
    <div
      className="relative bg-white rounded-xl w-full px-2 flex justify-center items-start gap-4 border border-transparent hover:border-labelColor/20
    shadow-2xl shadow-neutral-200 hover:shadow-labelColor/20 transition-all duration-500 ease-in-out"
    >
      {/* Labels */}
      {isBestChoice && <BestChoiceComponent />}
      {isBestValue && <BestValueComponent />}
      <IndexComponent index={index} />

      {/* Image Container */}
      <div className="w-1/4 my-auto space-y-2 text-center">
        <Image
          src={data.image}
          alt="course image"
          width={150}
          height={150}
          className="mx-auto object-cover"
          loading="lazy"
        />
        <p className="text-[#626E79] text-sm">Builder</p>
      </div>

      {/* Details */}
      <div className="text-secondaryFontColor text-base w-1/2 my-2">
        {/* Title and Description */}
        <p className="">
          <span className="font-bold">{data.title.trim()}-</span>&nbsp;
          <span className="text-sm">{data.description.trim()}</span>
        </p>

        {data.discount && (
          <p className="my-2 w-fit text-[#074786] border border-[#074786]/20 bg-[#F2F4F7] px-2 py-1 text-xs rounded-[4px]">
            {data.discount}% Off
          </p>
        )}

        {/* Main Highlights */}
        <div className="">
          <p className="font-bold my-1">Main Highlights</p>
          {typeof data.mainHighlight === "string" ? (
            <p className="text-sm">{data.mainHighlight}</p>
          ) : (
            <>
              <div className="bg-[#FFF4ED] rounded-xl space-y-4 py-4 px-3">
                {data.mainHighlight.ratingBreakdown.map((item, index) => (
                  <div key={index} className="space-x-2 text-sm">
                    <span className="py-2 px-1 rounded-[4px] bg-white text-actionColor">
                      {item.rating}
                    </span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <p>Why we love it</p>
                {data.mainHighlight.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex justify-start items-center gap-2 text-sm my-1"
                  >
                    <CheckMark />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </>
          )}
          <button className="my-2 text-actionColor bg-transparent flex justify-start items-center gap-2 text-xs">
            Show more
          </button>
        </div>
      </div>

      {/* Ratings */}
      <div className="w-1/4 h-full flex flex-col justify-between items-center gap-8">
        <div className="w-3/5 pb-8 rounded-b-lg bg-actionColorLightShade text-center text-[#074786]">
          <p className="text-[32px]">{data.overallRating}</p>
          <p className="text-sm">{data.choiceLabel}</p>
          <div className="mt-2 flex justify-center items-center gap-1">
            {/* TODO: Create the functionality for rating stars */}
            {new Array(5).fill(0).map((item, index) => (
              <Star key={index} />
            ))}
          </div>
        </div>

        <button className="w-full px-12 py-3 rounded-xl bg-actionColor text-white shadow-actionColor shadow-md">
          View
        </button>
      </div>
    </div>
  );
}

export default MainCard;