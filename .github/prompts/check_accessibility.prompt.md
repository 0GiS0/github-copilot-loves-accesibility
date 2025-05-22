---

mode: 'ask'
description: 'This prompt is to be used when we want to look for accessibility issues on the web'

---

## Prompt: Search for Accessibility Issues in the Codebase

Please review the entire #codebase for potential accessibility issues. Identify common patterns that may create barriers, such as:

- Missing `alt` attributes on images.
- Incorrect use of ARIA roles.
- Insufficient color contrast.
- Interactive elements without keyboard support.
- Forms without associated labels.
- Lack of semantic headings.

List the files and lines where these issues are detected and suggest how to fix them.