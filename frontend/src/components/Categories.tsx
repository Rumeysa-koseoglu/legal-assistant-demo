function Categories() {
  return (
    <div className="flex flex-row items-center gap-3">
      <span className=" text-[#845026] font-semibold">Categories :</span>
      <button className="bg-[#FCE2CE] px-4 py-1 rounded-full text-[#92613A] font-raleway cursor-pointer">
        All
      </button>
      <button className="bg-[#FCE2CE] px-4 py-1 rounded-full text-[#92613A] font-raleway cursor-pointer">
        Contract
      </button>
      <button className="bg-[#FCE2CE] px-4 py-1 rounded-full text-[#92613A] font-raleway cursor-pointer">
        Agreement
      </button>
      <button className="bg-[#FCE2CE] px-4 py-1 rounded-full text-[#92613A] font-raleway cursor-pointer">
        Policy
      </button>
    </div>
  );
}

export default Categories;
