import katex from "https://esm.sh/katex@0.16.0";
import { AnyParseNode } from "./model.ts";

export default function parseTex(text: string): AnyParseNode[] {
  return (katex as any).__parse(text);
}
