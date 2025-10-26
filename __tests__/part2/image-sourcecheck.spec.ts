import fs from "node:fs";
import path from "node:path";

const filesThatMustUseNextImage = [
  "Header.tsx",
  "ProjectItem.tsx"
];

describe("Part 2 – next/image is used for images", () => {
  for (const file of filesThatMustUseNextImage) {
    it(`${file} imports next/image and uses <Image>`, () => {
      const p = path.join(process.cwd(), "src", "app", "components", file);
      const src = fs.readFileSync(p, "utf8");
      expect(src).toMatch(/from\s+["']next\/image["']/);
      expect(src).toMatch(/<Image\s+/);
      expect(src).not.toMatch(/<img\s+/i); // forbid raw img in these components
    });
  }
});
