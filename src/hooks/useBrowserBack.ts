import { useEffect } from "react";

export const useBrowserBack = () => {
  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        if (
          event.target instanceof HTMLElement &&
          event.target.tagName.toLowerCase() !== "input" &&
          event.target.tagName.toLowerCase() !== "textarea"
        ) {
          event.preventDefault();
          window.history.back();
        }
      }
    };

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, []);
};
