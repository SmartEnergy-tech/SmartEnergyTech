import { useState, useEffect } from "react";

export function useIsWidth(targetWidth: number, direction: "max" | "min" = "max"): boolean {
  const getMatch = () => (direction === "max" ? window.innerWidth <= targetWidth : window.innerWidth >= targetWidth);

  const [matches, setMatches] = useState(() => (typeof window !== "undefined" ? getMatch() : false));

  useEffect(() => {
    const handleResize = () => setMatches(getMatch());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [targetWidth, direction]);

  return matches;
}
