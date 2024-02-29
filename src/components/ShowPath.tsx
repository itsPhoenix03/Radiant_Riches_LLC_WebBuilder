// Dummy Path
const path = "Home/Hosting for all/Hosting/Hosting6/Hosting5".split("/");

function ShowPath() {
  return (
    <div className="mt-2 flex flex-wrap justify-start items-center gap-2 text-xs text-[#727D87]">
      {path.map((item, index) => (
        <div key={index} className="flex justify-start items-start gap-4">
          <span>{item}</span>
          <span
            className={`text-secondaryFontColor font-semibold ${
              index === path.length - 1 ? "hidden" : "block"
            }`}
          >
            &gt;
          </span>
        </div>
      ))}
    </div>
  );
}

export default ShowPath;
