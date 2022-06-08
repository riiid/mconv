import { assertSnapshot } from "https://deno.land/std@0.139.0/testing/snapshot.ts";
import ommlToString from "./ommlToString.ts";

Deno.test("ommlToString", async (t) => {
  await assertSnapshot(
    t,
    ommlToString({
      tagName: "m:oMath",
      children: [
        { tagName: "m:r", children: [{ tagName: "m:t", text: "23x + 9" }] },
        {
          tagName: "m:sSup",
          ssuppr: { tagName: "m:sSupPr" },
          e: {
            children: [{
              tagName: "m:r",
              children: [{ tagName: "m:t", text: "x" }],
            }],
          },
          sup: {
            children: [{
              tagName: "m:r",
              children: [{ tagName: "m:t", text: "9999" }],
            }],
          },
        },
        { tagName: "m:r", children: [{ tagName: "m:t", text: "= 3" }] },
      ],
    }),
  );

  await assertSnapshot(
    t,
    ommlToString({
      children: [
        {
          children: [
            {
              tagName: "m:t",
              text: "23x + 9",
              xmlSpace: undefined,
            },
          ],
          rpr: undefined,
          tagName: "m:r",
        },
        {
          e: {
            argpr: undefined,
            children: [
              {
                children: [
                  {
                    tagName: "m:t",
                    text: "x",
                    xmlSpace: undefined,
                  },
                ],
                rpr: undefined,
                tagName: "m:r",
              },
            ],
          },
          ssuppr: {
            tagName: "m:sSupPr",
          },
          sup: {
            argpr: undefined,
            children: [
              {
                children: [
                  {
                    tagName: "m:t",
                    text: "9999",
                    xmlSpace: undefined,
                  },
                ],
                rpr: undefined,
                tagName: "m:r",
              },
            ],
          },
          tagName: "m:sSup",
        },
        {
          children: [
            {
              tagName: "m:t",
              text: "= 3",
              xmlSpace: undefined,
            },
          ],
          rpr: undefined,
          tagName: "m:r",
        },
      ],
      tagName: "m:oMath",
    }),
  );
});
