

import React, { useState } from 'react';


export default function TextForm(props) {




  const handleUpCaseConvert = () => {
    console.log("I handled click");

    let newtext = text.toUpperCase();
    setText(newtext)


    if (text.length > 0) {

      props.showAlert("Converted into UPPERCASE", "success");
    }
  }

  const handleLOWERCaseConvert = () => {
    let newtext = text.toLowerCase();
    setText(newtext);

    if (text.length > 0) {
      props.showAlert("Converted into LOWERCASE", "success");
    }
  }


  const handleClearText = () => {
    setText('');
    if (text.length > 0) {
      props.showAlert("TEXT CLEARED", "success");
    }
  }

  const handlecopytext = () => {
    navigator.clipboard.writeText(text);

    alert("Text Copied");

    if (text.length > 0) {
      props.showAlert("TEXT COPIED!", "success");
    }
  };


  const handlereverse = () => {
    let newtext = text.split("").reverse().join("");
    setText(newtext);
    if (text.length > 0) {
      props.showAlert("TEXT REVERSED", "success");
    }
  }

  const handleonChange = (event) => {
    console.log("handled on change")
    setText(event.target.value);
  }




  let [text, setText] = useState('');

  const getButtonColor = () => {

    switch (props.bodyclr) {

      case '#78082b':
        return '#530008';

      case '#105c13':
        return '#014224';

      case '#10299a':
        return '#062f6d';

      case '#000000':
        return '#000305';

      case 'white':
        return '#2896c9';



      default:
        return '#0d6efd';
    }

  }

  const getTextColor = () => {
    return props.bodyclr === 'white' ? 'black' : 'white';
  }


  const btnStyle = {
    backgroundColor: getButtonColor(),
    color: 'white',
    border: 'none',
    margin: '5px',
    borderRadius: '8px'
  };



  return (
    <>
      <div className='container my-5' >

        <div className="my-2" >
          <h1>{props.heading}</h1>
          <label
            htmlFor="exampleFormControlTextarea1"
            className="my-2 form-label"
            style={{ color: getTextColor() }}
          >
            Enter text below
          </label>

          <div>

            <textarea
              className="form-control"
              style={{
                backgroundColor: props.bodyclr,
                color: getTextColor()
              }}
              value={text}
              onChange={handleonChange}
              id="mybox"
              rows="8"
            ></textarea>
          </div>

        </div>

        <button className="btn btn-primary mx-1 my-1" style={btnStyle} onClick={handleUpCaseConvert}>Convert to UpperCase</button>

        <button className="btn btn-primary mx-1 my-1" style={btnStyle} onClick={handleLOWERCaseConvert}>Convert to Lowercase</button>



        <button className="btn btn-primary mx-1 my-1" style={btnStyle} onClick={handlecopytext}>Copy Text</button>

        <button className="btn btn-primary mx-1 my-1" style={btnStyle} onClick={handlereverse}>Reverse Text</button>

        <button className="btn btn-primary mx-1 my-1" style={btnStyle} onClick={handleClearText}>Clear Text</button>


      </div>


      <div className="container">

        <h3 className='my-3'>Summary :</h3>
        <p><b>{text.trim().split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> Words  And <b>{text.length}</b> Characters</p>

        <p><b>{0.0088 * text.split(" ").length}</b> Minutes Required to Read</p>


        <h3 className='my-3'>Preview Text</h3>
        <p>{text.length > 0 ? text : 'Enter text in above to preview'}</p>

      </div>

    </>

  )


}
