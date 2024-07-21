"use client";
import { generate } from "random-words";
import { useCallback, useState, useEffect } from "react";

export const useGenerate = (count: number) => {
  const generateWords = useCallback((num: number) => {
    return generate({ exactly: num, join: " " });
  }, []);

  const [words, setWords] = useState<string>("");

  const updatedWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count, generateWords]);

  useEffect(() => {
    setWords(generateWords(count)); // Initial word generation on mount
  }, [count, generateWords]);

  return { words, updatedWords };
};
