import fs from "fs";
import path from "path";

const components = [
  "Experience.tsx",
  "Nav.tsx",
  "Footer.tsx",
];

describe("Part 2 – Components use Next.js <Link> instead of <a>", () => {
  components.forEach((fileName) => {
    it(`${fileName} imports and uses Link from next/link`, () => {
      const filePath = path.join(
        process.cwd(),
        "src",
        "app",
        "components",
        fileName
      );

      const src = fs.readFileSync(filePath, "utf8");

      expect(src).toMatch(/import\s+Link\s+from\s+["']next\/link["']/);

      const anchorTags = src.match(/<a\s+href=/g);
      if (anchorTags) {
        throw new Error(
          `Found <a href=...> in ${fileName}. Use <Link href="..."><a>text</a></Link> or <Link href="...">text</Link> instead.`
        );
      }
    });
  });
});
