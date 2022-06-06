import { tag } from "../misc/xml.ts";
import {
  OmmlAcc,
  OmmlBar,
  OmmlBorderbox,
  OmmlBox,
  OmmlD,
  OmmlElement,
  OmmlEqarr,
  OmmlF,
  OmmlFunc,
  OmmlGroupchr,
  OmmlLimlow,
  OmmlLimupp,
  OmmlM,
  OmmlNary,
  OmmlOmath,
  OmmlPhant,
  OmmlR,
  OmmlRad,
  OmmlRpr,
  OmmlSpre,
  OmmlSsub,
  OmmlSsubsup,
  OmmlSsup,
  OmmlT,
} from "./model.ts";

export default function ommlToString(node: OmmlElement): string {
  return toStringTable[node.tagName](node as any);
}

const todo = () => "";
const toStringTable: {
  [tagName in OmmlElement["tagName"]]: (
    node: Extract<OmmlElement, { tagName: tagName }>,
  ) => string;
} = {
  "m:oMath": todo,
  "m:acc": todo,
  "m:bar": todo,
  "m:box": todo,
  "m:borderBox": todo,
  "m:d": todo,
  "m:eqArr": todo,
  "m:f": todo,
  "m:func": todo,
  "m:groupChr": todo,
  "m:limLow": todo,
  "m:limUpp": todo,
  "m:m": todo,
  "m:nary": todo,
  "m:phant": todo,
  "m:rad": todo,
  "m:sPre": todo,
  "m:sSub": todo,
  "m:sSubSup": todo,
  "m:sSup": todo,
  "m:r": ommlRToString,
  "m:rPr": todo,
  "m:t": ommlTToString,
};

export function ommlRToString({ tagName, children }: OmmlR): string {
  return tag(tagName, {}, () => {
    // TODO: rpr
    return children.map(ommlTToString).join("");
  });
}

export function ommlTToString({ tagName, xmlSpace, text }: OmmlT): string {
  return tag(tagName, { "xml:space": xmlSpace }, () => text);
}
