import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import AvatarSection from "./AvatarSection";
import DocumentViewer from "./DocumentViewer";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { LuSparkles } from "react-icons/lu";

function LegalSearchPanel() {
  type Doc = {
    id: string;
    title: string;
    content: string;
  };

  const [query, setQuery] = useState<string>("");
  const [docs, setDocs] = useState<Doc[]>([]);
  const [activeDocId, setActiveDocId] = useState<string | null>(null);

  const activeDoc = docs.find((d) => d.id === activeDocId);

  const URL = import.meta.env.VITE_API_URL || "http://localhost:2000/api";

  const filteredSearch = async () => {
    const response = await fetch(`${URL}?q=${query}`);
    const data = await response.json();
    console.log(data);
    setDocs(data);
  };

  return (
    <>
      <div className="panel-container flex flex-col items-center gap-7 w-full min-h-screen p-4 md:p-8 bg-[#fef6ef]">
        {activeDocId === null ? (
          <>
            <p className="flex flex-row gap-4 items-center justify-center mt-5 my-5 w-full max-w-2xl font-raleway font-semibold text-xl md:text-2xl text-[#5c3e24]">
              <HiOutlineDocumentMagnifyingGlass className="size-6 md:size-8" />{" "}
              Legal Document Assistant
            </p>
            <div className="search-section w-100 md:w-125 max-w-lg m-5 flex flex-row items-center border border-gray-400 rounded-4xl font-raleway">
              <LuSparkles className="size-6 ml-4 text-[#92613A]" />
              <input
                className=" rounded-4xl py-2.5 pl-6 px-4 w-100 text-base text-[#5c3e24] outline-none m-0"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search legal docs.."
              />
              <button
                className="py-3 w-15 flex justify-center rounded-r-4xl bg-[#FCE2CE] text-[#92613A] font-bold text-[26px] cursor-pointer"
                onClick={filteredSearch}
              >
                <FiSearch />
              </button>
            </div>
            <div className="documents-section flex flex-col gap-10.5 w-125 md:w-full max-w-4xl max-h-[90%] font-lora px-10 py-10 z-1 relative ">
              {docs.map((doc) => (
                <div
                  className="flex flex-col gap-4 p-4 rounded-xl shadow-xl cursor-pointer hover:transform-[translateY(-6px)] transition-transform"
                  onClick={() => setActiveDocId(doc.id)}
                  key={doc.id}
                >
                  <p className="font-bold text-lg md:text-xl text-[#92613A]">
                    {doc.title}
                  </p>
                  <p className="font-extralight text-[#3c3b3b] line-clamp-2 whitespace-pre-line">
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
