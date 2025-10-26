# React CV Project

Build a résumé (CV) site in React with **Next.js App Router** that:

- Part 1: Read data from `resume.json` and render it through reusable components. 
- Part 2: Implement a **/contact** client route and render the contact page at `/contact`.


This project uses the previous work you completed to structure (html) and style (css) your cv.
Use your prior work to build your cv in React.  

---

### Setup: `resume.json` and images

- Fill in your data: Edit the `resume.json` provided in this template to reflect your actual info.
- Copy your images:  Copy the headshot and project images into `public/images`.

---

## Part 1: Components and props

Check the Home component in **page.tsx**.  The data is imported here from resume.json.  You will:

- Pass data to each child component via **props**..
- Build each child component in the files provided in `src/components/`.
- Use the types provided in **types/resume.ts**.
- Use `map()` to generate lists: skills, honors, experience, projects, project descriptions
- Nav must accept a **context** prop to determine whether rendering "Contact ... " or "About ..." and the appropriate url.
- images must use the **Image** component
   - src must begin with a leading `/`
   - include both width and height
   - Header: alt tag: name
   - Project alt tag: title
- links must use the **Link** component

## Part 2: /contact

Create a client route at **`/contact`** using App Router.

1. Create a folder and `page.tsx` file for the ContactPage component.
2. Make ContactPage a **client** component:

```tsx
"use client";
```

3. Import data from `resume.json` and destructure data as needed for the ContactPage component. 
4. Use the Nav and Footer components created in Part1.
5. Between Nav and Footer, render the heading, contact info, and form as before.  

**Note: `page.tsx` for the ContactPage component is the only additional component file needed.

## CSS

Move previous CSS and/or add new styles as necessary to create your desired professional appearance.  Be sure to use the className attribute where classes are used.

---

##  Testing

```bash
npm run test:part1   # Part 1 component structure and rendering
npm run test:part2   # Part 2 contact route and Nav behavior
npm test             # everything
```

### Land your dream job!!
