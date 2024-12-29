import React from "react";
import "./About.css"; // Importing CSS

export default function About(props) {
  let myStyle={
    color: props.mode==='light'?'#042743':'white',
    backgroundColor:props.mode==='light'?'white':'#13466e',
  }
  
  return (
    <div className="container" style={myStyle}>
      <h1 className="my-6">About Us</h1>
      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
        style={myStyle}
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What is TextMaster?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextMaster is an application designed to enhance text manipulation
              by providing functionalities such as converting text to uppercase,
              lowercase, and removing spaces. It serves as a convenient tool for
              users who need quick text formatting solutions.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Key Features of TextMaster
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              <ul>
                <li>Convert text to uppercase</li>
                <li>Convert text to lowercase</li>
                <li>Remove extra spaces from the text</li>
                <li>Copy text to the clipboard</li>
                <li>Work in different modes (Bluish)</li>
                <li>Clear text easily</li>
                <li>Convert to a Perfect Sentence.</li>
                <li>Simple and user-friendly interface</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              How to Use TextMaster
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={myStyle}>
              To use TextMaster, simply input your text into the application.
              Choose the desired functionality—whether to convert to uppercase,
              lowercase, remove spaces, copy to clipboard, or clear the text—and
              click the corresponding button to see the results instantly.
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections for TextMaster Project */}
      <div className="my-1">
        <p style={myStyle}>
          <h5 className="text">
            TextMaster is a powerful tool designed to enhance the writing
            experience by providing intelligent suggestions and improving
            content quality.
          </h5>
        </p>
        <img src="li.jpg" alt="TextMaster Overview" className="img-fluid" />
        <p style={myStyle}>
          Our project aims to integrate advanced text manipulation technologies
          to help users achieve better text formatting efficiently.
        </p>
        <img src="lie.jpg" alt="TextMaster Features" className="img-fluid" />
      </div>
    </div>
  );
}
