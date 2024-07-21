"use client";
import React from "react";
import Paragraph from "./components/Paragraph";
import RestartButton from "./components/RestartButton";
import UserTypings from "./components/UserTypings";
import { useEngine } from "./hooks/useEngine";
import Results from "./components/Results";
import {
  calculateAccuracyPercentage,
  countError,
  calculateWPM,
} from "./utils/helper";

const Page = () => {
  const { words, typed, timeLeft, state, restart, totalTyped } = useEngine();
  const wpm = calculateWPM(words, typed, 30);

  const countErr = countError(typed, words);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="">
        <CountdownTimer timeLeft={timeLeft} />
        <div className="">
          <UserTypings words={words} userInput={typed} />
          <Paragraph words={words} />
        </div>

        <div
          className="flex justify-center items-center"
          onClick={() => {
            restart();
          }}
        >
          <RestartButton />
        </div>
        <Results
          className="mt-10"
          state={state}
          errors={countErr}
          accuracyPercentage={calculateAccuracyPercentage(countErr, totalTyped)}
          total={totalTyped}
          wpm={wpm}
        />
      </div>
    </div>
  );
};
const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <h2 className="text-yellow-400 font-medium text-lg">Time: {timeLeft}</h2>
  );
};

export default Page;
