import { IoChevronBack } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";
import { useState } from "react";
import DocumentViewerSkeleton from "./DocumentViewerSkeleton";

type Props = {
  doc: {
    id: string;
    title: string;
    content: string;
    category: string;
  };
  onBack: () => void;
};

function DocumentViewer({ doc, onBack }: Props) {
  const [summary, setSummary] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const URL = "https://legal-assistant-demo-1-w9nr.onrender.com/api/summarize";
  const URL = "http://localhost:2000/api/summarize";

  const handleSummarize = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: doc.content }),
      });
      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      console.error("Error summarizing:", error);
      alert("Failed to reach the AI assistant.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 w-full min-h-screen">
      <button
        className=" flex flex-row items-center gap-2 md:gap-4 w-45 mb-4 text-[#92613A] font-raleway font-semibold text-sm md:text-base lg:text-lg cursor-pointer hover:transform-[translateY(3px)] transition-transform"
        onClick={onBack}
      >
        <IoChevronBack className="size-4 md:size-6" />
        Back to search
      </button>

      {isLoading ? (
        <DocumentViewerSkeleton />
      ) : (
        <div className="document w-full lg:w-[73%] max-h-160 md:max-h-180 px-3 md:px-8 py-4 lg:mx-auto overflow-auto rounded-lg whitespace-pre-line bg-[#f1ddd074] font-lora shadow-xl">
          <div className="flex flex-row items-center justify-between md:mt-1 mb-4 lg:mb-10">
            <div className="text-sm lg:text-base font-sans">
              <p className="bg-[#f3d1b8] px-5 lg:px-7 py-1 md:py-1.5 md:mx-6 rounded-full text-[#92613A] font-semibold font-raleway cursor-pointer flex items-center justify-center ">
                {doc.category}
              </p>
            </div>
            <button
              className=" w-30 md:w-35 lg:w-40 flex items-center gap-2.5 font-raleway font-semibold text-[#643d1d] text-sm md:text-base py-1.5 md:py-2 px-3 lg:px-4 rounded-lg transition-all duration-500 bg-linear-to-r from-[#f3d1b8] via-[#c09160] to-[#f3d1b8] bg-size-[200%_auto] hover:bg-position-[right_center] active:scale-95 shadow-lg hover:shadow-[#816948] cursor-pointer"
              onClick={handleSummarize}
            >
              {isLoading ? (
                <span className="px-1">AI is thinking...</span>
              ) : (
                <span className="flex items-center gap-2 lg:text-lg">
                  <LuSparkles className="size-4 md:size-5 lg:size-6 text-[#643d1d]" />
                  summarize
                </span>
              )}
            </button>
          </div>
          <p className="p-4 font-extrabold text-[20px] md:text-[26px] lg:text-4xl text-[#643d1d] text-center">
            {doc.title}
          </p>
          <p className="px-4 py-3 lg:p-6 font-normal text-[#472d19] text-left text-sm md:text-[15px] lg:text-[17px] mt-2 md:mt-4 mb-8">
            {doc.content}
          </p>
          {summary && (
            <div className="bg-[#fbf8f671] p-4 mb-6 border-l-4 border-[#7775ef] rounded shadow-sm">
              <p className="flex flex-row items-center gap-4 font-semibold font-raleway text-[#643d1d] md:text-lg lg:text-xl md:mb-2">
                <LuSparkles className="size-5 md:size-6 text-[#504fa1]" />
                Summary:
              </p>
              <p className="text-[#472d19] text-sm md:text-base lg italic">
                {summary}
              </p>
            </div>
          )}
          <span className="flex justify-end text-[#472d19] text-xs md:text-sm mt-7">
            document ID: {doc.id}
          </span>
        </div>
      )}
    </div>
  );
}

export default DocumentViewer;
