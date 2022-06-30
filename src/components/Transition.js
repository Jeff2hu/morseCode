import React,{ useRef } from 'react'
import { useState } from 'react';

const Transition = (props) => {

  // const short = document.querySelector(".short");
  // const long = document.querySelector(".long");

  const shortAudio = useRef()
  const longAudio = useRef()

  const playAudio = (code,nowIndex) => {
    let word = code[nowIndex];
    if(word==="."){
      shortAudio.current?.play();
      console.log(shortAudio.current);
    }else if(word==="-"){
      longAudio.current?.play();
    }

    if(code.length>nowIndex){
      setTimeout(()=>{
        playAudio(code,nowIndex+1);
      },500)
    }
  }
  

  return (
    <div className='transition'>
      <audio className='short' ref={shortAudio} src="http://2017.awiclass.monoame.com/audio/morse/short.mp3"></audio>
      <audio className='long' ref={longAudio} src="http://2017.awiclass.monoame.com/audio/morse/long.mp3"></audio>
      <h2>Morse Code Transition</h2>
      <div className="transition-text">
        <textarea cols="20" rows="6" id="showLetter" onChange={props.letter} value={props.showLetter}></textarea>
        <textarea cols="20" rows="6" id="showCode" onChange={props.showCode} value={props.code}></textarea>
      </div>
      <div className="transition-btns">
        <button onClick={props.toCode}>To MorseCode</button>
        <button onClick={props.toLetter}>To Letter</button>
        <button onClick={()=>{
          playAudio(props.code,0);
        }}>Speak</button>

        
      </div>
    </div>
  )
}

export default Transition