import he from "https://esm.sh/v85/he@1.2.0/he.js";
import {
  OmmlAcc,
  OmmlAccpr,
  OmmlBar,
  OmmlBarpr,
  OmmlBorderbox,
  OmmlBorderboxpr,
  OmmlBox,
  OmmlBoxpr,
  OmmlD,
  OmmlDpr,
  OmmlElement,
  OmmlEqarr,
  OmmlEqarrpr,
  OmmlF,
  OmmlFpr,
  OmmlFunc,
  OmmlFuncpr,
  OmmlGroupchr,
  OmmlGroupchrpr,
  OmmlLimlow,
  OmmlLimlowpr,
  OmmlLimupp,
  OmmlLimupppr,
  OmmlM,
  OmmlMathArg,
  OmmlMathArgpr,
  OmmlMc,
  OmmlMcpr,
  OmmlMcs,
  OmmlMpr,
  OmmlMr,
  OmmlNary,
  OmmlNarypr,
  OmmlOmath,
  OmmlOmathElement,
  OmmlPhant,
  OmmlPhantpr,
  OmmlR,
  OmmlRad,
  OmmlRadpr,
  OmmlRpr,
  OmmlSpre,
  OmmlSprepr,
  OmmlSsub,
  OmmlSsubpr,
  OmmlSsubsup,
  OmmlSsubsuppr,
  OmmlSsup,
  OmmlSsuppr,
  OmmlT,
} from "./model.ts";

export default function domToOmml(el: Element): OmmlElement | undefined {
  return toOmmlTable[el.tagName as keyof typeof toOmmlTable]?.(el);
}

