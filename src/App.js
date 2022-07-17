import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";

// import Image from "@ckeditor/ckeditor5-image/src/image";
// import ImageResizeEditing from "@ckeditor/ckeditor5-image/src/imageresize/imageresizeediting";
// import ImageResizeHandles from "@ckeditor/ckeditor5-image/src/imageresize/imageresizehandles";
// import { BalloonEditor } from "@ckeditor/ckeditor5-build-balloon";

const editorConfiguration = {
  // plugins: [ImageResizeHandles, ImageResizeEditing, Image],
  // toolbar: ["bold", "italic", "Image", "ImageResizeHandles"],
};

function App() {
  const [addData, setVal] = useState("");
  const [addedData, showData] = useState("");
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setVal(data);
  };

  return (
    <>
      {" "}
      <form action="">
        <div className="App">
          <h2>Using CKEditor 5 build in React</h2>
          <CKEditor
            editor={ClassicEditor}
            config={{
              ckfinder: {
                uploadUrl: "/uploads",
              },
            }}
            data={addData}
            onReady={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
            onChange={handleChange}
            onBlur={(event, editor) => {}}
            onFocus={(event, editor) => {}}
          />
        </div>
        <button type="submit" onClick={() => showData(!addedData)}>
          {addedData ? "Hide Data" : "Show Data"}
        </button>
        <div>{addData ? parse(addData) : ""}</div>{" "}
      </form>
    </>
  );
}

export default App;
