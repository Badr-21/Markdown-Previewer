import "./App.css";
import { useState } from "react";
import { marked } from "marked";

function App() {
   const [content, setContent] = useState(`
   # This is a heading (H1 size)
   ___
   ## This is a sub heading (H2 size)
   ___
   [Markdown Previewer project page](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)
   ___
   This is inline code \`<p></p>\`
   ___
   This is code block
   \`\`\`js
   function sum(num1, num2) {
      return num1 + num2
   }
   \`\`\`
   ___
   1. first
      - one
      - two
   2. second
      - three
      - four
   ___
   > This is a quote
   ___
   This is an image
   ![freecodecamp](https://play-lh.googleusercontent.com/7cis8M9xeE5wYpR9QvJOC1dnvG5mlI6sy3LpP6kS3FYV29SU5dtBBO2ApKXVf2qWYg=s256-rw)
   ___
   **This is bolded text**
   `);
   const handleChange = (e) => {
      setContent(e.target.value);
   };
   return (
      <div className="App">
         <h1>Markdown Previewer</h1>
         <h2>Editor</h2>
         <textarea
            style={editorStyle}
            id="editor"
            value={content}
            onChange={handleChange}
         ></textarea>
         <h2>Preview</h2>
         <div
            style={previewStyle}
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(content, { breaks: true }) }}
         ></div>
      </div>
   );
}

export default App;

const editorStyle = {
   width: "30rem",
   height: "20rem",
   resize: "none",
   marginBottom: "4rem",
};
const previewStyle = {
   width: "50rem",
   height: "20rem",
   border: "1px solid black",
   overflowY: "scroll",
   backgroundColor: "lightgray",
};
