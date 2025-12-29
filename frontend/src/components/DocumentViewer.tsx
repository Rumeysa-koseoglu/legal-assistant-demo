import { IoChevronBack } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";
import { useState } from "react";

type Props = {
  doc: {
    id: string;
    title: string;
    content: string;
  };
  onBack: () => void;
};

function DocumentViewer({ doc, onBack }: Props) {
  const [summary, setSummary] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const URL = import.meta.env.VITE_API_URL || "http://localhost:2000/api";

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
    <div className="flex flex-col gap-15 md:gap-20 lg:gap-15 xl:gap-15 w-full min-h-screen inset-0 z-20 overflow-y-auto">
      <button
        className=" flex flex-row items-center gap-4 w-45 text-[#92613A] font-raleway font-semibold text-lg cursor-pointer"
        onClick={onBack}
      >
        <IoChevronBack className="w-6 h-6" />
        Back to search
      </button>
      {summary && (
        <div className="bg-[#fbf8f671] p-4 mb-6 border-l-4 border-[#7775ef] rounded shadow-sm">
          <h3 className="flex flex-row items-center gap-4 font-bold font-raleway text-[#643d1d]">
            <LuSparkles className="size-5 text-[#504fa1]" /> Key Points:
          </h3>
          <p className="text-[#472d19] italic">{summary}</p>
        </div>
      )}
      <div className="document max-w-150 md:max-w-150 lg:max-w-200 xl:max-w-210 max-h-190 md:max-h-185 lg:max-h-190 2xl:max-h-230 overflow-auto px-10 py-4 2xl:py-8 mr-13 ml-13 md:ml-5 lg:ml-0.5 xl:ml-0.5 2xl:ml-25 rounded-lg whitespace-pre-line bg-[#fbf8f671] font-lora shadow-xl">
        <div className="flex flex-row items-center justify-between">
          <p className="text-sm font-extralight font-sans">
            document ID: {doc.id}
          </p>
          <button
            className=" w-30 md:w-35 flex items-center gap-2.5 font-raleway font-semibold text-[#210a6f] text-[14px] md:text-[16px] py-2 px-3 rounded-lg transition-all duration-500 bg-linear-to-r from-[#4285F4] via-[#9167eb] to-[#9f7ee5] bg-size-[200%_auto] hover:bg-position-[right_center] active:scale-95 shadow-lg hover:shadow-purple-500/50 cursor-pointer"
            onClick={handleSummarize}
          >
            {isLoading ? (
              "AI is thinking..."
            ) : (
              <>
                <LuSparkles className="size-4 md:size-5 text-[#24048f]" />
                summarize
              </>
            )}
          </button>
        </div>
        <p className="p-4 font-extrabold text-xl md:text-3xl text-[#643d1d] text-center">
          {doc.title}
        </p>
        <p className="p-6 font-normal text-[#472d19] text-left md:text-lg text-[17px]">
          {doc.content}
        </p>
      </div>
    </div>
  );
}

export default DocumentViewer;
