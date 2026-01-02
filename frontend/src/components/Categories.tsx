interface CategoriesProps {
  onCategoryClick: (category: string) => void;
}

function Categories({ onCategoryClick }: CategoriesProps) {
  const list = ["Contract", "Agreement", "Policy"];

  return (
    <div className="flex flex-row md:items-center gap-2 md:gap-3 md:w-[75%]">
      <span className=" text-[#845026] font-semibold text-[14px] md:text-base">
        Categories :
      </span>
      {list.map((cat) => (
        <button
          className="bg-[#FCE2CE] px-2.5 md:px-4 py-0.5 md:py-1 rounded-full text-[#92613A] font-raleway cursor-pointer text-[13px] md:text-base"
          key={cat}
          onClick={() => onCategoryClick(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Categories;
