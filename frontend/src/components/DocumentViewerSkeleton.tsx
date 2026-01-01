import React from "react";

function DocumentViewerSkeleton() {
  return (
    <div className="document w-[65%] h-190 mx-auto px-10 py-4 rounded-lg whitespace-pre-line bg-[#d9c9bc64] shadow-xl">
      <div className="cat-aiBtn flex flex-row items-center justify-between mt-3">
        <div className="category w-30 h-7 bg-[#c1b3a764] rounded-full"></div>
        <div className="ai-btn w-30 h-7 bg-[#c1b3a764] rounded"></div>
      </div>
      <div className="title w-150 h-8 bg-[#c1b3a764] flex mx-auto mt-20 rounded"></div>
      <div className="content flex flex-col gap-6 px-4 justify-start mb-10 mt-15">
        <div className="w-[90%] h-4 bg-[#c1b3a764] rounded"></div>
        <div className="w-[80%] h-4 bg-[#c1b3a764] rounded"></div>
        <div className="w-[90%] h-4 bg-[#c1b3a764] rounded"></div>
        <div className="w-[80%] h-4 bg-[#c1b3a764] rounded"></div>
        <div className="w-[90%] h-4 bg-[#c1b3a764] rounded"></div>
        <div className="w-[80%] h-4 bg-[#c1b3a764] rounded"></div>
        <div className="w-[80%] h-4 bg-[#c1b3a764] rounded"></div>
        <div className="w-[90%] h-4 bg-[#c1b3a764] rounded"></div>
        <div className="w-[80%] h-4 bg-[#c1b3a764] rounded"></div>
      </div>
      <div className="w-40 h-3 bg-[#c1b3a764] ml-4 mt-20"></div>
    </div>
  );
}

export default DocumentViewerSkeleton;
