export function tag(
  tagName: string,
  attrs: { [attr: string]: string | number | undefined },
  children: () => string,
): string {
  const childrenText = children();
  const attrsText = Object.entries(attrs)
    .filter(([, v]) => v != null)
    .map(([k, v]) => ` ${k}="${v}"`)
    .join("");
  if (childrenText.length > 0) {
    return `<${tagName}${attrsText}>${childrenText}</${tagName}>`;
  } else {
    return `<${tagName}${attrsText}/>`;
  }
}