const toOmmlTable: {
  [tagName in OmmlElement["tagName"]]: (
    el: Element,
  ) => Extract<OmmlElement, { tagName: tagName }> | undefined;
} = {
  "m:oMath": elementToOmmlOmath,
  "m:argPr": elementToOmmlMathArgpr,
  "m:acc": elementToOmmlAcc,
  "m:bar": elementToOmmlBar,
  "m:box": elementToOmmlBox,
  "m:borderBox": elementToOmmlBorderbox,
  "m:d": elementToOmmlD,
  "m:eqArr": elementToOmmlEqarr,
  "m:f": elementToOmmlF,
  "m:func": elementToOmmlFunc,
  "m:groupChr": elementToOmmlGroupchr,
  "m:limLow": elementToOmmlLimlow,
  "m:limUpp": elementToOmmlLimupp,
  "m:m": elementToOmmlM,
  "m:nary": elementToOmmlNary,
  "m:phant": elementToOmmlPhant,
  "m:rad": elementToOmmlRad,
  "m:sPre": elementToOmmlSpre,
  "m:sSub": elementToOmmlSsub,
  "m:sSubSup": elementToOmmlSsubsup,
  "m:sSup": elementToOmmlSsup,
  "m:r": elementToOmmlR,
  "m:rPr": elementToOmmlRpr,
  "m:t": elementToOmmlT,
  "m:accPr": elementToOmmlAccpr,
  "m:barPr": elementToOmmlBarpr,
  "m:boxPr": elementToOmmlBoxpr,
  "m:borderBoxPr": elementToOmmlBorderboxpr,
  "m:dPr": elementToOmmlDpr,
  "m:eqArrPr": elementToOmmlEqarrpr,
  "m:fPr": elementToOmmlFpr,
  "m:funcPr": elementToOmmlFuncpr,
  "m:groupChrPr": elementToOmmlGroupchrpr,
  "m:limLowPr": elementToOmmlLimlowpr,
  "m:limUppPr": elementToOmmlLimupppr,
  "m:mPr": elementToOmmlMpr,
  "m:mr": elementToOmmlMr,
  "m:mcs": elementToOmmlMcs,
  "m:mc": elementToOmmlMc,
  "m:mcPr": elementToOmmlMcpr,
  "m:naryPr": elementToOmmlNarypr,
  "m:phantPr": elementToOmmlPhantpr,
  "m:radPr": elementToOmmlRadpr,
  "m:sPrePr": elementToOmmlSprepr,
  "m:sSubPr": elementToOmmlSsubpr,
  "m:sSubSupPr": elementToOmmlSsubsuppr,
  "m:sSupPr": elementToOmmlSsuppr,
};
export function elementToOmmlOmath({ childNodes }: Element): OmmlOmath {
  return {
    tagName: "m:oMath",
    children: filterOmmlElements(childNodes).map(domToOmml).filter((
      el,
    ): el is OmmlOmathElement => el != null), // TODO: filter OmmlOmathElement only
  };
}
export function elementToOmmlMathArgpr({ childNodes }: Element): OmmlMathArgpr {
  const children = filterOmmlElements(childNodes);
  const argsz = (() => {
    const result = children[0]?.getAttribute("m:val");
    if (!Number.isInteger(result) || result == null) return undefined;
    const num = Number.parseInt(result);
    switch (num) {
      case -2:
      case -1:
      case 0:
      case 1:
      case 2:
        return num;
      default:
        return undefined;
    }
  })();
  return {
    tagName: "m:argPr",
    argsz,
  };
}
export function elementToOmmlAcc({ childNodes }: Element): OmmlAcc {
  const children = filterOmmlElements(childNodes);
  const isAccpr = children[0]?.tagName === "m:accPr";
  const e = children[isAccpr ? 1 : 0];
  if (!e) throw new Error("Expected e tag");
  return {
    tagName: "m:acc",
    accpr: isAccpr ? elementToOmmlAccpr(children[0]) : undefined,
    e: elementToOmmlMathArg(e),
  };
}
export function elementToOmmlBar({ childNodes }: Element): OmmlBar {
  const children = filterOmmlElements(childNodes);
  const isBarpr = children[0]?.tagName === "m:barPr";
  const e = children[isBarpr ? 1 : 0];
  if (!e) throw new Error("Expected e tag");
  return {
    tagName: "m:bar",
    barpr: isBarpr ? elementToOmmlBarpr(children[0]) : undefined,
    e: elementToOmmlMathArg(e),
  };
}
export function elementToOmmlBox({ childNodes }: Element): OmmlBox {
  const children = filterOmmlElements(childNodes);
  const isBoxpr = children[0]?.tagName === "m:boxPr";
  const e = children[isBoxpr ? 1 : 0];
  if (!e) throw new Error("Expected e tag");
  return {
    tagName: "m:box",
    boxpr: isBoxpr ? elementToOmmlBoxpr(children[0]) : undefined,
    e: elementToOmmlMathArg(e),
  };
}
export function elementToOmmlBorderbox({ childNodes }: Element): OmmlBorderbox {
  const children = filterOmmlElements(childNodes);
  const isBorderboxpr = children[0]?.tagName === "m:borderBoxPr";
  const e = children[isBorderboxpr ? 1 : 0];
  if (!e) throw new Error("Expected e tag");
  return {
    tagName: "m:borderBox",
    borderboxpr: isBorderboxpr
      ? elementToOmmlBorderboxpr(children[0])
      : undefined,
    e: elementToOmmlMathArg(e),
  };
}
export function elementToOmmlD({ childNodes }: Element): OmmlD {
  const children = filterOmmlElements(childNodes);
  const isDpr = children[0]?.tagName === "m:dPr";
  const e = isDpr ? Array.from(children).slice(1) : Array.from(children);
  if (e.length < 1) throw new Error("Expected e tag");
  return {
    tagName: "m:d",
    dpr: isDpr ? elementToOmmlDpr(children[0]) : undefined,
    e: e.map(elementToOmmlMathArg),
  };
}
export function elementToOmmlEqarr({ childNodes }: Element): OmmlEqarr {
  const children = filterOmmlElements(childNodes);
  const isEqarrpr = children[0]?.tagName === "m:eqArrPr";
  const e = isEqarrpr ? Array.from(children).slice(1) : Array.from(children);
  if (e.length < 1) throw new Error("Expected e tag");
  return {
    tagName: "m:eqArr",
    eqarrpr: isEqarrpr ? elementToOmmlEqarrpr(children[0]) : undefined,
    e: e.map(elementToOmmlMathArg),
  };
}
export function elementToOmmlF({ childNodes }: Element): OmmlF {
  const children = filterOmmlElements(childNodes);
  const isFpr = children[0]?.tagName === "m:fPr";
  const num = children[isFpr ? 1 : 0];
  const den = children[isFpr ? 2 : 1];
  if (!num || !den) throw new Error("Expected num and den tag");
  return {
    tagName: "m:f",
    fpr: isFpr ? elementToOmmlFpr(children[0]) : undefined,
    num: elementToOmmlMathArg(num),
    den: elementToOmmlMathArg(den),
  };
}
export function elementToOmmlFunc({ childNodes }: Element): OmmlFunc {
  const children = filterOmmlElements(childNodes);
  const isFuncpr = children[0]?.tagName === "m:funcPr";
  const fname = children[isFuncpr ? 1 : 0];
  const e = children[isFuncpr ? 2 : 1];
  if (!e) throw new Error("Expected e tag");
  return {
    tagName: "m:func",
    funcpr: isFuncpr ? elementToOmmlFuncpr(children[0]) : undefined,
    fname: elementToOmmlMathArg(fname),
    e: elementToOmmlMathArg(e),
  };
}
export function elementToOmmlGroupchr({ childNodes }: Element): OmmlGroupchr {
  const children = filterOmmlElements(childNodes);
  const isGroupchrpr = children[0]?.tagName === "m:groupChrPr";
  const e = children[isGroupchrpr ? 1 : 0];
  if (!e) throw new Error("Expected e tag");
  return {
    tagName: "m:groupChr",
    groupchrpr: isGroupchrpr ? elementToOmmlGroupchrpr(children[0]) : undefined,
    e: elementToOmmlMathArg(e),
  };
}
export function elementToOmmlLimlow({ childNodes }: Element): OmmlLimlow {
  const children = filterOmmlElements(childNodes);
  const isLimlowpr = children[0]?.tagName === "m:limLowPr";
  const e = children[isLimlowpr ? 1 : 0];
  const lim = children[isLimlowpr ? 2 : 1];
  if (!e || !lim) throw new Error("Expected e and lim tag");
  return {
    tagName: "m:limLow",
    limlowpr: isLimlowpr ? elementToOmmlLimlowpr(children[0]) : undefined,
    e: elementToOmmlMathArg(e),
    lim: elementToOmmlMathArg(e),
  };
}
export function elementToOmmlLimupp({ childNodes }: Element): OmmlLimupp {
  const children = filterOmmlElements(childNodes);
  const isLimupppr = children[0]?.tagName === "m:limUppPr";
  const e = children[isLimupppr ? 1 : 0];
  const lim = children[isLimupppr ? 2 : 1];
  if (!e || !lim) throw new Error("Expected e and lim tag");
  return {
    tagName: "m:limUpp",
    limupppr: isLimupppr ? elementToOmmlLimupppr(children[0]) : undefined,
    e: elementToOmmlMathArg(e),
    lim: elementToOmmlMathArg(e),
  };
}
export function elementToOmmlM({ childNodes }: Element): OmmlM {
  const children = filterOmmlElements(childNodes);
  const isMpr = children[0]?.tagName === "m:mPr";
  const mr = isMpr ? Array.from(children).slice(1) : Array.from(children);
  if (mr.length < 1) throw new Error("Expected mr tag");
  return {
    tagName: "m:m",
    mpr: isMpr ? elementToOmmlMpr(children[0]) : undefined,
    mr: mr.map(elementToOmmlMr),
  };
}
export function elementToOmmlNary({ childNodes }: Element): OmmlNary {
  const children = filterOmmlElements(childNodes);
  const isNarypr = children[0]?.tagName === "m:naryPr";
  const sub = children[isNarypr ? 1 : 0];
  const sup = children[isNarypr ? 2 : 1];
  const e = children[isNarypr ? 3 : 2];
  if (!e || !sub || !sup) throw new Error("Expected e and sup and sub tag");
  return {
    tagName: "m:nary",
    narypr: isNarypr ? elementToOmmlNarypr(children[0]) : undefined,
    sub: elementToOmmlMathArg(sub),
    sup: elementToOmmlMathArg(sup),
    e: elementToOmmlMathArg(e),
  };
}
export function elementToOmmlPhant({ childNodes }: Element): OmmlPhant {
  const children = filterOmmlElements(childNodes);
  const isPhantpr = children[0]?.tagName === "m:phantPr";
  const e = children[isPhantpr ? 1 : 0];
  if (!e) throw new Error("Expected e tag");
  return {
    tagName: "m:phant",
    phantpr: isPhantpr ? elementToOmmlPhantpr(children[0]) : undefined,
    e: elementToOmmlMathArg(e),
  };
}
export function elementToOmmlRad({ childNodes }: Element): OmmlRad {
  const children = filterOmmlElements(childNodes);
  const isRadpr = children[0]?.tagName === "m:radPr";
  const deg = children[isRadpr ? 1 : 0];
  const e = children[isRadpr ? 2 : 1];
  if (!deg || !e) throw new Error("Expected deg and e tag");
  return {
    tagName: "m:rad",
    radpr: isRadpr ? elementToOmmlRadpr(children[0]) : undefined,
    deg: elementToOmmlMathArg(deg),
    e: elementToOmmlMathArg(e),
  };
}
export function elementToOmmlSpre({ childNodes }: Element): OmmlSpre {
  const children = filterOmmlElements(childNodes);
  const isSprepr = children[0]?.tagName === "m:sPrePr";
  const sub = children[isSprepr ? 1 : 0];
  const sup = children[isSprepr ? 2 : 1];
  const e = children[isSprepr ? 3 : 2];
  if (!sub || !sup || !e) throw new Error("Expected sub and sup and e tag");
  return {
    tagName: "m:sPre",
    sprepr: isSprepr ? elementToOmmlSprepr(children[0]) : undefined,
    sub: elementToOmmlMathArg(sub),
    sup: elementToOmmlMathArg(sup),
    e: elementToOmmlMathArg(e),
  };
}
export function elementToOmmlSsub({ childNodes }: Element): OmmlSsub {
  const children = filterOmmlElements(childNodes);
  const isSsubpr = children[0]?.tagName === "m:sSubPr";
  const e = children[isSsubpr ? 1 : 0];
  const sub = children[isSsubpr ? 2 : 1];
  if (!e || !sub) throw new Error("Expected e and sub tag");
  return {
    tagName: "m:sSub",
    ssubpr: isSsubpr ? elementToOmmlSsubpr(children[0]) : undefined,
    e: elementToOmmlMathArg(e),
    sub: elementToOmmlMathArg(sub),
  };
}
export function elementToOmmlSsubsup({ childNodes }: Element): OmmlSsubsup {
  const children = filterOmmlElements(childNodes);
  const isSsubsuppr = children[0]?.tagName === "m:sSubSupPr";
  const e = children[isSsubsuppr ? 1 : 0];
  const sub = children[isSsubsuppr ? 2 : 1];
  const sup = children[isSsubsuppr ? 3 : 2];
  if (!e || !sub || !sup) throw new Error("Expected e and sup and sub tag");
  return {
    tagName: "m:sSubSup",
    ssubsuppr: isSsubsuppr ? elementToOmmlSsubsuppr(children[0]) : undefined,
    e: elementToOmmlMathArg(e),
    sub: elementToOmmlMathArg(sub),
    sup: elementToOmmlMathArg(sup),
  };
}
export function elementToOmmlSsup({ childNodes }: Element): OmmlSsup {
  const children = filterOmmlElements(childNodes);
  const isSsuppr = children[0]?.tagName === "m:sSupPr";
  const e = children[isSsuppr ? 1 : 0];
  const sup = children[isSsuppr ? 2 : 1];
  if (!e || !sup) throw new Error("Expected e and sup tag");
  return {
    tagName: "m:sSup",
    ssuppr: isSsuppr ? elementToOmmlSsuppr(children[0]) : undefined,
    e: elementToOmmlMathArg(e),
    sup: elementToOmmlMathArg(sup),
  };
}
export function elementToOmmlR({ childNodes }: Element): OmmlR {
  const children = filterOmmlElements(childNodes);
  const isRpr = children[0]?.tagName === "m:rPr";
  const texts = Array.from(children).slice(isRpr ? 1 : 0).filter((el) =>
    el.tagName === "m:t"
  );
  return {
    tagName: "m:r",
    rpr: isRpr ? elementToOmmlRpr(children[0]) : undefined,
    children: texts.map(elementToOmmlT),
  };
}
export function elementToOmmlRpr({ childNodes }: Element): OmmlRpr {
  const children = filterOmmlElements(childNodes);
  const lit = getBooleanAttribute(
    children.find((el) => el.tagName === "m:lit"),
  );
  const nor = getBooleanAttribute(
    children.find((el) => el.tagName === "m:nor"),
  );
  const scr = getStringAttribute(children.find((el) => el.tagName === "m:scr"));
  const sty = getStringAttribute(children.find((el) => el.tagName === "m:sty"));
  const brk = getIntAttribute(children.find((el) => el.tagName === "m:brk"));
  const aln = getBooleanAttribute(
    children.find((el) => el.tagName === "m:aln"),
  );
  return {
    tagName: "m:rPr",
    lit,
    nor,
    scr: (() => {
      switch (scr) {
        case "roman":
        case "script":
        case "fraktur":
        case "double-struck":
        case "sans-serif":
        case "monospace":
          return scr;
      }
    })(),
    sty: (() => {
      switch (sty) {
        case "p":
        case "b":
        case "i":
        case "bi":
          return sty;
      }
    })(),
    brk,
    aln,
  };
}
export function elementToOmmlT(el: Element): OmmlT {
  return {
    tagName: "m:t",
    text: el.textContent ?? "",
    xmlSpace: (() => {
      const value = el.getAttribute("m:val");
      switch (value) {
        case "default":
        case "preserve":
          return value;
      }
    })(),
  };
}
export function elementToOmmlAccpr({ childNodes }: Element): OmmlAccpr {
  const children = filterOmmlElements(childNodes);
  const chr = children.find((el) => el.tagName === "m:chr");
  return {
    tagName: "m:accPr",
    chr: getCharAttribute(chr),
    // TODO: ctrlpr
  };
}
export function elementToOmmlBarpr({ childNodes }: Element): OmmlBarpr {
  const children = filterOmmlElements(childNodes);
  const pos = children.find((el) => el.tagName === "m:pos");
  return {
    tagName: "m:barPr",
    pos: (() => {
      const value = getStringAttribute(pos, "m:val");
      switch (value) {
        case "top":
        case "bot":
          return value;
      }
    })(),
    // TODO: ctrlpr
  };
}
export function elementToOmmlBoxpr({ childNodes }: Element): OmmlBoxpr {
  const children = filterOmmlElements(childNodes);
  const opemu = getBooleanAttribute(
    children.find((el) => el.tagName === "m:opEmu"),
  );
  const nobreak = getBooleanAttribute(
    children.find((el) => el.tagName === "m:noBreak"),
  );
  const diff = getBooleanAttribute(
    children.find((el) => el.tagName === "m:diff"),
  );
  const brk = getIntAttribute(children.find((el) => el.tagName === "m:brk"));
  const aln = getBooleanAttribute(
    children.find((el) => el.tagName === "m:aln"),
  );
  return {
    tagName: "m:boxPr",
    opemu,
    nobreak,
    diff,
    brk,
    aln,
    // TODO: ctrlpr
  };
}
export function elementToOmmlBorderboxpr(
  { childNodes }: Element,
): OmmlBorderboxpr {
  const children = filterOmmlElements(childNodes);
  const hidetop = getBooleanAttribute(
    children.find((el) => el.tagName === "m:hideTop"),
  );
  const hidebot = getBooleanAttribute(
    children.find((el) => el.tagName === "m:hideBot"),
  );
  const hideleft = getBooleanAttribute(
    children.find((el) => el.tagName === "m:hideLeft"),
  );
  const hideright = getBooleanAttribute(
    children.find((el) => el.tagName === "m:hideRight"),
  );
  const strikeh = getBooleanAttribute(
    children.find((el) => el.tagName === "m:strikeH"),
  );
  const strikev = getBooleanAttribute(
    children.find((el) => el.tagName === "m:strikeV"),
  );
  const strikebltr = getBooleanAttribute(
    children.find((el) => el.tagName === "m:strikeBLTR"),
  );
  const striketlbr = getBooleanAttribute(
    children.find((el) => el.tagName === "m:strikeTLBR"),
  );
  return {
    tagName: "m:borderBoxPr",
    hidetop,
    hidebot,
    hideleft,
    hideright,
    strikeh,
    strikev,
    strikebltr,
    striketlbr,
    // TODO: ctrlpr
  };
}
export function elementToOmmlDpr({ childNodes }: Element): OmmlDpr {
  const children = filterOmmlElements(childNodes);
  const begchr = getCharAttribute(
    children.find((el) => el.tagName === "m:begChr"),
  );
  const sepchr = getCharAttribute(
    children.find((el) => el.tagName === "m:sepChr"),
  );
  const endchr = getCharAttribute(
    children.find((el) => el.tagName === "m:endChr"),
  );
  const grow = getBooleanAttribute(
    children.find((el) => el.tagName === "m:grow"),
  );
  const shp = getStringAttribute(children.find((el) => el.tagName === "m:shp"));
  return {
    tagName: "m:dPr",
    begchr,
    sepchr,
    endchr,
    grow,
    shp: (() => {
      switch (shp) {
        case "centered":
        case "match":
          return shp;
      }
    })(),
    // TODO: ctrlpr
  };
}
export function elementToOmmlEqarrpr({ childNodes }: Element): OmmlEqarrpr {
  const children = filterOmmlElements(childNodes);
  const basejc = getStringAttribute(
    children.find((el) => el.tagName === "m:baseJc"),
  );
  const maxdist = getBooleanAttribute(
    children.find((el) => el.tagName === "m:maxDist"),
  );
  const objdist = getBooleanAttribute(
    children.find((el) => el.tagName === "m:objDist"),
  );
  const rsprule = getIntAttribute(
    children.find((el) => el.tagName === "m:rSpRule"),
  );
  const rsp = getIntAttribute(children.find((el) => el.tagName === "m:rSp"));
  return {
    tagName: "m:eqArrPr",
    basejc: (() => {
      switch (basejc) {
        case "inline":
        case "top":
        case "center":
        case "bottom":
        case "inside":
        case "outside":
          return basejc;
      }
    })(),
    maxdist,
    objdist,
    rsprule: (() => {
      switch (rsprule) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
          return rsprule;
      }
    })(),
    rsp,
    // TODO: ctrlpr
  };
}
export function elementToOmmlFpr({ childNodes }: Element): OmmlFpr {
  const children = filterOmmlElements(childNodes);
  const type = getStringAttribute(
    children.find((el) => el.tagName === "m:type"),
  );
  return {
    tagName: "m:fPr",
    type: (() => {
      switch (type) {
        case "bar":
        case "skw":
        case "lin":
        case "noBar":
          return type;
      }
    })(),
    // TODO: ctrlpr
  };
}
export function elementToOmmlFuncpr({ childNodes }: Element): OmmlFuncpr {
  return {
    tagName: "m:funcPr",
    // TODO: ctrlpr
  };
}
export function elementToOmmlGroupchrpr(
  { childNodes }: Element,
): OmmlGroupchrpr {
  const children = filterOmmlElements(childNodes);
  const chr = getCharAttribute(
    children.find((el) => el.tagName === "m:chr"),
  );
  const pos = getStringAttribute(children.find((el) => el.tagName === "m:pos"));
  const vertjc = getStringAttribute(
    children.find((el) => el.tagName === "m:vertJc"),
  );
  return {
    tagName: "m:groupChrPr",
    chr,
    pos: validateTopBot(pos),
    vertjc: validateTopBot(vertjc),
    // TODO: ctrlpr
  };
}
export function elementToOmmlLimlowpr({ childNodes }: Element): OmmlLimlowpr {
  return {
    tagName: "m:limLowPr",
    // TODO: ctrlpr
  };
}
export function elementToOmmlLimupppr({ childNodes }: Element): OmmlLimupppr {
  return {
    tagName: "m:limUppPr",
    // TODO: ctrlpr
  };
}
export function elementToOmmlMpr({ childNodes }: Element): OmmlMpr {
  const { find } = getFindByTagName(filterOmmlElements(childNodes));
  const basejc = getStringAttribute(find("m:baseJc"));
  const plchide = getBooleanAttribute(find("m:plcHide"));
  const rsprule = getIntAttribute(find("m:rSpRule"));
  const cgprule = getIntAttribute(find("m:cgpRule"));
  const rsp = getIntAttribute(find("m:rSp"));
  const csp = getIntAttribute(find("m:cSp"));
  const cgp = getIntAttribute(find("m:cgp"));
  const mcs = find("m:mcs");
  return {
    tagName: "m:mPr",
    basejc: validateYAlign(basejc),
    plchide,
    rsprule: validateSpacingRule(rsprule),
    cgprule: validateSpacingRule(cgprule),
    rsp,
    csp,
    cgp,
    mcs: mcs ? elementToOmmlMcs(mcs) : undefined,
    // TODO: ctrlpr
  };
}
export function elementToOmmlMr({ childNodes }: Element): OmmlMr {
  const { findAll } = getFindByTagName(filterOmmlElements(childNodes));
  const e = findAll("m:e");
  return {
    tagName: "m:mr",
    e: e.map(elementToOmmlMathArg),
  };
}
export function elementToOmmlMcs({ childNodes }: Element): OmmlMcs {
  const { findAll } = getFindByTagName(filterOmmlElements(childNodes));
  const mc = findAll("m:mc");
  return {
    tagName: "m:mcs",
    mc: mc.map(elementToOmmlMc),
  };
}
export function elementToOmmlMc({ childNodes }: Element): OmmlMc {
  const { find } = getFindByTagName(filterOmmlElements(childNodes));
  const mcpr = find("m:mcPr");
  return {
    tagName: "m:mc",
    mcpr: mcpr ? elementToOmmlMcpr(mcpr) : undefined,
  };
}
export function elementToOmmlMcpr({ childNodes }: Element): OmmlMcpr {
  const { find } = getFindByTagName(filterOmmlElements(childNodes));
  const count = getIntAttribute(find("m:count"));
  const mcjc = getStringAttribute(find("m:mcJc"));
  return {
    tagName: "m:mcPr",
    count,
    mcjc: validateXAlign(mcjc),
  };
}
export function elementToOmmlNarypr({ childNodes }: Element): OmmlNarypr {
  const { find } = getFindByTagName(filterOmmlElements(childNodes));
  const chr = getCharAttribute(find("m:chr"));
  const limloc = getStringAttribute(find("m:limLoc"));
  const grow = getBooleanAttribute(find("m:grow"));
  const subhide = getBooleanAttribute(find("m:subHide"));
  const suphide = getBooleanAttribute(find("m:supHide"));
  return {
    tagName: "m:naryPr",
    chr,
    limloc: validateLimLoc(limloc),
    grow,
    subhide,
    suphide,
    // TODO: ctrlpr
  };
}
export function elementToOmmlPhantpr({ childNodes }: Element): OmmlPhantpr {
  const { find } = getFindByTagName(filterOmmlElements(childNodes));
  const show = getBooleanAttribute(find("m:show"));
  const zerowid = getBooleanAttribute(find("m:zeroWid"));
  const zeroasc = getBooleanAttribute(find("m:zeroAsc"));
  const zerodesc = getBooleanAttribute(find("m:zeroDesc"));
  const transp = getBooleanAttribute(find("m:transp"));
  return {
    tagName: "m:phantPr",
    show,
    zerowid,
    zeroasc,
    zerodesc,
    transp,
    // TODO: ctrlpr
  };
}
export function elementToOmmlRadpr({ childNodes }: Element): OmmlRadpr {
  const { find } = getFindByTagName(filterOmmlElements(childNodes));
  const deghide = getBooleanAttribute(find("m:degHide"));
  return {
    tagName: "m:radPr",
    deghide,
    // TODO: ctrlpr
  };
}
export function elementToOmmlSprepr({ childNodes }: Element): OmmlSprepr {
  return {
    tagName: "m:sPrePr",
    // TODO: ctrlpr
  };
}
export function elementToOmmlSsubpr({ childNodes }: Element): OmmlSsubpr {
  return {
    tagName: "m:sSubPr",
    // TODO: ctrlpr
  };
}
export function elementToOmmlSsubsuppr({ childNodes }: Element): OmmlSsubsuppr {
  const { find } = getFindByTagName(filterOmmlElements(childNodes));
  const alnscr = getBooleanAttribute(find("m:alnScr"));
  return {
    tagName: "m:sSubSupPr",
    alnscr,
    // TODO: ctrlpr
  };
}
export function elementToOmmlSsuppr({ childNodes }: Element): OmmlSsuppr {
  return {
    tagName: "m:sSupPr",
    // TODO: ctrlpr
  };
}

