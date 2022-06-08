import { DOMParser } from "https://esm.sh/v85/@xmldom/xmldom@0.8.2";
import { assertSnapshot } from "https://deno.land/std@0.139.0/testing/snapshot.ts";
import domToOmml from "./domToOmml.ts";

Deno.test("domToOmml", async (t) => {
  const p = new DOMParser();
  const document: Document = p.parseFromString(
    `
<m:oMath xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math">
<m:r>
  <m:t>23x + 9</m:t>
</m:r>
<m:sSup>
  <m:sSupPr />
  <m:e>
    <m:r>
      <m:t>x</m:t>
    </m:r>
  </m:e>
  <m:sup>
    <m:r>
      <m:t>9999</m:t>
    </m:r>
  </m:sup>
</m:sSup>
<m:r>
  <m:t>= 3</m:t>
</m:r>
</m:oMath>`,
    "application/xml",
  );
  await assertSnapshot(
    t,
    domToOmml(document.documentElement),
  );
});
