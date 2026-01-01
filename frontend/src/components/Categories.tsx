interface CategoriesProps {
  onCategoryClick: (category: string) => void;
  onFilteredSearch: (query: string) => void;
}

function Categories({ onCategoryClick, onFilteredSearch }: CategoriesProps) {
  const list = ["Contract", "Agreement", "Policy"];

  return (
    <div className="flex flex-row items-center gap-3">
      <span className=" text-[#845026] font-semibold">Categories :</span>
      <button
        className="bg-[#FCE2CE] px-4 py-1 rounded-full text-[#92613A] font-raleway cursor-pointer"
        onClick={() => onFilteredSearch("All")}
      >
        All
      </button>
      {list.map((cat) => (
        <button
          className="bg-[#FCE2CE] px-4 py-1 rounded-full text-[#92613A] font-raleway cursor-pointer"
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