function elementToOmmlMathArg({ childNodes }: Element): OmmlMathArg {
  const children = filterOmmlElements(childNodes);
  const { find } = getFindByTagName(children);
  const argpr = find("m:argPr");
  const elements = children.filter((el) =>
    el.tagName !== "m:argPr" && el.tagName !== "m:ctrlPr"
  );
  return {
    argpr: argpr ? elementToOmmlMathArgpr(argpr) : undefined,
    children: elements.map(domToOmml) as OmmlOmathElement[], // TODO: strictly check or filter
  };
}

function filterChildElements(childNodes: NodeListOf<ChildNode>) {
  return Array.from(childNodes).filter((el): el is Element =>
    el.nodeType === 1
  ); // Node.ELEMENT_NODE
}

function filterOmmlElements(childNodes: NodeListOf<ChildNode>) {
  return filterChildElements(childNodes).filter((el) => el.prefix === "m");
}

function getBooleanAttribute(element: Element, attrName?: string): boolean;
function getBooleanAttribute(
  element: Element | undefined,
  attrName?: string,
): boolean | undefined;
function getBooleanAttribute(
  element: Element | undefined,
  attrName: string = "m:val",
): boolean | undefined {
  if (element == null) return undefined;
  return element.getAttribute(attrName) === "1" ? true : false;
}

