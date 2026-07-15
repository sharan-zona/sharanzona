import { useState, useEffect } from "react";
import { NAME } from "../data/Data";

export default function TypingName() {
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = NAME;
    const speed = deleting ? 100 : 50;
    const pause = 8400;

    if (!deleting && text === full) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && text === "") {
      setDeleting(false);
      return;
    }

    const timeout = setTimeout(() => {
      setText(
        deleting
          ? full.slice(0, text.length - 1)
          : full.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting]);

  return (
    <h1 className="hero-name">
      {text}
      <span className="cursor">|</span>
    </h1>
  );
}