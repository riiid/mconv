interface MmlElementBase<TTagName extends string> {
  tagName: TTagName;
}

export type MmlElement =
  | MmlMath
  | MmlCn
  | MmlSemantics
  | MmlCi
  | MmlCsymbol
  | MmlApply
  | MmlBind
  | MmlShare
  | MmlCerror
  | MmlCbytes
  | MmlCs
  | MmlBvar
  | MmlSep
  | MmlDomainofapplication
  | MmlCondition
  | MmlUplimit
  | MmlLowlimit
  | MmlDegree
  | MmlMomentabout
  | MmlLogbase
  | MmlPiecewise
  | MmlPiece
  | MmlOtherwise
  | MmlReln
  | MmlFn
  | MmlDeclare
  | MmlInterval
  | MmlInverse
  | MmlIdent
  | MmlDomain
  | MmlCodomain
  | MmlImage
  | MmlLn
  | MmlLog
  | MmlMoment
  | MmlLambda
  | MmlCompose
  | MmlQuotient
  | MmlDivide
  | MmlMinus
  | MmlPower
  | MmlRem
  | MmlRoot
  | MmlFactorial
  | MmlAbs
  | MmlConjugate
  | MmlArg
  | MmlReal
  | MmlImaginary
  | MmlFloor
  | MmlCeiling
  | MmlExp
  | MmlMax
  | MmlMin
  | MmlPlus
  | MmlTimes
  | MmlGcd
  | MmlLcm
  | MmlAnd
  | MmlOr
  | MmlXor
  | MmlNot
  | MmlImplies
  | MmlEquivalent
  | MmlForall
  | MmlExists
  | MmlEq
  | MmlGt
  | MmlLt
  | MmlGeq
  | MmlLeq
  | MmlNeq
  | MmlApprox
  | MmlFactorof
  | MmlTendsto
  | MmlInt
  | MmlDiff
  | MmlPartialdiff
  | MmlDivergence
  | MmlGrad
  | MmlCurl
  | MmlLaplacian
  | MmlSet
  | MmlList
  | MmlUnion
  | MmlIntersect
  | MmlCartesianproduct
  | MmlIn
  | MmlNotin
  | MmlNotsubset
  | MmlNotprsubset
  | MmlSetdiff
  | MmlSubset
  | MmlPrsubset
  | MmlCard
  | MmlSum
  | MmlProduct
  | MmlLimit
  | MmlSin
  | MmlCos
  | MmlTan
  | MmlSec
  | MmlCsc
  | MmlCot
  | MmlSinh
  | MmlCosh
  | MmlTanh
  | MmlSech
  | MmlCsch
  | MmlCoth
  | MmlArcsin
  | MmlArccos
  | MmlArctan
  | MmlArccosh
  | MmlArccot
  | MmlArccoth
  | MmlArccsc
  | MmlArccsch
  | MmlArcsec
  | MmlArcsech
  | MmlArcsinh
  | MmlArctanh
  | MmlMean
  | MmlSdev
  | MmlVariance
  | MmlMedian
  | MmlMode
  | MmlVector
  | MmlMatrix
  | MmlMatrixrow
  | MmlDeterminant
  | MmlTranspose
  | MmlSelector
  | MmlVectorproduct
  | MmlScalarproduct
  | MmlOuterproduct
  | MmlIntegers
  | MmlReals
  | MmlRationals
  | MmlNaturalnumbers
  | MmlComplexes
  | MmlPrimes
  | MmlEmptyset
  | MmlExponentiale
  | MmlImaginaryi
  | MmlNotanumber
  | MmlTrue
  | MmlFalse
  | MmlPi
  | MmlEulergamma
  | MmlInfinity
  | MmlAnnotation
  | MmlAnnotationXml
  | MmlMi
  | MmlMn
  | MmlMo
  | MmlMtext
  | MmlMspace
  | MmlMs
  | MmlMglyph
  | MmlMsline
  | MmlNone
  | MmlMprescripts
  | MmlMalignmark
  | MmlMaligngroup
  | MmlMrow
  | MmlMfrac
  | MmlMsqrt
  | MmlMroot
  | MmlMstyle
  | MmlMerror
  | MmlMpadded
  | MmlMphantom
  | MmlMfenced
  | MmlMenclose
  | MmlMsub
  | MmlMsup
  | MmlMsubsup
  | MmlMunder
  | MmlMover
  | MmlMunderover
  | MmlMmultiscripts
  | MmlMtable
  | MmlMlabeledtr
  | MmlMtr
  | MmlMtd
  | MmlMstack
  | MmlMlongdiv
  | MmlMsgroup
  | MmlMsrow
  | MmlMscarries
  | MmlMscarry
  | MmlMaction;

