import React, { useState } from "react";
import "./styles.css";

function WordInput() {
  const [word, setWord] = useState("");
  const [wordDes, setWordDesc] = useState({
    wordlength: 0,
    wordNumber: 0,
  });
  function processWord(){
    if(word){
      setWordDesc({
        ...wordDes,wordlength:word.trim().length,wordNumber:1
      })
    }
    return;
  }
  return (
    <div className="parentDiv">
      <section className="inputSection">
        <input
          className="inputWord"
          type="text"
          onChange={(e) => setWord(e.target.value)}
          placeholder="Please enter the word ..."
          value={word}
        />
        <button className="inputButton" onClick={processWord}>Process Word</button>
      </section>
      <table>
        <thead>
          <th>Characters</th>
          <th>Words</th>
        </thead>
        <tbody>
          <tr>
            <td>{wordDes.wordlength}</td>
            <td>{wordDes.wordNumber}</td>
          </tr>
        </tbody>
      </table>
      <section className="wordData">
        <table>
          <tbody>
            <tr>
              <td>Defination : </td>
              <td>
                in, relating to, or characteristic of a town or city. "the urban
                population"
              </td>
            </tr>
            <tr>
              <td>Parts of Speech :</td>
              <td>Noun</td>
            </tr>
            <tr>
              <td>Synonyms :</td>
              <td>Town</td>
            </tr>
            <tr>
              <td>Antonyms :</td>
              <td>Rural</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default WordInput;
