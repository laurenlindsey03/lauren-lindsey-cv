import fs from "node:fs";
import path from "node:path";

const componentsNeedingMap = [
  "Skills.tsx",
  "Honors.tsx",
  "Experience.tsx",
  "Projects.tsx",
  "ProjectItem.tsx"
];

describe("Part 1 – Components use Array.prototype.map", () => {
  for (const file of componentsNeedingMap) {
    it(`${file} contains .map(`, () => {
      const p = path.join(process.cwd(), "src", "app", "components", file);
      const src = fs.readFileSync(p, "utf8");
      expect(src).toMatch(/\.map\s*\(/);
    });
  }

  it("ProjectItem.tsx renders project.descr with .map(", () => {
    const p = path.join(process.cwd(), "src", "app", "components", "ProjectItem.tsx");
    const src = fs.readFileSync(p, "utf8").replace(/\s+/g, " ");
    expect(src).toMatch(/project\.descr.*\.map\s*\(/i);
  });
});
