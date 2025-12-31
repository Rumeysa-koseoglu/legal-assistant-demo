function DocumentListSkeleton() {
  return (
    <div className="document-section grid grid-cols-3 gap-5 w-[%74] pl-8 pr-10 py-5 z-1 relative border-t border-[#92613a]">
      <div className="doc-card flex flex-col gap-4 p-4 rounded-xl shadow-xl bg-[#d9c9bc64]">
        <div className="categ-date flex flex-row items-center justify-between">
          <div className="category bg-[#c1b3a764] rounded py-0.5 mt-3 w-23 h-3.5"></div>
          <div className="date bg-[#c1b3a764] rounded w-18 h-3.5 mt-3 "></div>
        </div>

        <div className="title bg-[#c1b3a764] rounded w-32 h-4"></div>
        <div className="content bg-[#c1b3a764] w-80 h-3"></div>
        <div className="content bg-[#c1b3a764] w-80 h-3"></div>
      </div>
      <div className="doc-card flex flex-col gap-4 p-4 rounded-xl shadow-xl bg-[#d9c9bc64]">
        <div className="categ-date flex flex-row items-center justify-between">
          <div className="category  bg-[#c1b3a764] rounded py-0.5 mt-3 w-23 h-3.5"></div>
          <div className="date bg-[#c1b3a764] rounded w-18 h-3.5 mt-3 "></div>
        </div>

        <div className="title bg-[#c1b3a764] rounded w-32 h-4"></div>
        <div className="content bg-[#c1b3a764] w-80 h-3"></div>
        <div className="content bg-[#c1b3a764] w-80 h-3"></div>
      </div>
      <div className="doc-card flex flex-col gap-4 p-4 rounded-xl shadow-xl bg-[#d9c9bc64]">
        <div className="categ-date flex flex-row items-center justify-between">
          <div className="category  bg-[#c1b3a764] rounded py-0.5 mt-3 w-23 h-3.5"></div>
          <div className="date bg-[#c1b3a764] rounded w-18 h-3.5 mt-3 "></div>
        </div>

        <div className="title bg-[#c1b3a764] rounded w-32 h-4"></div>
        <div className="content bg-[#c1b3a764] w-80 h-3"></div>
        <div className="content bg-[#c1b3a764] w-80 h-3"></div>
      </div>
      <div className="doc-card flex flex-col gap-4 p-4 rounded-xl shadow-xl bg-[#d9c9bc64]">
        <div className="categ-date flex flex-row items-center justify-between">
          <div className="category  bg-[#c1b3a764] rounded py-0.5 mt-3 w-23 h-3.5"></div>
          <div className="date bg-[#c1b3a764] rounded w-18 h-3.5 mt-3 "></div>
        </div>

        <div className="title bg-[#c1b3a764] rounded w-32 h-4"></div>
        <div className="content bg-[#c1b3a764] w-80 h-3"></div>
        <div className="content bg-[#c1b3a764] w-80 h-3"></div>
      </div>
      <div className="doc-card flex flex-col gap-4 p-4 rounded-xl shadow-xl bg-[#d9c9bc64]">
        <div className="categ-date flex flex-row items-center justify-between">
          <div className="category  bg-[#c1b3a764] rounded py-0.5 mt-3 w-23 h-3.5"></div>
          <div className="date bg-[#c1b3a764] rounded w-18 h-3.5 mt-3 "></div>
        </div>

        <div className="title bg-[#c1b3a764] rounded w-32 h-4"></div>
        <div className="content bg-[#c1b3a764] w-80 h-3"></div>
        <div className="content bg-[#c1b3a764] w-80 h-3"></div>
      </div>
    </div>
  );
}

export default DocumentListSkeleton;

// <div className="documents-section grid grid-cols-3 gap-5 w-[74%] overflow-y-auto no-scrollbar max-h-130 font-lora pl-8 pr-10 py-5 z-1 relative border-t border-[#92613A] ">
//             {docs.map((doc) => (
//               <div
//                 className="flex flex-col gap-4 p-4 rounded-xl shadow-xl cursor-pointer hover:transform-[translateY(-6px)] transition-transform"
//                 onClick={() => setActiveDocId(doc.id)}
//                 key={doc.id}
//               >
//                 <div className="flex flex-row items-center justify-between">
//                   <p className=" bg-[#d9c9bc64] text-[#5c3e24] text-[14px] rounded py-0.5 mt-3 w-23">
//                     {doc.category}
//                   </p>
//                   <p className="mt-3 text-[#5c3e24] text-[14px]">
//                     {doc.date}
//                   </p>
//                 </div>
//                 <p className="font-bold text-lg md:text-xl text-[#92613A]">
//                   {doc.title}
//                 </p>
//                 <p className="font-extralight text-[#3c3b3b] line-clamp-3 whitespace-pre-line">
//                   {doc.content}
//                 </p>
//               </div>
//             ))}
//           </div>
