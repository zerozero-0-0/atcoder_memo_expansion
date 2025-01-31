import { useState } from "react";
import Process from "./Process";

// 問題の順番をランダムにする
const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function Typing(language: string) {
  const [questions, setQuestions] = useState<string[]>([]);

  const result = Process(language);

  if(result !== null) {
    result.then((data) => {
      if (data !== null) {
        setQuestions(shuffle(data));
      }
  })};

  return (
    <>
    {questions.length === 0 ? (
      <p>データの取得に失敗しました</p>
    ): (
      questions.map((question, index) => (
        <pre key={index}>
          <p>{question}</p>
        </pre>
      ))
    )}
    </>
  );
}
