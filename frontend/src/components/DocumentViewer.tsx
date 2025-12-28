type Doc = {
  id: string;
  title: string;
  content: string;
};

function DocumentViewer({ doc }: { doc: Doc }) {
  return <div className="w-full max-h-full py-6 px-15 fixed z-1"></div>;
}

export default DocumentViewer;
