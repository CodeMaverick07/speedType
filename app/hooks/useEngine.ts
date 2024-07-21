"use client";
import { useCallback, useEffect, useState } from "react";
import { useTypings } from "./useTyping";
import useCountdown from "./useCountdown";
import { useGenerate } from "./useGenerate";

export type State = "start" | "run" | "finish";

const NUMBER_OF_WORDS = 40;
const COUNT_SECONDS = 30;

export const useEngine = () => {
  const [state, setState] = useState<State>("start");
  const { timeLeft, startCountdown, resetCountdown } =
    useCountdown(COUNT_SECONDS);
  const { words, updatedWords } = useGenerate(NUMBER_OF_WORDS);
  const { typed, cursor, clearTyped, totalTyped, resetTotalTyped } = useTypings(
    state !== "finish"
  );

  const isStarting = state === "start" && cursor > 0;
  const areWordsFinished = cursor === words.length;

  const restart = useCallback(() => {
    resetCountdown();
    resetTotalTyped();
    setState("start");
    updatedWords();
    clearTyped();
  }, [clearTyped, updatedWords, resetCountdown, resetTotalTyped]);

  useEffect(() => {
    if (isStarting) {
      setState("run");
      startCountdown();
    }
  }, [isStarting, startCountdown]);

  useEffect(() => {
    if (!timeLeft && state === "run") {
      setState("finish");
    }
  }, [timeLeft, state]);

  useEffect(() => {
    if (areWordsFinished) {
      updatedWords();
      clearTyped();
    }
  }, [clearTyped, areWordsFinished, updatedWords]);

  return { state, words, typed, restart, timeLeft, totalTyped };
};