export interface MmlMath extends MmlElementBase<"m:math"> {} // TODO
export interface MmlCn extends MmlElementBase<"m:cn"> {} // TODO
export interface MmlSemantics extends MmlElementBase<"m:semantics"> {} // TODO
export interface MmlCi extends MmlElementBase<"m:ci"> {} // TODO
export interface MmlCsymbol extends MmlElementBase<"m:csymbol"> {} // TODO
export interface MmlApply extends MmlElementBase<"m:apply"> {} // TODO
export interface MmlBind extends MmlElementBase<"m:bind"> {} // TODO
export interface MmlShare extends MmlElementBase<"m:share"> {} // TODO
export interface MmlCerror extends MmlElementBase<"m:cerror"> {} // TODO
export interface MmlCbytes extends MmlElementBase<"m:cbytes"> {} // TODO
export interface MmlCs extends MmlElementBase<"m:cs"> {} // TODO
export interface MmlBvar extends MmlElementBase<"m:bvar"> {} // TODO
export interface MmlSep extends MmlElementBase<"m:sep"> {} // TODO
export interface MmlDomainofapplication
  extends MmlElementBase<"m:domainofapplication"> {} // TODO
export interface MmlCondition extends MmlElementBase<"m:condition"> {} // TODO
export interface MmlUplimit extends MmlElementBase<"m:uplimit"> {} // TODO
export interface MmlLowlimit extends MmlElementBase<"m:lowlimit"> {} // TODO
export interface MmlDegree extends MmlElementBase<"m:degree"> {} // TODO
export interface MmlMomentabout extends MmlElementBase<"m:momentabout"> {} // TODO
export interface MmlLogbase extends MmlElementBase<"m:logbase"> {} // TODO
export interface MmlPiecewise extends MmlElementBase<"m:piecewise"> {} // TODO
export interface MmlPiece extends MmlElementBase<"m:piece"> {} // TODO
export interface MmlOtherwise extends MmlElementBase<"m:otherwise"> {} // TODO
export interface MmlReln extends MmlElementBase<"m:reln"> {} // TODO
export interface MmlFn extends MmlElementBase<"m:fn"> {} // TODO
export interface MmlDeclare extends MmlElementBase<"m:declare"> {} // TODO
export interface MmlInterval extends MmlElementBase<"m:interval"> {} // TODO
export interface MmlInverse extends MmlElementBase<"m:inverse"> {} // TODO
export interface MmlIdent extends MmlElementBase<"m:ident"> {} // TODO
export interface MmlDomain extends MmlElementBase<"m:domain"> {} // TODO
export interface MmlCodomain extends MmlElementBase<"m:codomain"> {} // TODO
export interface MmlImage extends MmlElementBase<"m:image"> {} // TODO
export interface MmlLn extends MmlElementBase<"m:ln"> {} // TODO
export interface MmlLog extends MmlElementBase<"m:log"> {} // TODO
export interface MmlMoment extends MmlElementBase<"m:moment"> {} // TODO
export interface MmlLambda extends MmlElementBase<"m:lambda"> {} // TODO
export interface MmlCompose extends MmlElementBase<"m:compose"> {} // TODO
export interface MmlQuotient extends MmlElementBase<"m:quotient"> {} // TODO
export interface MmlDivide extends MmlElementBase<"m:divide"> {} // TODO
export interface MmlMinus extends MmlElementBase<"m:minus"> {} // TODO
export interface MmlPower extends MmlElementBase<"m:power"> {} // TODO
export interface MmlRem extends MmlElementBase<"m:rem"> {} // TODO
export interface MmlRoot extends MmlElementBase<"m:root"> {} // TODO
export interface MmlFactorial extends MmlElementBase<"m:factorial"> {} // TODO
export interface MmlAbs extends MmlElementBase<"m:abs"> {} // TODO
export interface MmlConjugate extends MmlElementBase<"m:conjugate"> {} // TODO
export interface MmlArg extends MmlElementBase<"m:arg"> {} // TODO
export interface MmlReal extends MmlElementBase<"m:real"> {} // TODO
export interface MmlImaginary extends MmlElementBase<"m:imaginary"> {} // TODO
export interface MmlFloor extends MmlElementBase<"m:floor"> {} // TODO
export interface MmlCeiling extends MmlElementBase<"m:ceiling"> {} // TODO
export interface MmlExp extends MmlElementBase<"m:exp"> {} // TODO
export interface MmlMax extends MmlElementBase<"m:max"> {} // TODO
export interface MmlMin extends MmlElementBase<"m:min"> {} // TODO
export interface MmlPlus extends MmlElementBase<"m:plus"> {} // TODO
export interface MmlTimes extends MmlElementBase<"m:times"> {} // TODO
export interface MmlGcd extends MmlElementBase<"m:gcd"> {} // TODO
export interface MmlLcm extends MmlElementBase<"m:lcm"> {} // TODO
export interface MmlAnd extends MmlElementBase<"m:and"> {} // TODO
export interface MmlOr extends MmlElementBase<"m:or"> {} // TODO
export interface MmlXor extends MmlElementBase<"m:xor"> {} // TODO
export interface MmlNot extends MmlElementBase<"m:not"> {} // TODO
export interface MmlImplies extends MmlElementBase<"m:implies"> {} // TODO
export interface MmlEquivalent extends MmlElementBase<"m:equivalent"> {} // TODO
export interface MmlForall extends MmlElementBase<"m:forall"> {} // TODO
export interface MmlExists extends MmlElementBase<"m:exists"> {} // TODO
export interface MmlEq extends MmlElementBase<"m:eq"> {} // TODO
export interface MmlGt extends MmlElementBase<"m:gt"> {} // TODO
export interface MmlLt extends MmlElementBase<"m:lt"> {} // TODO
export interface MmlGeq extends MmlElementBase<"m:geq"> {} // TODO
export interface MmlLeq extends MmlElementBase<"m:leq"> {} // TODO
export interface MmlNeq extends MmlElementBase<"m:neq"> {} // TODO
export interface MmlApprox extends MmlElementBase<"m:approx"> {} // TODO
export interface MmlFactorof extends MmlElementBase<"m:factorof"> {} // TODO
export interface MmlTendsto extends MmlElementBase<"m:tendsto"> {} // TODO
export interface MmlInt extends MmlElementBase<"m:int"> {} // TODO
export interface MmlDiff extends MmlElementBase<"m:diff"> {} // TODO
export interface MmlPartialdiff extends MmlElementBase<"m:partialdiff"> {} // TODO
export interface MmlDivergence extends MmlElementBase<"m:divergence"> {} // TODO
export interface MmlGrad extends MmlElementBase<"m:grad"> {} // TODO
export interface MmlCurl extends MmlElementBase<"m:curl"> {} // TODO
export interface MmlLaplacian extends MmlElementBase<"m:laplacian"> {} // TODO
export interface MmlSet extends MmlElementBase<"m:set"> {} // TODO
export interface MmlList extends MmlElementBase<"m:list"> {} // TODO
export interface MmlUnion extends MmlElementBase<"m:union"> {} // TODO
export interface MmlIntersect extends MmlElementBase<"m:intersect"> {} // TODO
export interface MmlCartesianproduct
  extends MmlElementBase<"m:cartesianproduct"> {} // TODO
