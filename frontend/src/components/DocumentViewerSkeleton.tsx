function DocumentViewerSkeleton() {
  return (
    <div className="document  w-full lg:w-[65%] px-3 md:px-8 py-4 lg:mx-auto max-h-160 md:max-h-180 rounded-lg whitespace-pre-line bg-[#d9c9bc64] shadow-xl animate-pulse">
      <div className="cat-aiBtn flex flex-row items-center justify-between md:mt-1">
        <div className="category w-30 px-5 lg:px-7 py-3.5 md:py-4 md:mx-6 bg-[#c1b3a764] rounded-full"></div>
        <div className="ai-btn  w-30 md:w-35 lg:w-40 md:h-4 p-3.5 bg-[#c1b3a764] rounded"></div>
      </div>
      <div className="title w-60 md:w-80 lg:w-90 h-7 md:h-8 lg:h-9 bg-[#c1b3a764] flex mx-auto mt-10 lg:mt-20 rounded"></div>
      <div className="content flex flex-col gap-6 px-4 justify-start mb-8 mt-12">
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
