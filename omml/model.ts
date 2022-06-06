interface OmmlElementBase<TTagName extends string> {
  tagName: TTagName;
}
export type OmmlElement = OmmlOmath | OmmlOmathElement | OmmlRpr | OmmlT;
export interface OmmlOmath extends OmmlElementBase<"m:oMath"> {
  children: OmmlOmathElement[];
}
export interface OmmlMathArg {
  argpr?: { argsz?: -2 | -1 | 0 | 1 | 2 };
  children: OmmlOmathElement[];
  ctrlpr?: unknown; // TODO
}
export type OmmlOmathElement =
  | OmmlAcc
  | OmmlBar
  | OmmlBox
  | OmmlBorderbox
  | OmmlD
  | OmmlEqarr
  | OmmlF
  | OmmlFunc
  | OmmlGroupchr
  | OmmlLimlow
  | OmmlLimupp
  | OmmlM
  | OmmlNary
  | OmmlPhant
  | OmmlRad
  | OmmlSpre
  | OmmlSsub
  | OmmlSsubsup
  | OmmlSsup
  | OmmlR;
export interface OmmlAcc extends OmmlElementBase<"m:acc"> {} // TODO
export interface OmmlBar extends OmmlElementBase<"m:bar"> {} // TODO
export interface OmmlBox extends OmmlElementBase<"m:box"> {} // TODO
export interface OmmlBorderbox extends OmmlElementBase<"m:borderBox"> {} // TODO
export interface OmmlD extends OmmlElementBase<"m:d"> {} // TODO
export interface OmmlEqarr extends OmmlElementBase<"m:eqArr"> {} // TODO
export interface OmmlF extends OmmlElementBase<"m:f"> {} // TODO
export interface OmmlFunc extends OmmlElementBase<"m:func"> {} // TODO
export interface OmmlGroupchr extends OmmlElementBase<"m:groupChr"> {} // TODO
export interface OmmlLimlow extends OmmlElementBase<"m:limLow"> {} // TODO
export interface OmmlLimupp extends OmmlElementBase<"m:limUpp"> {} // TODO
export interface OmmlM extends OmmlElementBase<"m:m"> {} // TODO
export interface OmmlNary extends OmmlElementBase<"m:nary"> {} // TODO
export interface OmmlPhant extends OmmlElementBase<"m:phant"> {} // TODO
export interface OmmlRad extends OmmlElementBase<"m:rad"> {} // TODO
export interface OmmlSpre extends OmmlElementBase<"m:sPre"> {} // TODO
export interface OmmlSsub extends OmmlElementBase<"m:sSub"> {
  ssubpr?: unknown; // TODO
  e: OmmlMathArg;
  sub: OmmlMathArg;
}
export interface OmmlSsubsup extends OmmlElementBase<"m:sSubSup"> {} // TODO
export interface OmmlSsup extends OmmlElementBase<"m:sSup"> {} // TODO
export interface OmmlR extends OmmlElementBase<"m:r"> {
  rpr?: OmmlRpr;
  children: OmmlT[];
}
export interface OmmlRpr extends OmmlElementBase<"m:rPr"> {
  lit?: boolean;
  nor?: boolean;
  scr?:
    | "roman"
    | "script"
    | "fraktur"
    | "double-struck"
    | "sans-serif"
    | "monospace";
  sty?: "p" | "b" | "i" | "bi";
  brk?: number; // 1~255
  aln?: boolean;
}
export interface OmmlT extends OmmlElementBase<"m:t"> {
  xmlSpace?: "default" | "preserve";
  text: string;
}
