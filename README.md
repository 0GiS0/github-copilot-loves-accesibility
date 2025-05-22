# ♿ GitHub Copilot Loves Accessibility

👋 This repository contains a demo web page that intentionally implements bad accessibility practices. It's designed to be used in accessibility awareness workshops and training sessions to showcase common mistakes developers make when accessibility is not a priority.

## 🚨 Demo of Accessibility Pitfalls

The demo page in this repository intentionally includes the following accessibility issues:

- 🚫 **Missing alt text on images**: The images don't have alt attributes, making them inaccessible to screen reader users.
- 👀 **Poor color contrast**: Some text has low contrast with its background, making it difficult to read for people with low vision.
- ⌨️ **No focus indicators**: Interactive elements don't show visual focus indicators, making it impossible to navigate via keyboard.
- 📋 **Inaccessible forms**: Form fields lack proper labels and ARIA attributes.
- 🔇 **Interactive elements that don't work with screen readers**: Custom UI components that aren't built with accessibility in mind.
- 🎨 **Use of only color to convey information**: Status indicators that rely solely on color differences.
- 🔄 **Inconsistent or illogical heading structure**: Heading levels skip from h1 to h3, then to h4, h5, and h6.
- 🌐 **No lang attribute in the HTML tag**: Missing language declaration.
- 📢 **Dynamic content not announced to assistive technologies**: No ARIA live regions for dynamically added content.
- ⏭️ **No skip link**: No way to bypass repetitive navigation menus.

## 📝 How to Use This Demo

1. Open `index.html` in your browser to view the inaccessible page.
2. Try navigating the page using only your keyboard (Tab key).
3. If possible, test the page using a screen reader.
4. Use browser developer tools to inspect accessibility issues.

## 🧪 Manual Accessibility Testing with Accessibility Insights

[Accessibility Insights](https://accessibilityinsights.io/) is the recommended tool for manual accessibility verification of this demo page. It helps identify accessibility issues that automated tests might miss and provides guidance on fixing them.

### 🔍 Installing Accessibility Insights

1. **Accessibility Insights for Web** (recommended for this demo):
   - Install the extension from [Chrome Web Store](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni) or [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/accessibility-insights-fo/nlgdhundjgnlbnjacdfdgpbmnjdpkged)
   - Once installed, you'll see the Accessibility Insights icon in your browser toolbar

2. For other platforms, visit [accessibilityinsights.io](https://accessibilityinsights.io/) to download:
   - Accessibility Insights for Windows
   - Accessibility Insights for Android

### 🔧 Running Tests with Accessibility Insights

After installing Accessibility Insights for Web:

1. **FastPass** (quick assessment):
   - Click the Accessibility Insights icon in your browser toolbar
   - Select "FastPass" from the menu
   - Click "Start" to scan the current page
   - Review automated checks and tab stops results

2. **Assessment** (comprehensive evaluation):
   - Click the Accessibility Insights icon
   - Select "Assessment" from the menu
   - Click "Start assessment" 
   - Follow the guided process to perform manual checks
   - Complete all test steps for a thorough evaluation

3. **Ad hoc tools** (focused testing):
   - Click the Accessibility Insights icon
   - Select specific tools like "Color", "Headings", or "Landmarks"
   - These tools help analyze specific aspects of the page

### 📊 Interpreting Results

- **Failures:** Review each failed check to understand what accessibility issues exist
- **Instances:** Examine specific elements that are causing accessibility problems
- **How to fix:** Follow the provided guidance to address each issue
- **Why it matters:** Learn why each issue is important for accessibility

### ⏱️ When to Perform Manual Verification

- During development when implementing or modifying UI components
- Before submitting a pull request that includes UI changes
- As part of code review for UI-related changes
- After fixing automated accessibility test failures
- Before major releases or deployments

### 💻 Using Dev Container

This repository includes a dev container configuration with Live Server extension:

1. Open the repository in Visual Studio Code with the Dev Containers extension installed.
2. When prompted, click "Reopen in Container" or use the command palette: `Dev Containers: Reopen in Container`.
3. Once the container is built and running, click "Go Live" in the status bar to start the Live Server.
4. The page will automatically open in your browser and refresh when changes are made.

### 🌐 GitHub Pages

This demo is available on GitHub Pages once the GitHub Actions workflow has completed. The site will be deployed at: https://0GiS0.github.io/github-copilot-loves-accesibility/

## 🎯 Purpose

This demo is intended to be used as an educational tool to help developers understand common accessibility mistakes and the importance of designing and building with accessibility in mind from the start.

## ⚠️ Disclaimer

This project intentionally violates accessibility best practices for educational purposes. The code in this repository should not be used as a reference for building accessible web applications.
