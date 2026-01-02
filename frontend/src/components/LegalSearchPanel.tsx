import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import AvatarSection from "./AvatarSection";
import DocumentViewer from "./DocumentViewer";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import Categories from "./Categories";
import DocumentListSkeleton from "./DocumentListSkeleton";
import ErrorMessage from "./ErrorMessage";

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
  const [error, setError] = useState<boolean>(false);

  const activeDoc = docs.find((d) => d.id === activeDocId);

  const URL = "https://legal-assistant-demo-1-w9nr.onrender.com/api/documents";

  const filteredSearch = async (query: string) => {
    if (query.trim() !== "") {
      setError(false);
      const response = await fetch(`${URL}?q=${query}`);
      const data = await response.json();
      setDocs(data);
    } else {
      setError(true);
      return;
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSuggestionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      setIsLoading(true);
      const btnValue = e.currentTarget.textContent || "";
      setQuery(btnValue);
      filteredSearch(btnValue);
    } catch (error) {
      alert("error:" + error);
    }
    setIsLoading(false);
  };

  const searchByCategory = async (category: string) => {
    try {
      setIsLoading(true);
      setQuery("");
      const response = await fetch(`${URL}?category=${category}`);
      const data = await response.json();
      setDocs(data);
    } catch (error) {
      alert("error:" + error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="panel-container flex flex-col items-center lg:items-start gap-5 w-full min-h-screen px-4 pb-4 pt-2 md:p-4 bg-[#fef6ef]">
        {activeDocId === null ? (
          <>
            <div className="flex flex-col mb-2 md:mb-6 lg:mb-15 h-8 md:h-17 lg:ml-75">
              <p className="flex flex-row gap-4 items-center justify-center md:mx-auto w-full max-w-2xl font-raleway font-semibold text-2xl md:text-[44px] lg:text-5xl text-[#5c3e24]">
                <HiOutlineDocumentMagnifyingGlass className="hidden md:block md:size-12" />
                Legal Document Assistant
              </p>
              <span className="text-xs md:text-[17px] lg:text-xl font-light flex justify-center w-40 md:w-60 mx-auto md:mx-auto lg:mt-4 mb-4 text-[#5c3e24]">
                AI Powered Summarization
              </span>
            </div>
            {/* search section */}
            <div className="search-section w-[90%] md:w-[94%] lg:w-[74%] flex flex-row items-center justify-between border border-[#5c3e24] rounded-4xl font-raleway">
              <input
                className="rounded-4xl md:py-2 px-6 w-[90%] text-xs md:text-base text-[#5c3e24] outline-none"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search legal docs.."
                onKeyDown={(e) => e.key === "Enter" && filteredSearch(query)}
              />
              <button
                className="py-1.5 md:py-2 w-9 md:w-13 flex justify-center rounded-r-4xl bg-[#FCE2CE] text-[#92613A] font-bold text-base md:text-[22px] lg:text-2xl cursor-pointer"
                onClick={() => filteredSearch(query)}
              >
                <FiSearch />
              </button>
            </div>
            {error && <ErrorMessage />}
            {/* search suggestions */}
            <p className="md:flex flex-row md:gap-2 text-[#92613a] font-raleway text-[10px] md:text-sm mx-1">
              <span className="w-20 md:w-23">Try to search :</span>
              <button
                className="cursor-pointer hover:text-[#4c647f] hover:underline font-semibold md:font-bold mx-1"
                onClick={handleSuggestionClick}
              >
                Employment Contract
              </button>
              ,
              <button
                className="cursor-pointer hover:text-[#4c647f] hover:underline font-semibold md:font-bold mx-1"
                onClick={handleSuggestionClick}
              >
                Non-Disclosure Agreement
              </button>
              or
              <button
                className="cursor-pointer hover:text-[#4c647f] hover:underline font-semibold md:font-bold mx-1"
                onClick={handleSuggestionClick}
              >
                Privacy Policy
              </button>
            </p>
            <Categories
              onCategoryClick={searchByCategory}
              // onFilteredSearch={filteredSearch}
            />
            {/* Documents Section */}
            {isLoading ? (
              <DocumentListSkeleton />
            ) : (
              <div className="documents-section grid md:grid-cols-2 xl:grid-cols-3 gap-5 w-[95%] lg:w-[74%] overflow-y-auto no-scrollbar max-h-150 md:max-h-130 font-lora px-4 md:px-2 lg:px-6 py-5 z-1 relative border-t border-[#92613A]">
                {docs.map((doc) => (
                  <div
                    className="flex flex-col gap-2.5 md:gap-3.5 p-4 rounded-xl shadow-xl cursor-pointer hover:transform-[translateY(-6px)] transition-transform"
                    onClick={() => setActiveDocId(doc.id)}
                    key={doc.id}
                  >
                    <div className="flex flex-row items-center justify-between">
                      <p className="flex items-center justify-center bg-[#FCE2CE] text-[#5c3e24] font-raleway text-xs md:text-sm lg:text-base rounded px-3 py-0.5 mt-3 md:mt-2 w-26">
                        {doc.category}
                      </p>
                      <p className="mt-3 text-[#5c3e24] text-xs md:text-sm lg:text-base">
                        {doc.date}
                      </p>
                    </div>
                    <p className="font-bold text-base md:text-lg lg:text-[21px] text-[#92613A]">
                      {doc.title}
                    </p>
                    <p className="font-extralight text-sm  text-[#3c3b3b] line-clamp-3 whitespace-pre-line">
                      {doc.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <AvatarSection />
          </>
        ) : (
          activeDoc && (
            <DocumentViewer
              doc={activeDoc}
              onBack={() => setActiveDocId(null)}
            />
          )
        )}
      </div>
    </>
  );
}

export default LegalSearchPanel;
