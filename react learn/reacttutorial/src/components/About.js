import React from 'react';

export default function About(props) {



    let mystyle = {
        color: props.Mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.Mode === 'dark' ? '#042743' : 'white'
    }



    return (
        <div className='container my-3' style={mystyle}>

            <h1 >About Us:</h1>

            <div className="accordion" id="accordionExample">

                <div className="accordion-item" style={mystyle} >
                    <h2 className="accordion-header " >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                            What is TextAnalyzer?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" style={{
                            // mystyle

                        }}>
                            <strong>TextAnalyzer</strong> is a smart and user-friendly web application designed to help users analyze and manage text quickly and efficiently. Our platform provides useful text utilities such as word counting, character counting, text formatting, case conversion, removing extra spaces, and much more. Whether you are a student, developer, writer, or professional, TextAnalyzer helps improve productivity and save time while working with text content.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={
                            mystyle

                        }>
                            Our Features
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{
                            mystyle
                        }}>
                            TextAnalyzer offers multiple powerful features to make text editing simple and effective:
                            <ul>

                                <li>Convert text to Uppercase and Lowercase</li>
                                <li>Count Words, Characters, and Reading Time</li>
                                <li>Remove Extra Spaces</li>
                                <li>Copy processed text instantly</li>
                                <li>Download edited text as a file</li>
                                <li>Clean and responsive user interface</li>
                                <li>Dark mode support for better user experience</li>

                            </ul>

                            Our goal is to provide fast, accurate, and easy-to-use text tools for everyone.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle} >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
                            style={mystyle}  >
                            Why Choose Us?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{
                            // mystyle

                        }}>
                            We focus on creating a modern and reliable platform that improves the way users interact with text. TextAnalyzer is built using modern web technologies like React and Bootstrap to ensure smooth performance and attractive design.

                            We believe in:
                            <ul>

                                <li>Simple and clean design</li>
                                <li>Fast processing speed</li>
                                <li>User-friendly experience</li>
                                <li>Continuous improvement and innovation</li>

                            </ul>

                            TextAnalyzer is more than just a text utility website — it is a productivity tool designed to make your daily tasks easier and smarter.
                        </div>
                    </div>
                </div>
            </div>

            {/* <button className="btn btn-primary my-4" onClick={changeMode} value={btnText} >{btnText}</button> */}

        </div>
    )
}
