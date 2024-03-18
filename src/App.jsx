import { useState } from 'react'
import './App.css'
import WordInput from './Components/wordInput/WordInput';
import ParagraphInput from './Components/paragraphInput/ParagraphInput';

function App() {
  const[isWordInput,setIsWordInput]=useState("wordInput");
  const buttonStyle={
    border:'1px solid black',
    backgroundColor:"lightgrey"
  }
  function setButtonValue(e){
    setIsWordInput(e.target.value);
  }

  return (
    <>
    <h1 className='heading'>Text Analyzer</h1>
    <p className='desc'>Text Analyzer is a simple free online tool for SEO web content analysis that helps you find most frequent phrases and words, number of characters, words, sentences and paragraphs, and estimated read and speak time of your content.</p>
    <div className='buttonDiv'>
      {/* changing the button style on toggle */}
      <button className='buttons' style={isWordInput==="wordInput"?buttonStyle:{}}value="wordInput"onClick={setButtonValue}>Word Input</button>
      <button className='buttons' style={isWordInput==="paragraphInput"?buttonStyle:{}}value="paragraphInput"onClick={setButtonValue}>Paragraph</button>
    </div>
    {
      // render resp. component as per state
      isWordInput==="wordInput"?<WordInput/>:<ParagraphInput/>
    }
    </>
  )
}

export default App
