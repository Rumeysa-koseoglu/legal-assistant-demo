import React, { useState } from "react";

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

  // const [inputText, setInputText] = useState<string>("");

  //FIRST SOLUTION--------
  // const [docs, setDocs] = useState<Doc[]>([]);

  //
  // const search = async () => {
  //   const res = await fetch(`${URL}?q=${query}`);
  //   const data = await res.json();
  //   setDocs(data);
  // };  FIRST SOLUTION-------

  //

  // const handleRequest = async () => {
  //   const response = await fetch(URL);
  //   if (!response.ok) {
  //     const errorText = await response.text();
  //     throw new Error(errorText);
  //   }
  //   const data = await response.json();
  //   console.log(data);
  // };

  return (
    <div>
      <div className="panel-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search legal docs.."
        />
        <button onClick={filteredSearch}>search</button>
        <div className="document-section">
          {docs.map((doc) => (
            <div key={doc.id}>
              <h3>{doc.title}</h3>
              <p>{doc.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LegalSearchPanel;
