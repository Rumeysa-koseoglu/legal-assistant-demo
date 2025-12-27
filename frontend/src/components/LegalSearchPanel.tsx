import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import AvatarSection from "./AvatarSection";

function LegalSearchPanel() {
  type Doc = {
    id: string;
    title: string;
    content: string;
  };

  const [query, setQuery] = useState<string>("");
  const [docs, setDocs] = useState<Doc[]>([]);

  const URL = "http://localhost:2000/api/documents";

  const filteredSearch = async () => {
    const response = await fetch(`${URL}?q=${query}`);
    const data = await response.json();
    console.log(data);
    setDocs(data);
  };

  return (
    <>
      <div className="panel-container flex flex-col items-center gap-7 w-full h-screen p-0 bg-[#fef6ef]">
        <div className="search-section m-15 flex flex-row border border-gray-400 rounded-4xl font-raleway">
          <input
            className=" rounded-4xl py-2.5 pl-6 px-4 w-100 text-base text-[#5c3e24] outline-none"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search legal docs.."
          />
          <button
            className="p-3 w-12.5 rounded-r-4xl bg-[#FCE2CE] text-[#92613A] font-bold text-2xl cursor-pointer"
            onClick={filteredSearch}
          >
            <FiSearch />
          </button>
        </div>
        <div className="document-section flex flex-col gap-10.5 w-[90%] max-h-[90%] font-lora px-10 py-10 z-1 relative ">
          {docs.map((doc) => (
            <div
              className="flex flex-col gap-4 p-4 rounded-xl shadow-xl cursor-pointer"
              key={doc.id}
            >
              <p className="font-bold text-xl text-[#92613A]">{doc.title}</p>
              <p className="font-extralight text-[#3c3b3b] line-clamp-2">
                {doc.content}
              </p>
            </div>
          ))}
        </div>
        <AvatarSection />
      </div>
    </>
  );
}

export default LegalSearchPanel;
