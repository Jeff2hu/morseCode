import React,{ useState } from 'react';
import List from './List';
import Transition from './Transition';

const MorseCode = () => {

  const [letter,setLetter] = useState("");
  const [code,setCode] = useState("");

  const letterHandler = (e) => {
    setLetter(e.target.value);
  }
  const codeHandler = (e) => {
    setCode(e.target.value);
  }

  const morseCode = "A;.-|B;-...|C;-.-.|D;-..|E;.|F;..-.|G;--.|H;....|I;..|J;.---|K;-.-|L;.-..|M;--|N;-.|O;---|P;.--.|Q;--.-|R;.-.|S;...|T;-|U;..-|V;...-|W;.--|X;-..-|Y;-.--|Z;--..|/;-..-.|1;.----|2;..---|3;...--|4;....-|5;.....|6;-....|7;--...|8;---..|9;----.|0;-----"
  const morseList = morseCode.split("|");
  for(let i=0;i<morseList.length;i++){
    morseList[i] = morseList[i].split(";");
  }
  // 先將相對應的英文和密碼先使用 | 分割成[A;.- , B;-... , C...]用morseList接住
  // 再將morseList使用迴圈將每個在使用 ; 分割成[[A , .-] , [B , -...] , [C ,]...]
  
  const findCode = (letter) => {
    for(let i=0;i<morseList.length;i++){
      if(morseList[i][0]===letter){
        return morseList[i][1];
      }
    }
    return letter;
  }
  // 將字母丟進去找morseList裡相對應的密碼並return,若字母無法辨認便回傳字母
  
  const findLetter= (code) => {
    for(let i=0;i<morseList.length;i++){
      if(morseList[i][1]===code){
        return morseList[i][0];
      }
    }
    return code;
  }
  // 將密碼丟進去找morseList裡相對應的字母並return,若密碼無法辨認便回傳密碼
  
  const translateMorse = (letter) => {
    let text = letter.toUpperCase();
    let result = "";
    for(let i=0;i<text.length;i++){
      result += findCode(text[i])+" ";
    }
    setCode(result);
    return result;
  }
  // 先將字母轉為大寫丟進去findCode找到對應的密碼return

  const translateLetter = (code) => {
    let morse = code.split(" ")
    let result = "";
    for(let i=0;i<morse.length;i++){
      result += findLetter(morse[i]);
    }
    setLetter(result);
    return result;
  }
  // 先將密碼依照空格分割丟進去findLetter找到對應的字母return
  // 如果沒split(" ")轉為Array的話 => ---( 實質是O )會一個字一個字比對會轉為TTT
  

  return (
    <div className='morseCode'>
      <Transition 
        letter={letterHandler}
        code={code}
        toLetter={()=>{translateLetter(code)}}
        toCode={()=>{translateMorse(letter)}}
        showCode={codeHandler}
        showLetter={letter}
      />
      <List letter={morseList}/>
    </div>
  )
}

export default MorseCode