import React from 'react'
import "./styles.css"
import { useState } from 'react';

function ParagraphInput() {
  const[sentences,setSentences]=useState("");
  const[sentenceDesc,setSentenceDesc]=useState({
    characters:0,
    words:0,
    sentences:0,
    paragraphs:0,
    spaces:0,
    punctuations:0
  })
  function handleChange(event){
    setSentences(event.target.value);
    updateSentenceDesc(event.target.value);
  }
  function updateSentenceDesc(inputText){
    const numChars = inputText.length;

    //splitting inputText at one or more white spaces, filter to remove empty arrays
    const numWords = inputText.trim().split(/\s+/).filter(Boolean).length;

    //splitting at [. ! ?] , filter to remove empty values
    const numSentences = inputText.split(/[.!?]+/).filter(Boolean).length;

    //splitting at checks with new line start and end with spaces
    const numParagraphs = inputText.split(/\n\s*\n/).filter(Boolean).length;

    //splitting at space
    const numSpaces = inputText.split(" ").length - 1;
    
    //splittig at punctuations
    const numPunctuations = inputText.split(/[,.!?;:'"\-\(\)\[\]]+/).filter(Boolean).length;

    //setting up the sentence desc
    setSentenceDesc({
    characters:numChars,
    words:numWords,
    sentences:numSentences,
    paragraphs:numParagraphs,
    spaces:numSpaces,
    punctuations:numPunctuations
    })
  }
  return (
    <div className='parentDiv'>
      <textarea className="textArea"placeholder='Type or copy/paste your content here' onChange={handleChange} value={sentences}></textarea>
      <table>
        <thead>
          <th>Characters</th>
          <th>Words</th>
          <th>Sentences</th>
          <th>Paragraphs</th>
          <th>Spaces</th>
          <th>Punctuations</th>
        </thead>
        <tbody>
          <tr>
            <td>{sentenceDesc.characters}</td>
            <td>{sentenceDesc.words}</td>
            <td>{sentenceDesc.sentences}</td>
            <td>{sentenceDesc.paragraphs}</td>
            <td>{sentenceDesc.spaces}</td>
            <td>{sentenceDesc.punctuations}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ParagraphInput