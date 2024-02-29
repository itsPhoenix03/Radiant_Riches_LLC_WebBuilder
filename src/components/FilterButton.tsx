type FilterButtonProps = {
  label: string;
};

function FilterButton({ label }: FilterButtonProps) {
  return (
    <button className="px-4 py-2 text-xs sm:text-sm text-secondaryFontColor text-start bg-white border border-labelColor/20 rounded-xl">
      <p className="">{label}</p>
    </button>
  );
}

export default FilterButton;
