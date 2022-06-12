export type SourceLocation = unknown;
export type Token = unknown;

// https://github.com/KaTeX/KaTeX/blob/main/src/environments/array.js
export type AlignSpec = { type: "separator"; separator: string } | {
  type: "align";
  align: string;
  pregap?: number;
  postgap?: number;
};
export type ColSeparationType = "align" | "alignat" | "gather" | "small" | "CD";

// https://github.com/KaTeX/KaTeX/blob/main/src/symbols.js
export const ATOMS = {
  "bin": 1,
  "close": 1,
  "inner": 1,
  "open": 1,
  "punct": 1,
  "rel": 1,
};
export type Atom = keyof typeof ATOMS;

// https://github.com/KaTeX/KaTeX/blob/main/src/types.js
export type Mode = "math" | "text";
export type StyleStr = "text" | "display" | "script" | "scriptscript";

// https://github.com/KaTeX/KaTeX/blob/main/src/units.js
export type Measurement = { number: number; unit: string };

// https://github.com/KaTeX/KaTeX/blob/main/src/parseNode.js
export type NodeType = keyof ParseNodeTypes;
export type ParseNode<TYPE extends NodeType> = ParseNodeTypes[TYPE];
export type SymbolParseNode =
  | ParseNode<"atom">
  | ParseNode<"accent-token">
  | ParseNode<"mathord">
  | ParseNode<"op-token">
  | ParseNode<"spacing">
  | ParseNode<"textord">;
