import { IoChevronBack } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";
import { useState } from "react";

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

  const URL = "https://legal-assistant-demo-1-w9nr.onrender.com/api/summarize";

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
    <div className="flex flex-col gap-10 w-full min-h-screen inset-0 z-20 overflow-y-auto">
      <button
        className=" flex flex-row items-center gap-4 w-45  mb-4 text-[#92613A] font-raleway font-semibold text-lg cursor-pointer"
        onClick={onBack}
      >
        <IoChevronBack className="w-6 h-6" />
        Back to search
      </button>

      <div className="document w-[65%] h-190 mx-auto px-10 py-4 overflow-auto rounded-lg whitespace-pre-line bg-[#f1ddd071] font-lora shadow-xl">
        <div className="flex flex-row items-center justify-between mt-3">
          <div className="text-sm font-extralight font-sans">
            <p className="bg-[#f3d1b8] px-5 py-1 mx-6 rounded-full text-[#92613A] text-base font-semibold font-raleway cursor-pointer flex items-center justify-center ">
              {doc.category}
            </p>
          </div>
          <button
            className=" w-30 md:w-35 flex items-center gap-2.5 font-raleway font-semibold text-[#643d1d] text-[14px] md:text-[16px] py-2 px-3 rounded-lg transition-all duration-500 bg-linear-to-r from-[#f3d1b8] via-[#c09160] to-[#f3d1b8] bg-size-[200%_auto] hover:bg-position-[right_center] active:scale-95 shadow-lg hover:shadow-[#816948] cursor-pointer"
            onClick={handleSummarize}
          >
            {isLoading ? (
              <span className="px-1">AI is thinking...</span>
            ) : (
              <span className="flex items-center gap-2">
                <LuSparkles className="size-4 md:size-5 text-[#643d1d]" />
                summarize
              </span>
            )}
          </button>
        </div>
        <p className="p-4 font-extrabold text-3xl text-[#643d1d] text-center">
          {doc.title}
        </p>
        <p className="p-6 font-normal text-[#472d19] text-left text-base mt-4 mb-8">
          {doc.content}
        </p>
        {summary && (
          <div className="bg-[#fbf8f671] p-4 mb-6 border-l-4 border-[#7775ef] rounded shadow-sm">
            <h3 className="flex flex-row items-center gap-4 font-bold font-raleway text-[#643d1d]">
              <LuSparkles className="size-5 text-[#504fa1]" /> Summary:
            </h3>
            <p className="text-[#472d19] italic">{summary}</p>
          </div>
        )}
        <span className="flex  text-[#472d19] text-sm mt-7 mx-6">
          document ID: {doc.id}
        </span>
      </div>
    </div>
  );
}

export default DocumentViewer;
