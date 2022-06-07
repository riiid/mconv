import he from "https://esm.sh/v85/he@1.2.0/he.js";
import { tag } from "../misc/xml.ts";
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

export default function ommlToString(node?: OmmlElement): string {
  if (!node) return "";
  return toStringTable[node.tagName](node as any);
}

const toStringTable: {
  [tagName in OmmlElement["tagName"]]: (
    node: Extract<OmmlElement, { tagName: tagName }>,
  ) => string;
} = {
  "m:oMath": ommlOmathToString,
  "m:argPr": ommlMathArgprToString,
  "m:acc": ommlAccToString,
  "m:bar": ommlBarToString,
  "m:box": ommlBoxToString,
  "m:borderBox": ommlBorderboxToString,
  "m:d": ommlDToString,
  "m:eqArr": ommlEqarrToString,
  "m:f": ommlFToString,
  "m:func": ommlFuncToString,
  "m:groupChr": ommlGroupchrToString,
  "m:limLow": ommlLimlowToString,
  "m:limUpp": ommlLimuppToString,
  "m:m": ommlMToString,
  "m:nary": ommlNaryToString,
  "m:phant": ommlPhantToString,
  "m:rad": ommlRadToString,
  "m:sPre": ommlSpreToString,
  "m:sSub": ommlSsubToString,
  "m:sSubSup": ommlSsubsupToString,
  "m:sSup": ommlSsupToString,
  "m:r": ommlRToString,
  "m:rPr": ommlRprToString,
  "m:t": ommlTToString,
  "m:accPr": ommlAccprToString,
  "m:barPr": ommlBarprToString,
  "m:boxPr": ommlBoxprToString,
  "m:borderBoxPr": ommlBorderboxprToString,
  "m:dPr": ommlDprToString,
  "m:eqArrPr": ommlEqarrprToString,
  "m:fPr": ommlFprToString,
  "m:funcPr": ommlFuncprToString,
  "m:groupChrPr": ommlGroupchrprToString,
  "m:limLowPr": ommlLimlowprToString,
  "m:limUppPr": ommlLimuppprToString,
  "m:mPr": ommlMprToString,
  "m:mr": ommlMrToString,
  "m:mcs": ommlMcsToString,
  "m:mc": ommlMcToString,
  "m:mcPr": ommlMcprToString,
  "m:naryPr": ommlNaryprToString,
  "m:phantPr": ommlPhantprToString,
  "m:radPr": ommlRadprToString,
  "m:sPrePr": ommlSpreprToString,
  "m:sSubPr": ommlSsubprToString,
  "m:sSubSupPr": ommlSsubsupprToString,
  "m:sSupPr": ommlSsupprToString,
};
export function ommlAccToString({ tagName, accpr, e }: OmmlAcc): string {
  return tag(
    tagName,
    {},
    () =>
      [ommlToString(accpr), tag("m:e", {}, () => ommlMathArgToString(e))].join(
        "",
      ),
  );
}
export function ommlAccprToString({ tagName, chr, ctrlpr }: OmmlAccpr): string {
  return tag(tagName, {}, () => tag("m:chr", { "m:val": chr }));
}
export function ommlBarToString({ tagName, barpr, e }: OmmlBar): string {
  return tag(
    tagName,
    {},
    () =>
      [ommlToString(barpr), tag("m:e", {}, () => ommlMathArgToString(e))].join(
        "",
      ),
  );
}
export function ommlBarprToString({ tagName, pos, ctrlpr }: OmmlBarpr): string {
  return tag(
    tagName,
    {},
    pos && (() => tag("m:pos", { "m:val": pos })),
  );
}
export function ommlBorderboxToString(
  { tagName, borderboxpr, e }: OmmlBorderbox,
): string {
  return tag(
    tagName,
    {},
    () =>
      [ommlToString(borderboxpr), tag("m:e", {}, () => ommlMathArgToString(e))]
        .join(""),
  );
}
export function ommlBorderboxprToString(
  {
    tagName,
    hidetop,
    hidebot,
    hideleft,
    hideright,
    strikeh,
    strikev,
    strikebltr,
    striketlbr,
    ctrlpr,
  }: OmmlBorderboxpr,
): string {
  return tag(tagName, {}, () =>
    [
      hidetop != null && tag("m:hideTop", { "m:val": 1 }),
      hidebot != null && tag("m:hideBot", { "m:val": 1 }),
      hideleft != null && tag("m:hideLeft", { "m:val": 1 }),
      hideright != null && tag("m:hideRight", { "m:val": 1 }),
      strikeh != null && tag("m:strikeH", { "m:val": 1 }),
      strikev != null && tag("m:strikeV", { "m:val": 1 }),
      strikebltr != null && tag("m:strikeBLTR", { "m:val": 1 }),
      striketlbr != null && tag("m:strikeTLBR", { "m:val": 1 }),
    ].filter(Boolean).join());
}
export function ommlBoxToString({ tagName, boxpr, e }: OmmlBox): string {
  return tag(
    tagName,
    {},
    () =>
      [ommlToString(boxpr), tag("m:e", {}, () => ommlMathArgToString(e))].join(
        "",
      ),
  );
}
export function ommlBoxprToString(
  { tagName, opemu, nobreak, diff, brk, aln, ctrlpr }: OmmlBoxpr,
): string {
  return tag(tagName, {}, () =>
    [
      opemu != null && tag("m:opEmu", { "m:val": 1 }),
      nobreak != null && tag("m:noBreak", { "m:val": 1 }),
      diff != null && tag("m:diff", { "m:val": 1 }),
      brk != null && tag("m:brk", { "m:alnAt": brk }),
      aln != null && tag("m:aln", { "m:val": 1 }),
    ].filter(Boolean).join());
}
export function ommlDToString({ tagName, dpr, e }: OmmlD): string {
  return tag(
    tagName,
    {},
    () =>
      [
        ommlToString(dpr),
        e.map((e) => tag("m:e", {}, () => ommlMathArgToString(e))).join(""),
      ].join(""),
  );
}
export function ommlDprToString(
  { tagName, begchr, sepchr, endchr, grow, shp, ctrlpr }: OmmlDpr,
): string {
  return tag(tagName, {}, () =>
    [
      begchr != null && tag("m:begChr", { "m:val": begchr }),
      sepchr != null && tag("m:sepChr", { "m:val": sepchr }),
      endchr != null && tag("m:endChr", { "m:val": endchr }),
      grow != null && tag("m:grow", { "m:val": 1 }),
      shp != null && tag("m:shp", { "m:val": shp }),
    ].filter(Boolean).join(""));
}
export function ommlEqarrToString({ tagName, eqarrpr, e }: OmmlEqarr): string {
  return tag(
    tagName,
    {},
    () =>
      [
        ommlToString(eqarrpr),
        e.map((e) => tag("m:e", {}, () => ommlMathArgToString(e))).join(""),
      ].join(""),
  );
}
export function ommlEqarrprToString(
  { tagName, basejc, maxdist, objdist, rsprule, rsp, ctrlpr }: OmmlEqarrpr,
): string {
  return tag(tagName, {}, () =>
    [
      basejc != null && tag("m:baseJc", { "m:val": basejc }),
      maxdist != null && tag("m:maxDist", { "m:val": 1 }),
      objdist != null && tag("m:objDist", { "m:val": 1 }),
      rsprule != null && tag("m:rSpRule", { "m:val": rsprule }),
      rsp != null && tag("m:rSp", { "m:val": rsp }),
    ].join(""));
}
export function ommlFToString({ tagName, fpr, num, den }: OmmlF): string {
  return tag(tagName, {}, () =>
    [
      ommlToString(fpr),
      tag("m:num", {}, () => ommlMathArgToString(num)),
      tag("m:den", {}, () => ommlMathArgToString(den)),
    ].join(""));
}
export function ommlFprToString({ tagName, ctrlpr }: OmmlFpr): string {
  return tag(tagName, {});
}
export function ommlFuncToString(
  { tagName, funcpr, fname, e }: OmmlFunc,
): string {
  return tag(
    tagName,
    {},
    () =>
      [
        ommlToString(funcpr),
        tag("m:fname", {}, () => ommlMathArgToString(fname)),
        tag("m:e", {}, () => ommlMathArgToString(e)),
      ]
        .join(""),
  );
}
export function ommlFuncprToString({ tagName, ctrlpr }: OmmlFuncpr): string {
  return tag(tagName, {});
}
export function ommlGroupchrToString(
  { tagName, groupchrpr, e }: OmmlGroupchr,
): string {
  return tag(tagName, {}, () =>
    [
      ommlToString(groupchrpr),
      tag("m:e", {}, () => ommlMathArgToString(e)),
    ].join(""));
}
export function ommlGroupchrprToString(
  { tagName, chr, pos, vertjc, ctrlpr }: OmmlGroupchrpr,
): string {
  return tag(tagName, {}, () =>
    [
      chr != null && tag("m:chr", { "m:val": chr }),
      pos != null && tag("m:pos", { "m:val": pos }),
      vertjc != null && tag("m:vertJc", { "m:val": vertjc }),
    ].join(""));
}
export function ommlLimlowToString(
  { tagName, limlowpr, e, lim }: OmmlLimlow,
): string {
  return tag(
    tagName,
    {},
    () =>
      [
        ommlToString(limlowpr),
        tag("m:e", {}, () => ommlMathArgToString(e)),
        tag("m:lim", {}, () => ommlMathArgToString(lim)),
      ]
        .join(""),
  );
}
export function ommlLimlowprToString(
  { tagName, ctrlpr }: OmmlLimlowpr,
): string {
  return tag(tagName, {});
}
export function ommlLimuppToString(
  { tagName, limupppr, e, lim }: OmmlLimupp,
): string {
  return tag(
    tagName,
    {},
    () =>
      [
        ommlToString(limupppr),
        tag("m:e", {}, () => ommlMathArgToString(e)),
        tag("m:lim", {}, () => ommlMathArgToString(lim)),
      ]
        .join(""),
  );
}
export function ommlLimuppprToString(
  { tagName, ctrlpr }: OmmlLimupppr,
): string {
  return tag(tagName, {});
}
export function ommlMathArgprToString(
  { tagName, argsz }: OmmlMathArgpr,
): string {
  return tag(
    tagName,
    {},
    () =>
      [argsz != null && tag("m:argsz", { "m:val": argsz })].filter(Boolean)
        .join(""),
  );
}
export function ommlMToString({ tagName, mpr, mr }: OmmlM): string {
  return tag(tagName, {}, () => [mpr, ...mr].map(ommlToString).join(""));
}
export function ommlMcToString({ tagName, mcpr }: OmmlMc): string {
  return tag(tagName, {}, () => ommlToString(mcpr));
}
export function ommlMcprToString({ tagName, count, mcjc }: OmmlMcpr): string {
  return tag(
    tagName,
    {},
    () =>
      [
        count != null && tag("m:count", { "m:val": count }),
        mcjc != null && tag("m:mcJc", { "m:val": mcjc }),
      ].filter(Boolean).join(""),
  );
}
export function ommlMcsToString({ tagName, mc }: OmmlMcs): string {
  return tag(tagName, {}, () => mc.map(ommlToString).join(""));
}
export function ommlMprToString(
  { tagName, basejc, plchide, rsprule, cgprule, rsp, csp, cgp, mcs, ctrlpr }:
    OmmlMpr,
): string {
  return tag(tagName, {}, () =>
    [
      basejc != null && tag("m:baseJc", { "m:val": basejc }),
      plchide != null && tag("m:plcHide", { "m:val": 1 }),
      rsprule != null && tag("m:rSpRule", { "m:val": rsprule }),
      cgprule != null && tag("m:cGpRule", { "m:val": cgprule }),
      rsp != null && tag("m:rSp", { "m:val": rsp }),
      csp != null && tag("m:cSp", { "m:val": csp }),
      cgp != null && tag("m:cGp", { "m:val": cgp }),
      ommlToString(mcs),
    ].filter(Boolean).join(""));
}
export function ommlMrToString({ tagName, e }: OmmlMr): string {
  return tag(
    tagName,
    {},
    () => e.map((e) => tag("m:e", {}, () => ommlMathArgToString(e))).join(""),
  );
}
export function ommlNaryToString(
  { tagName, narypr, sub, sup, e }: OmmlNary,
): string {
  return tag(
    tagName,
    {},
    () =>
      [
        ommlToString(narypr),
        tag("m:sub", {}, () => ommlMathArgToString(sub)),
        tag("m:sup", {}, () => ommlMathArgToString(sup)),
        tag("m:e", {}, () => ommlMathArgToString(e)),
      ].join(""),
  );
}
export function ommlNaryprToString(
  { tagName, chr, limloc, grow, subhide, suphide, ctrlpr }: OmmlNarypr,
): string {
  return tag(
    tagName,
    {},
    () =>
      [
        chr != null && tag("m:chr", { "m:val": chr }),
        limloc != null && tag("m:limLoc", { "m:val": limloc }),
        grow != null && tag("m:grow", { "m:val": 1 }),
        subhide != null && tag("m:subHide", { "m:val": 1 }),
        suphide != null && tag("m:supHide", { "m:val": 1 }),
      ].filter(Boolean).join(""),
  );
}
export function ommlOmathToString({ tagName, children }: OmmlOmath): string {
  return tag(tagName, {}, () => children.map(ommlToString).join(""));
}
export function ommlPhantToString({ tagName, phantpr, e }: OmmlPhant): string {
  return tag(
    tagName,
    {},
    () =>
      [ommlToString(phantpr), tag("m:e", {}, () => ommlMathArgToString(e))]
        .join(""),
  );
}
export function ommlPhantprToString(
  { tagName, show, zerowid, zeroasc, zerodesc, transp, ctrlpr }: OmmlPhantpr,
): string {
  return tag(tagName, {}, () =>
    [
      show != null && tag("m:show", { "m:val": 1 }),
      zerowid != null && tag("m:zeroWid", { "m:val": 1 }),
      zeroasc != null && tag("m:zeroAsc", { "m:val": 1 }),
      zerodesc != null && tag("m:zeroDesc", { "m:val": 1 }),
      transp != null && tag("m:transp", { "m:val": 1 }),
    ].filter(Boolean).join(""));
}
export function ommlRToString({ tagName, rpr, children }: OmmlR): string {
  return tag(tagName, {}, () => [rpr, ...children].map(ommlToString).join(""));
}
export function ommlRadToString({ tagName, radpr, deg, e }: OmmlRad): string {
  return tag(
    tagName,
    {},
    () =>
      [
        ommlToString(radpr),
        tag("m:deg", {}, () => ommlMathArgToString(deg)),
        tag("m:e", {}, () => ommlMathArgToString(e)),
      ]
        .join(""),
  );
}
export function ommlRadprToString(
  { tagName, deghide, ctrlpr }: OmmlRadpr,
): string {
  return tag(tagName, {}, () =>
    [
      deghide != null && tag("m:degHide", { "m:val": 1 }),
    ].filter(Boolean).join(""));
}
export function ommlRprToString(
  { tagName, lit, nor, scr, sty, brk, aln }: OmmlRpr,
): string {
  return tag(tagName, {}, () =>
    [
      lit != null && tag("m:lit", { "m:val": 1 }),
      nor != null && tag("m:nor", { "m:val": 1 }),
      scr != null && tag("m:scr", { "m:val": 1 }),
      sty != null && tag("m:sty", { "m:val": 1 }),
      brk != null && tag("m:brk", { "m:alnAt": brk }),
      aln != null && tag("m:aln", { "m:val": 1 }),
    ].filter(Boolean).join(""));
}
export function ommlSpreToString({ tagName, sub, sup, e }: OmmlSpre): string {
  return tag(
    tagName,
    {},
    () =>
      [
        tag("m:sub", {}, () => ommlMathArgToString(sub)),
        tag("m:sup", {}, () => ommlMathArgToString(sup)),
        tag("m:e", {}, () => ommlMathArgToString(e)),
      ].join(""),
  );
}
export function ommlSpreprToString({ tagName, ctrlpr }: OmmlSprepr): string {
  return tag(tagName, {});
}
export function ommlSsubToString(
  { tagName, ssubpr, e, sub }: OmmlSsub,
): string {
  return tag(
    tagName,
    {},
    () =>
      [
        ommlToString(ssubpr),
        tag("m:e", {}, () => ommlMathArgToString(e)),
        tag("m:sub", {}, () => ommlMathArgToString(sub)),
      ].join(""),
  );
}
export function ommlSsubprToString({ tagName, ctrlpr }: OmmlSsubpr): string {
  return tag(tagName, {});
}
export function ommlSsubsupToString(
  { tagName, ssubsuppr, e, sub, sup }: OmmlSsubsup,
): string {
  return tag(
    tagName,
    {},
    () =>
      [
        ommlToString(ssubsuppr),
        tag("m:e", {}, () => ommlMathArgToString(e)),
        tag("m:sub", {}, () => ommlMathArgToString(sub)),
        tag("m:sup", {}, () => ommlMathArgToString(sup)),
      ].join(""),
  );
}
export function ommlSsubsupprToString(
  { tagName, alnscr, ctrlpr }: OmmlSsubsuppr,
): string {
  return tag(
    tagName,
    {},
    () =>
      [alnscr != null && tag("m:alnScr", { "m:val": 1 })].filter(Boolean).join(
        "",
      ),
  );
}
export function ommlSsupToString(
  { tagName, ssuppr, e, sup }: OmmlSsup,
): string {
  return tag(
    tagName,
    {},
    () =>
      [
        ommlToString(ssuppr),
        tag("m:e", {}, () => ommlMathArgToString(e)),
        tag("m:sup", {}, () => ommlMathArgToString(sup)),
      ]
        .join(""),
  );
}
export function ommlSsupprToString({ tagName, ctrlpr }: OmmlSsuppr): string {
  return tag(tagName, {});
}
export function ommlTToString({ tagName, xmlSpace, text }: OmmlT): string {
  return tag(tagName, { "xml:space": xmlSpace }, () => he.encode(text));
}

function ommlMathArgToString({ argpr, children, ctrlpr }: OmmlMathArg): string {
  return [argpr, ...children].map(ommlToString).join("");
}