export type UnsupportedCmdParseNode = ParseNode<"color">;
export type AnyParseNode = ParseNodeTypes[keyof ParseNodeTypes];
type ParseNodeTypes = {
  "array": {
    type: "array";
    mode: Mode;
    loc?: SourceLocation | undefined;
    colSeparationType?: ColSeparationType;
    hskipBeforeAndAfter?: boolean;
    addJot?: boolean;
    cols?: AlignSpec[];
    arraystretch: number;
    body: AnyParseNode[][];
    rowGaps: (Measurement | undefined)[];
    hLinesBeforeRow: Array<boolean[]>;
    tags?: (boolean | AnyParseNode[])[];
    leqno?: boolean;
    isCD?: boolean;
  };
  "cdlabel": {
    type: "cdlabel";
    mode: Mode;
    loc?: SourceLocation | undefined;
    side: string;
    label: AnyParseNode;
  };
  "cdlabelparent": {
    type: "cdlabelparent";
    mode: Mode;
    loc?: SourceLocation | undefined;
    fragment: AnyParseNode;
  };
  "color": {
    type: "color";
    mode: Mode;
    loc?: SourceLocation | undefined;
    color: string;
    body: AnyParseNode[];
  };
  "color-token": {
    type: "color-token";
    mode: Mode;
    loc?: SourceLocation | undefined;
    color: string;
  };
  "op": {
    type: "op";
    mode: Mode;
    loc?: SourceLocation | undefined;
    limits: boolean;
    alwaysHandleSupSub?: boolean;
    suppressBaseShift?: boolean;
    parentIsSupSub: boolean;
    symbol: boolean;
    name: string;
    body?: void;
  } | {
    type: "op";
    mode: Mode;
    loc?: SourceLocation | undefined;
    limits: boolean;
    alwaysHandleSupSub?: boolean;
    suppressBaseShift?: boolean;
    parentIsSupSub: boolean;
    symbol: false;
    name?: void;
    body: AnyParseNode[];
  };
  "ordgroup": {
    type: "ordgroup";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode[];
    semisimple?: boolean;
  };
  "raw": {
    type: "raw";
    mode: Mode;
    loc?: SourceLocation | undefined;
    string: string;
  };
  "size": {
    type: "size";
    mode: Mode;
    loc?: SourceLocation | undefined;
    value: Measurement;
    isBlank: boolean;
  };
  "styling": {
    type: "styling";
    mode: Mode;
    loc?: SourceLocation | undefined;
    style: StyleStr;
    body: AnyParseNode[];
  };
  "supsub": {
    type: "supsub";
    mode: Mode;
    loc?: SourceLocation | undefined;
    base: AnyParseNode | undefined;
    sup?: AnyParseNode | undefined;
    sub?: AnyParseNode | undefined;
  };
  "tag": {
    type: "tag";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode[];
    tag: AnyParseNode[];
  };
  "text": {
    type: "text";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode[];
    font?: string;
  };
  "url": {
    type: "url";
    mode: Mode;
    loc?: SourceLocation | undefined;
    url: string;
  };
  "verb": {
    type: "verb";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: string;
    star: boolean;
  };
  "atom": {
    type: "atom";
    family: Atom;
    mode: Mode;
    loc?: SourceLocation | undefined;
    text: string;
  };
  "mathord": {
    type: "mathord";
    mode: Mode;
    loc?: SourceLocation | undefined;
    text: string;
  };
  "spacing": {
    type: "spacing";
    mode: Mode;
    loc?: SourceLocation | undefined;
    text: string;
  };
  "textord": {
    type: "textord";
    mode: Mode;
    loc?: SourceLocation | undefined;
    text: string;
  };
  "accent-token": {
    type: "accent-token";
    mode: Mode;
    loc?: SourceLocation | undefined;
    text: string;
  };
  "op-token": {
    type: "op-token";
    mode: Mode;
    loc?: SourceLocation | undefined;
    text: string;
  };
  "accent": {
    type: "accent";
    mode: Mode;
    loc?: SourceLocation | undefined;
    label: string;
    isStretchy?: boolean;
    isShifty?: boolean;
    base: AnyParseNode;
  };
  "accentUnder": {
    type: "accentUnder";
    mode: Mode;
    loc?: SourceLocation | undefined;
    label: string;
    isStretchy?: boolean;
    isShifty?: boolean;
    base: AnyParseNode;
  };
  "cr": {
    type: "cr";
    mode: Mode;
    loc?: SourceLocation | undefined;
    newLine: boolean;
    size: Measurement | undefined;
  };
  "delimsizing": {
    type: "delimsizing";
    mode: Mode;
    loc?: SourceLocation | undefined;
    size: 1 | 2 | 3 | 4;
    mclass: "mopen" | "mclose" | "mrel" | "mord";
    delim: string;
  };
  "enclose": {
    type: "enclose";
    mode: Mode;
    loc?: SourceLocation | undefined;
    label: string;
    backgroundColor?: string;
    borderColor?: string;
    body: AnyParseNode;
  };
  "environment": {
    type: "environment";
    mode: Mode;
    loc?: SourceLocation | undefined;
    name: string;
    nameGroup: AnyParseNode;
  };
  "font": {
    type: "font";
    mode: Mode;
    loc?: SourceLocation | undefined;
    font: string;
    body: AnyParseNode;
  };
  "genfrac": {
    type: "genfrac";
    mode: Mode;
    loc?: SourceLocation | undefined;
    continued: boolean;
    numer: AnyParseNode;
    denom: AnyParseNode;
    hasBarLine: boolean;
    leftDelim: string | undefined;
    rightDelim: string | undefined;
    size: StyleStr | "auto";
    barSize: Measurement | null;
  };
  "hbox": {
    type: "hbox";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode[];
  };
  "horizBrace": {
    type: "horizBrace";
    mode: Mode;
    loc?: SourceLocation | undefined;
    label: string;
    isOver: boolean;
    base: AnyParseNode;
  };
  "href": {
    type: "href";
    mode: Mode;
    loc?: SourceLocation | undefined;
    href: string;
    body: AnyParseNode[];
  };
  "html": {
    type: "html";
    mode: Mode;
    loc?: SourceLocation | undefined;
    attributes: { [key: string]: string };
    body: AnyParseNode[];
  };
  "htmlmathml": {
    type: "htmlmathml";
    mode: Mode;
    loc?: SourceLocation | undefined;
    html: AnyParseNode[];
    mathml: AnyParseNode[];
  };
  "includegraphics": {
    type: "includegraphics";
    mode: Mode;
    loc?: SourceLocation | undefined;
    alt: string;
    width: Measurement;
    height: Measurement;
    totalheight: Measurement;
    src: string;
  };
  "infix": {
    type: "infix";
    mode: Mode;
    loc?: SourceLocation | undefined;
    replaceWith: string;
    size?: Measurement;
    token: Token | undefined;
  };
  "internal": {
    type: "internal";
    mode: Mode;
    loc?: SourceLocation | undefined;
  };
  "kern": {
    type: "kern";
    mode: Mode;
    loc?: SourceLocation | undefined;
    dimension: Measurement;
  };
  "lap": {
    type: "lap";
    mode: Mode;
    loc?: SourceLocation | undefined;
    alignment: string;
    body: AnyParseNode;
  };
  "leftright": {
    type: "leftright";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode[];
    left: string;
    right: string;
    rightColor: string | undefined;
  };
  "leftright-right": {
    type: "leftright-right";
    mode: Mode;
    loc?: SourceLocation | undefined;
    delim: string;
    color: string | undefined;
  };
  "mathchoice": {
    type: "mathchoice";
    mode: Mode;
    loc?: SourceLocation | undefined;
    display: AnyParseNode[];
    text: AnyParseNode[];
    script: AnyParseNode[];
    scriptscript: AnyParseNode[];
  };
  "middle": {
    type: "middle";
    mode: Mode;
    loc?: SourceLocation | undefined;
    delim: string;
  };
  "mclass": {
    type: "mclass";
    mode: Mode;
    loc?: SourceLocation | undefined;
    mclass: string;
    body: AnyParseNode[];
    isCharacterBox: boolean;
  };
  "operatorname": {
    type: "operatorname";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode[];
    alwaysHandleSupSub: boolean;
    limits: boolean;
    parentIsSupSub: boolean;
  };
  "overline": {
    type: "overline";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode;
  };
  "phantom": {
    type: "phantom";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode[];
  };
  "hphantom": {
    type: "hphantom";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode;
  };
  "vphantom": {
    type: "vphantom";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode;
  };
  "raisebox": {
    type: "raisebox";
    mode: Mode;
    loc?: SourceLocation | undefined;
    dy: Measurement;
    body: AnyParseNode;
  };
  "rule": {
    type: "rule";
    mode: Mode;
    loc?: SourceLocation | undefined;
    shift: Measurement | undefined;
    width: Measurement;
    height: Measurement;
  };
  "sizing": {
    type: "sizing";
    mode: Mode;
    loc?: SourceLocation | undefined;
    size: number;
    body: AnyParseNode[];
  };
  "smash": {
    type: "smash";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode;
    smashHeight: boolean;
    smashDepth: boolean;
  };
  "sqrt": {
    type: "sqrt";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode;
    index: AnyParseNode | undefined;
  };
  "underline": {
    type: "underline";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode;
  };
  "vcenter": {
    type: "vcenter";
    mode: Mode;
    loc?: SourceLocation | undefined;
    body: AnyParseNode;
  };
  "xArrow": {
    type: "xArrow";
    mode: Mode;
    loc?: SourceLocation | undefined;
    label: string;
    body: AnyParseNode;
    below: AnyParseNode | undefined;
  };
};
