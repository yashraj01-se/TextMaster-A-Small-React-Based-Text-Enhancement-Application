import React, { useState } from "react";
import './TextForm.css'; // Importing CSS
export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleonChange = (event) => {
    // enable us to type
    setText(event.target.value);
  };

  const handleloClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleclearClick = () => {
    let newtext = '';
    setText(newtext);
    props.showAlert("Text Cleared", "success");
  };

  const handleCopyClick = () => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    props.showAlert("Text copied to clipboard:", "success");
    console.log("Copied to clipboard:", text);
  };

  const handleClearClick = () => {
    let newText = text.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' '); // Removes extra spaces
    setText(newText); // Set the cleaned text
    props.showAlert("Extra Space Removed", "success");
  };

  // New functions for additional functionalities
  const handleSentenceCase = () => {
    const sentences = text.split('. ').map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1));
    setText(sentences.join('. '));
    props.showAlert("Converted to Sentence Case", "success");
  };

  

  const [text, setText] = useState("");
  // text="new text"; //wrong way to change the state...
  // setText("new text")//correct way
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042734' }}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042734' }}
            onChange={handleonChange}
            id="Mybox"
            rows="8"
          ></textarea>
        </div>
       
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={handleloClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={handleclearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2  my-1" onClick={handleClearClick}>
          Remove Extra Space
        </button>
          
        {/* New Buttons for Additional Functionalities */}
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleSentenceCase}>
          Sentence Case Maker
        </button>
        
      </div>
     
      <div className="container my-3 mt-5" style={{ color: props.mode === 'dark' ? 'white' : '#042734' }}>
        <h2>Your Text Summary</h2>
        <p>
          {text.trim() === ""
            ? 0
            : text.trim().split(/\s+/).filter(Boolean).length} Words and {text.length} Characters
        </p>

        <p>{text.trim() === "" ? 0 : 0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </>
  );
}
