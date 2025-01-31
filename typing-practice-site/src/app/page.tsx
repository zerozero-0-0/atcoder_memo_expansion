'use client'
import { useState } from 'react';
import Typing from './Components/Typing/Typing';


export default function Home() {
  const languages = ["python", "JavaScript", "C++", "C", "Java"];

  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleChangeLanguage = () => {
    setSelectedLanguage(null);
  }

  const changeLanguage = () => {
    if(selectedLanguage !== null && selectedLanguage !== "none") {
      return (
        <>
        <p onClick={handleChangeLanguage}>別の言語にする</p>
        </>
      )
    }
    return null;
  }

  let language = "none";
  if(selectedLanguage !== null) {
    language = selectedLanguage;
  }

  // 指定されたlanguageを引数に持つタイピング関数を実装する
  const displayTyping = (selectedLanguage: string | null) => {
    const questions = Typing(language);
    if(selectedLanguage !== null) {
      if(questions === null) {
        return (
          <>
          <p>データの取得に失敗しました</p>
          </>
        )
      } else {
        return questions;
      }
    } else {
      return null;
    }
  }
  

  return (
    <>
      <p>言語を選んでください</p>
      {languages.map((language) => (
        <div key={language}>
          <div onClick={() => handleLanguageSelect(language)}> {language} </div>
        </div>
      ))}
      <p>選んだ言語: {selectedLanguage}</p>
      {displayTyping(selectedLanguage)}
      {changeLanguage()}
    </>
  );
}
