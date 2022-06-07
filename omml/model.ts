interface OmmlElementBase<TTagName extends string> {
  tagName: TTagName;
}
export type OmmlElement =
  | OmmlOmath
  | OmmlOmathElement
  | OmmlRpr
  | OmmlT
  | OmmlAccpr
  | OmmlBarpr
  | OmmlBoxpr
  | OmmlBorderboxpr
  | OmmlDpr
  | OmmlEqarrpr
  | OmmlFpr
  | OmmlFuncpr
  | OmmlGroupchrpr
  | OmmlLimlowpr
  | OmmlLimupppr
  | OmmlMpr
  | OmmlMr
  | OmmlNarypr
  | OmmlPhantpr
  | OmmlRadpr
  | OmmlSprepr
  | OmmlSsubpr
  | OmmlSsubsuppr
  | OmmlSsuppr;
export interface OmmlOmath extends OmmlElementBase<"m:oMath"> {
  children: OmmlOmathElement[];
}
export interface OmmlMathArg {
  argpr?: OmmlMathArgpr;
  children: OmmlOmathElement[];
  ctrlpr?: unknown; // TODO
}
export interface OmmlMathArgpr extends OmmlElementBase<"m:argPr"> {
  argsz?: -2 | -1 | 0 | 1 | 2;
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
export interface OmmlAcc extends OmmlElementBase<"m:acc"> {
  accpr?: OmmlAccpr;
  e: OmmlMathArg;
}
export interface OmmlAccpr extends OmmlElementBase<"m:accPr"> {
  chr?: string;
  ctrlpr?: unknown; // TODO
}
export interface OmmlBar extends OmmlElementBase<"m:bar"> {
  barpr?: OmmlBarpr;
  e: OmmlMathArg;
}
export interface OmmlBarpr extends OmmlElementBase<"m:barPr"> {
  pos?: "top" | "bot";
  ctrlpr?: unknown; // TODO
}
export interface OmmlBox extends OmmlElementBase<"m:box"> {
  boxpr?: OmmlBoxpr;
  e: OmmlMathArg;
}
export interface OmmlBoxpr extends OmmlElementBase<"m:boxPr"> {
  opemu?: boolean;
  nobreak?: boolean;
  diff?: boolean;
  brk?: number; // 1~255
  aln?: boolean;
  ctrlpr?: unknown; // TODO
}
export interface OmmlBorderbox extends OmmlElementBase<"m:borderBox"> {
  borderboxpr?: OmmlBorderboxpr;
  e: OmmlMathArg;
}
export interface OmmlBorderboxpr extends OmmlElementBase<"m:borderBoxPr"> {
  hidetop?: boolean;
  hidebot?: boolean;
  hideleft?: boolean;
  hideright?: boolean;
  strikeh?: boolean;
  strikev?: boolean;
  strikebltr?: boolean;
  striketlbr?: boolean;
  ctrlpr?: unknown; // TODO
}
export interface OmmlD extends OmmlElementBase<"m:d"> {
  dpr?: OmmlDpr;
  e: OmmlMathArg[];
}
export interface OmmlDpr extends OmmlElementBase<"m:dPr"> {
  begchr?: string;
  sepchr?: string;
  endchr?: string;
  grow?: boolean;
  shp?: "centered" | "match";
  ctrlpr?: unknown;
}
export interface OmmlEqarr extends OmmlElementBase<"m:eqArr"> {
  eqarrpr?: OmmlEqarrpr;
  e: OmmlMathArg[];
}
export interface OmmlEqarrpr extends OmmlElementBase<"m:eqArrPr"> {
  basejc?: "inline" | "top" | "center" | "bottom" | "inside" | "outside";
  maxdist?: boolean;
  objdist?: boolean;
  rsprule?: 0 | 1 | 2 | 3 | 4;
  rsp?: number; // unsigned int
  ctrlpr?: unknown;
}
export interface OmmlF extends OmmlElementBase<"m:f"> {
  fpr?: OmmlFpr;
  num: OmmlMathArg;
  den: OmmlMathArg;
}
export interface OmmlFpr extends OmmlElementBase<"m:fPr"> {
  type?: "bar" | "skw" | "lin" | "noBar";
  ctrlpr?: unknown; // TODO
}
export interface OmmlFunc extends OmmlElementBase<"m:func"> {
  funcpr?: OmmlFuncpr;
  fname: OmmlMathArg;
  e: OmmlMathArg;
}
export interface OmmlFuncpr extends OmmlElementBase<"m:funcPr"> {
  ctrlpr?: unknown; // TODO
}
export interface OmmlGroupchr extends OmmlElementBase<"m:groupChr"> {
  groupchrpr?: OmmlGroupchrpr;
  e: OmmlMathArg;
}
export interface OmmlGroupchrpr extends OmmlElementBase<"m:groupChrPr"> {
  chr?: string;
  pos?: "top" | "bot";
  vertjc?: "top" | "bot";
  ctrlpr?: unknown; // TODO
}
export interface OmmlLimlow extends OmmlElementBase<"m:limLow"> {
  limlowpr?: OmmlLimlowpr;
  e: OmmlMathArg;
  lim: OmmlMathArg;
}
export interface OmmlLimlowpr extends OmmlElementBase<"m:limLowPr"> {
  ctrlpr?: unknown; // TODO
}
export interface OmmlLimupp extends OmmlElementBase<"m:limUpp"> {
  limupppr?: OmmlLimupppr;
  e: OmmlMathArg;
  lim: OmmlMathArg;
}
export interface OmmlLimupppr extends OmmlElementBase<"m:limUppPr"> {
  ctrlpr?: unknown; // TODO
}
export interface OmmlM extends OmmlElementBase<"m:m"> {
  mpr?: OmmlMpr;
  mr: OmmlMr[];
}
export interface OmmlMcs extends OmmlElementBase<"m:mcs"> {
  mc: OmmlMc[];
}
export interface OmmlMc extends OmmlElementBase<"m:mc"> {
  mcpr?: OmmlMcpr;
}
export interface OmmlMcpr extends OmmlElementBase<"m:mcPr"> {
  count?: number; // 1~255
  mcjc?: "left" | "center" | "right" | "inside" | "outside";
}
export interface OmmlMpr extends OmmlElementBase<"m:mPr"> {
  basejc?: "inline" | "top" | "center" | "bottom" | "inside" | "outside";
  plchide?: boolean;
  rsprule?: 0 | 1 | 2 | 3 | 4;
  cgprule?: 0 | 1 | 2 | 3 | 4;
  rsp?: number; // unsigned int
  csp?: number; // unsigned int
  cgp?: number; // unsigned int
  mcs?: OmmlMcs;
  ctrlpr?: unknown; // TODO
}
export interface OmmlMr extends OmmlElementBase<"m:mr"> {
  e: OmmlMathArg[];
}
export interface OmmlNary extends OmmlElementBase<"m:nary"> {
  narypr?: OmmlNarypr;
  sub: OmmlMathArg;
  sup: OmmlMathArg;
  e: OmmlMathArg;
}
export interface OmmlNarypr extends OmmlElementBase<"m:naryPr"> {
  chr?: string;
  limloc?: "undOvr" | "subSup";
  grow?: boolean;
  subhide?: boolean;
  suphide?: boolean;
  ctrlpr?: unknown; // TODO
}
export interface OmmlPhant extends OmmlElementBase<"m:phant"> {
  phantpr?: OmmlPhantpr;
  e: OmmlMathArg;
}
export interface OmmlPhantpr extends OmmlElementBase<"m:phantPr"> {
  show?: boolean;
  zerowid?: boolean;
  zeroasc?: boolean;
  zerodesc?: boolean;
  transp?: boolean;
  ctrlpr?: unknown; // TODO
}
export interface OmmlRad extends OmmlElementBase<"m:rad"> {
  radpr?: OmmlRadpr;
  deg: OmmlMathArg;
  e: OmmlMathArg;
}
export interface OmmlRadpr extends OmmlElementBase<"m:radPr"> {
  deghide?: boolean;
  ctrlpr?: unknown; // TODO
}
export interface OmmlSpre extends OmmlElementBase<"m:sPre"> {
  sprepr?: OmmlSprepr;
  sub: OmmlMathArg;
  sup: OmmlMathArg;
  e: OmmlMathArg;
}
export interface OmmlSprepr extends OmmlElementBase<"m:sPrePr"> {
  ctrlpr?: unknown; // TODO
}
export interface OmmlSsub extends OmmlElementBase<"m:sSub"> {
  ssubpr?: OmmlSprepr;
  e: OmmlMathArg;
  sub: OmmlMathArg;
}
export interface OmmlSsubpr extends OmmlElementBase<"m:sSubPr"> {
  ctrlpr?: unknown; // TODO
}
export interface OmmlSsubsup extends OmmlElementBase<"m:sSubSup"> {
  ssubsuppr?: OmmlSsubsuppr;
  e: OmmlMathArg;
  sub: OmmlMathArg;
  sup: OmmlMathArg;
}
export interface OmmlSsubsuppr extends OmmlElementBase<"m:sSubSupPr"> {
  alnscr?: boolean;
  ctrlpr?: unknown; // TODO
}
export interface OmmlSsup extends OmmlElementBase<"m:sSup"> {
  ssuppr?: OmmlSprepr;
  e: OmmlMathArg;
  sup: OmmlMathArg;
}
export interface OmmlSsuppr extends OmmlElementBase<"m:sSupPr"> {
  ctrlpr?: unknown; // TODO
}
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
