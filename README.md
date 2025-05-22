# GitHub Copilot Loves Accessibility

This repository contains a demo web page that intentionally implements bad accessibility practices. It's designed to be used in accessibility awareness workshops and training sessions to showcase common mistakes developers make when accessibility is not a priority.

## Demo of Accessibility Pitfalls

The demo page in this repository intentionally includes the following accessibility issues:

- **Missing alt text on images**: The images don't have alt attributes, making them inaccessible to screen reader users.
- **Poor color contrast**: Some text has low contrast with its background, making it difficult to read for people with low vision.
- **No focus indicators**: Interactive elements don't show visual focus indicators, making it impossible to navigate via keyboard.
- **Inaccessible forms**: Form fields lack proper labels and ARIA attributes.
- **Interactive elements that don't work with screen readers**: Custom UI components that aren't built with accessibility in mind.
- **Use of only color to convey information**: Status indicators that rely solely on color differences.
- **Inconsistent or illogical heading structure**: Heading levels skip from h1 to h3, then to h4, h5, and h6.
- **No lang attribute in the HTML tag**: Missing language declaration.
- **Dynamic content not announced to assistive technologies**: No ARIA live regions for dynamically added content.
- **No skip link**: No way to bypass repetitive navigation menus.

## How to Use This Demo

1. Open `index.html` in your browser to view the inaccessible page.
2. Try navigating the page using only your keyboard (Tab key).
3. If possible, test the page using a screen reader.
4. Use browser developer tools to inspect accessibility issues.

## Purpose

This demo is intended to be used as an educational tool to help developers understand common accessibility mistakes and the importance of designing and building with accessibility in mind from the start.

## Disclaimer

This project intentionally violates accessibility best practices for educational purposes. The code in this repository should not be used as a reference for building accessible web applications.
