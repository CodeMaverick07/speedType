import React from "react";
import Caret from "./caret";
import cn from "classnames";

const UserTypings = ({
  words,
  userInput,
  className,
}: {
  words: string;
  userInput: string;
  className?: string;
}) => {
  const typedCharaters = userInput.split("");
  return (
    <div
      className={`max-w-7xl text-2xl tracking-widest font-md absolute hyphens-auto`}
    >
      {typedCharaters.map((char, index) => {
        return <Character actual={char} expected={words[index]} key={index} />;
      })}
      <Caret />
    </div>
  );
};

const Character = ({
  actual,
  expected,
}: {
  actual: string;
  expected: string;
}) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = actual === " ";
  return (
    <span
      className={cn({
        "text-red-500": !isCorrect && !isWhiteSpace,
        "text-yellow-400": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  );
};

export default UserTypings;
