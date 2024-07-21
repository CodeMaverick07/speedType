"use client";

import { useEffect, useState } from "react";

interface ParagraphProps {
  words: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ words }) => {
  const [clientWords, setClientWords] = useState<string | null>(null);

  useEffect(() => {
    setClientWords(words);
  }, [words]);

  return (
    <div className="text-slate-400 text-2xl max-w-7xl tracking-widest hyphens-auto">
      {clientWords}
    </div>
  );
};

export default Paragraph;
