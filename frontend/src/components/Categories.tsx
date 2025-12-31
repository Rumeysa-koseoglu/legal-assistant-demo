function Categories() {
  return (
    <div className="flex flex-row items-center gap-3">
      <span className=" text-[#845026] font-semibold">Categories :</span>
      <button className="bg-[#FCE2CE] px-4 py-1 rounded-full text-[#92613A] font-raleway">
        Contract
      </button>
      <button className="bg-[#FCE2CE] px-4 py-1 rounded-full text-[#92613A] font-raleway">
        Agreement
      </button>
      <button className="bg-[#FCE2CE] px-4 py-1 rounded-full text-[#92613A] font-raleway">
        Policy
      </button>
    </div>
  );
}

export default Categories;
