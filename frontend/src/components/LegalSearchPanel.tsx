import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import AvatarSection from "./AvatarSection";
import DocumentViewer from "./DocumentViewer";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import Categories from "./Categories";

function LegalSearchPanel() {
  type Doc = {
    id: string;
    title: string;
    category: string;
    date: string;
    content: string;
  };

  const [query, setQuery] = useState<string>("");
  const [docs, setDocs] = useState<Doc[]>([]);
  const [activeDocId, setActiveDocId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const activeDoc = docs.find((d) => d.id === activeDocId);

  const URL = "http://localhost:2000/api/documents";
  // const URL = "https://legal-assistant-demo-1-w9nr.onrender.com/api/documents";

  const filteredSearch = async (query: string) => {
    setQuery("");
    const response = await fetch(`${URL}?q=${query}`);
    const data = await response.json();
    setDocs(data);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btnValue = e.currentTarget.textContent || "";
    setQuery(btnValue);
    filteredSearch(btnValue);
  };

  const searchByCategory = async (category: string) => {
    const response = await fetch(`${URL}?category=${category}`);
    const data = await response.json();
    setDocs(data);
  };

  return (
    <>
      <div className="panel-container flex flex-col items-left gap-5 w-full min-h-screen px-4 pb-4 pt-2 md:p-8 bg-[#fef6ef]">
        {activeDocId === null ? (
          <>
            <p className="flex flex-row gap-4 items-center justify-center mb-13 mt-0 mx-auto w-full max-w-2xl font-raleway font-semibold text-4xl text-[#5c3e24]">
              <HiOutlineDocumentMagnifyingGlass className="size-6 md:size-8" />
              Legal Document Assistant
            </p>
            {/* search section */}
            <div className="search-section w-[74%] flex flex-row items-center justify-between border border-gray-400 rounded-4xl font-raleway">
              <input
                className="rounded-4xl py-2 px-6 w-[90%] text-base text-[#5c3e24] outline-none"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search legal docs.."
              />
              <button
                className="py-2.5 w-15 flex justify-center rounded-r-4xl bg-[#FCE2CE] text-[#92613A] font-bold text-[22px] cursor-pointer"
                onClick={() => filteredSearch(query)}
              >
                <FiSearch />
              </button>
            </div>
            {/* search suggestions */}
            <p className="flex flex-row gap-2 text-[#92613a] font-raleway text-sm">
              Try to search
              <button
                className="cursor-pointer hover:text-[#4c647f] hover:underline font-bold"
                onClick={handleClick}
              >
                Employment Contract
              </button>
              ,
              <button
                className="cursor-pointer px-2.5 hover:text-[#4c647f] hover:underline font-bold"
                onClick={handleClick}
              >
                Non-Disclosure Agreement
              </button>
              or
              <button
                className="cursor-pointer px-2.5 hover:text-[#4c647f] hover:underline font-bold"
                onClick={handleClick}
              >
                Privacy Policy
              </button>
            </p>
            <Categories
              onCategoryClick={searchByCategory}
              onFilteredSearch={filteredSearch}
            />
            {/* Documents Section */}
            <div className="documents-section grid grid-cols-3 gap-5 w-[74%] overflow-y-auto no-scrollbar max-h-130 font-lora pl-8 pr-10 py-5 z-1 relative border-t border-[#92613A] ">
              {docs.map((doc) => (
                <div
                  className="flex flex-col gap-4 p-4 rounded-xl shadow-xl cursor-pointer hover:transform-[translateY(-6px)] transition-transform"
                  onClick={() => setActiveDocId(doc.id)}
                  key={doc.id}
                >
                  <div className="flex flex-row items-center justify-between">
                    <p className="flex items-center justify-center bg-[#FCE2CE] text-[#5c3e24] text-[14px] rounded px-3 py-0.5 mt-3 w-26">
                      {doc.category}
                    </p>
                    <p className="mt-3 text-[#5c3e24] text-[14px]">
                      {doc.date}
                    </p>
                  </div>
                  <p className="font-bold text-lg md:text-xl text-[#92613A]">
                    {doc.title}
                  </p>
                  <p className="font-extralight text-[#3c3b3b] line-clamp-3 whitespace-pre-line">
                    {doc.content}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          activeDoc && (
            <DocumentViewer
              doc={activeDoc}
              onBack={() => setActiveDocId(null)}
            />
          )
        )}
        <AvatarSection />
      </div>
    </>
  );
}

export default LegalSearchPanel;