export interface MmlIn extends MmlElementBase<"m:in"> {} // TODO
export interface MmlNotin extends MmlElementBase<"m:notin"> {} // TODO
export interface MmlNotsubset extends MmlElementBase<"m:notsubset"> {} // TODO
export interface MmlNotprsubset extends MmlElementBase<"m:notprsubset"> {} // TODO
export interface MmlSetdiff extends MmlElementBase<"m:setdiff"> {} // TODO
export interface MmlSubset extends MmlElementBase<"m:subset"> {} // TODO
export interface MmlPrsubset extends MmlElementBase<"m:prsubset"> {} // TODO
export interface MmlCard extends MmlElementBase<"m:card"> {} // TODO
export interface MmlSum extends MmlElementBase<"m:sum"> {} // TODO
export interface MmlProduct extends MmlElementBase<"m:product"> {} // TODO
export interface MmlLimit extends MmlElementBase<"m:limit"> {} // TODO
export interface MmlSin extends MmlElementBase<"m:sin"> {} // TODO
export interface MmlCos extends MmlElementBase<"m:cos"> {} // TODO
export interface MmlTan extends MmlElementBase<"m:tan"> {} // TODO
export interface MmlSec extends MmlElementBase<"m:sec"> {} // TODO
export interface MmlCsc extends MmlElementBase<"m:csc"> {} // TODO
export interface MmlCot extends MmlElementBase<"m:cot"> {} // TODO
export interface MmlSinh extends MmlElementBase<"m:sinh"> {} // TODO
export interface MmlCosh extends MmlElementBase<"m:cosh"> {} // TODO
export interface MmlTanh extends MmlElementBase<"m:tanh"> {} // TODO
export interface MmlSech extends MmlElementBase<"m:sech"> {} // TODO
export interface MmlCsch extends MmlElementBase<"m:csch"> {} // TODO
export interface MmlCoth extends MmlElementBase<"m:coth"> {} // TODO
export interface MmlArcsin extends MmlElementBase<"m:arcsin"> {} // TODO
export interface MmlArccos extends MmlElementBase<"m:arccos"> {} // TODO
export interface MmlArctan extends MmlElementBase<"m:arctan"> {} // TODO
export interface MmlArccosh extends MmlElementBase<"m:arccosh"> {} // TODO
export interface MmlArccot extends MmlElementBase<"m:arccot"> {} // TODO
export interface MmlArccoth extends MmlElementBase<"m:arccoth"> {} // TODO
export interface MmlArccsc extends MmlElementBase<"m:arccsc"> {} // TODO
export interface MmlArccsch extends MmlElementBase<"m:arccsch"> {} // TODO
export interface MmlArcsec extends MmlElementBase<"m:arcsec"> {} // TODO
export interface MmlArcsech extends MmlElementBase<"m:arcsech"> {} // TODO
export interface MmlArcsinh extends MmlElementBase<"m:arcsinh"> {} // TODO
export interface MmlArctanh extends MmlElementBase<"m:arctanh"> {} // TODO
export interface MmlMean extends MmlElementBase<"m:mean"> {} // TODO
export interface MmlSdev extends MmlElementBase<"m:sdev"> {} // TODO
export interface MmlVariance extends MmlElementBase<"m:variance"> {} // TODO
export interface MmlMedian extends MmlElementBase<"m:median"> {} // TODO
export interface MmlMode extends MmlElementBase<"m:mode"> {} // TODO
export interface MmlVector extends MmlElementBase<"m:vector"> {} // TODO
export interface MmlMatrix extends MmlElementBase<"m:matrix"> {} // TODO
export interface MmlMatrixrow extends MmlElementBase<"m:matrixrow"> {} // TODO
export interface MmlDeterminant extends MmlElementBase<"m:determinant"> {} // TODO
export interface MmlTranspose extends MmlElementBase<"m:transpose"> {} // TODO
export interface MmlSelector extends MmlElementBase<"m:selector"> {} // TODO
export interface MmlVectorproduct extends MmlElementBase<"m:vectorproduct"> {} // TODO
export interface MmlScalarproduct extends MmlElementBase<"m:scalarproduct"> {} // TODO
export interface MmlOuterproduct extends MmlElementBase<"m:outerproduct"> {} // TODO
export interface MmlIntegers extends MmlElementBase<"m:integers"> {} // TODO
export interface MmlReals extends MmlElementBase<"m:reals"> {} // TODO
export interface MmlRationals extends MmlElementBase<"m:rationals"> {} // TODO
export interface MmlNaturalnumbers extends MmlElementBase<"m:naturalnumbers"> {} // TODO
export interface MmlComplexes extends MmlElementBase<"m:complexes"> {} // TODO
export interface MmlPrimes extends MmlElementBase<"m:primes"> {} // TODO
export interface MmlEmptyset extends MmlElementBase<"m:emptyset"> {} // TODO
export interface MmlExponentiale extends MmlElementBase<"m:exponentiale"> {} // TODO
export interface MmlImaginaryi extends MmlElementBase<"m:imaginaryi"> {} // TODO
export interface MmlNotanumber extends MmlElementBase<"m:notanumber"> {} // TODO
export interface MmlTrue extends MmlElementBase<"m:true"> {} // TODO
export interface MmlFalse extends MmlElementBase<"m:false"> {} // TODO
export interface MmlPi extends MmlElementBase<"m:pi"> {} // TODO
export interface MmlEulergamma extends MmlElementBase<"m:eulergamma"> {} // TODO
export interface MmlInfinity extends MmlElementBase<"m:infinity"> {} // TODO
export interface MmlAnnotation extends MmlElementBase<"m:annotation"> {} // TODO
export interface MmlAnnotationXml extends MmlElementBase<"m:annotation-xml"> {} // TODO
export interface MmlMi extends MmlElementBase<"m:mi"> {} // TODO
export interface MmlMn extends MmlElementBase<"m:mn"> {} // TODO
export interface MmlMo extends MmlElementBase<"m:mo"> {} // TODO
export interface MmlMtext extends MmlElementBase<"m:mtext"> {} // TODO
export interface MmlMspace extends MmlElementBase<"m:mspace"> {} // TODO
export interface MmlMs extends MmlElementBase<"m:ms"> {} // TODO
export interface MmlMglyph extends MmlElementBase<"m:mglyph"> {} // TODO
export interface MmlMsline extends MmlElementBase<"m:msline"> {} // TODO
export interface MmlNone extends MmlElementBase<"m:none"> {} // TODO
export interface MmlMprescripts extends MmlElementBase<"m:mprescripts"> {} // TODO
export interface MmlMalignmark extends MmlElementBase<"m:malignmark"> {} // TODO
export interface MmlMaligngroup extends MmlElementBase<"m:maligngroup"> {} // TODO
export interface MmlMrow extends MmlElementBase<"m:mrow"> {} // TODO
export interface MmlMfrac extends MmlElementBase<"m:mfrac"> {} // TODO
export interface MmlMsqrt extends MmlElementBase<"m:msqrt"> {} // TODO
export interface MmlMroot extends MmlElementBase<"m:mroot"> {} // TODO
export interface MmlMstyle extends MmlElementBase<"m:mstyle"> {} // TODO
export interface MmlMerror extends MmlElementBase<"m:merror"> {} // TODO
export interface MmlMpadded extends MmlElementBase<"m:mpadded"> {} // TODO
export interface MmlMphantom extends MmlElementBase<"m:mphantom"> {} // TODO
export interface MmlMfenced extends MmlElementBase<"m:mfenced"> {} // TODO
export interface MmlMenclose extends MmlElementBase<"m:menclose"> {} // TODO
export interface MmlMsub extends MmlElementBase<"m:msub"> {} // TODO
export interface MmlMsup extends MmlElementBase<"m:msup"> {} // TODO
export interface MmlMsubsup extends MmlElementBase<"m:msubsup"> {} // TODO
export interface MmlMunder extends MmlElementBase<"m:munder"> {} // TODO
export interface MmlMover extends MmlElementBase<"m:mover"> {} // TODO
export interface MmlMunderover extends MmlElementBase<"m:munderover"> {} // TODO
export interface MmlMmultiscripts extends MmlElementBase<"m:mmultiscripts"> {} // TODO
export interface MmlMtable extends MmlElementBase<"m:mtable"> {} // TODO
export interface MmlMlabeledtr extends MmlElementBase<"m:mlabeledtr"> {} // TODO
export interface MmlMtr extends MmlElementBase<"m:mtr"> {} // TODO
export interface MmlMtd extends MmlElementBase<"m:mtd"> {} // TODO
export interface MmlMstack extends MmlElementBase<"m:mstack"> {} // TODO
export interface MmlMlongdiv extends MmlElementBase<"m:mlongdiv"> {} // TODO
export interface MmlMsgroup extends MmlElementBase<"m:msgroup"> {} // TODO
export interface MmlMsrow extends MmlElementBase<"m:msrow"> {} // TODO
export interface MmlMscarries extends MmlElementBase<"m:mscarries"> {} // TODO
export interface MmlMscarry extends MmlElementBase<"m:mscarry"> {} // TODO
export interface MmlMaction extends MmlElementBase<"m:maction"> {} // TODO