function getStringAttribute(
  element: Element | undefined,
  attrName: string = "m:val",
): string | undefined {
  if (element == null) return undefined;
  return element.getAttribute(attrName) ?? undefined;
}

function getCharAttribute(
  element: Element | undefined,
  attrName: string = "m:val",
): string | undefined {
  const value = getStringAttribute(element, attrName);
  return value ? he.decode(value) : undefined;
}

function getIntAttribute(
  element: Element | undefined,
  attrName: string = "m:alnAt",
): number | undefined {
  const value = getStringAttribute(element, attrName);
  return Number.isInteger(value) && value != null
    ? Number.parseInt(value)
    : undefined;
}

function findByTagName(children: Element[], tagName: string) {
  return children.find((el) => el.tagName === tagName);
}

function findAllByTagName(children: Element[], tagName: string) {
  return children.filter((el) => el.tagName === tagName);
}

function getFindByTagName(children: Element[]) {
  return {
    find: (tagName: string) => findByTagName(children, tagName),
    findAll: (tagName: string) => findAllByTagName(children, tagName),
  };
}

function validateTopBot(topBot: string | undefined) {
  switch (topBot) {
    case "top":
    case "bot":
      return topBot;
  }
}

function validateSpacingRule(spacingRule: number | undefined) {
  switch (spacingRule) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return spacingRule;
  }
}

function validateXAlign(xAlign: string | undefined) {
  switch (xAlign) {
    case "left":
    case "center":
    case "right":
    case "inside":
    case "outside":
      return xAlign;
  }
}

function validateYAlign(yAlign: string | undefined) {
  switch (yAlign) {
    case "inline":
    case "top":
    case "center":
    case "bottom":
    case "inside":
    case "outside":
      return yAlign;
  }
}

function validateLimLoc(limLoc: string | undefined) {
  switch (limLoc) {
    case "undOvr":
    case "subSup":
      return limLoc;
  }
}
