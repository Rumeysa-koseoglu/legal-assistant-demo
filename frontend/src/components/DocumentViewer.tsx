import { IoChevronBack } from "react-icons/io5";

type Props = {
  doc: {
    id: string;
    title: string;
    content: string;
  };
  onBack: () => void;
};

function DocumentViewer({ doc, onBack }: Props) {
  return (
    <div className="w-full h-full py-6 px-15 fixed z-1 border border-black">
      <button
        className=" flex flex-row items-center gap-4 w-60 text-[#92613A] font-raleway font-semibold text-lg cursor-pointer"
        onClick={onBack}
      >
        <IoChevronBack className="w-6 h-6" /> Back to search
      </button>
      <div className="document w-190 max-h-full px-10 py-5 mt-20 mx-15 rounded-lg whitespace-pre-line bg-[#fbf8f671] font-lora shadow-xl">
        <p className="text-sm font-extralight font-sans text-[#643d1d]">
          document ID: {doc.id}
        </p>
        <p className="p-4 font-extrabold text-2xl text-[#643d1d] text-center">
          {doc.title}
        </p>
        <p className="p-6 font-normal text-[#472d19] text-left text-[17px]">
          {doc.content}
        </p>
      </div>
    </div>
  );
}

export default DocumentViewer;
