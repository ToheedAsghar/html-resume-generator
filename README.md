# HTML Resume Generator

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/ToheedAsghar/html-resume-generator?utm_source=oss&utm_medium=github&utm_campaign=ToheedAsghar%2Fhtml-resume-generator&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

A professional, automated resume generator that converts HTML templates into high-quality PDF documents using Handlebars templating, SCSS styling, and Puppeteer.

<img width="2483" height="3509" alt="resume" src="https://github.com/user-attachments/assets/8d457cec-f612-4916-b784-bf38657efa4e" />

## Features

- **Template-Based**: Use Handlebars templates for easy content management
- **Automated PDF Generation**: Convert HTML to PDF with a single command
- **Professional Styling**: SCSS support for modern, customizable designs
- **Data-Driven**: Separate data from presentation for easy updates
- **Print-Optimized**: Generated PDFs are print-ready with proper formatting

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ToheedAsghar/html-resume-generator.git
cd html-resume-generator
```

2. Install dependencies:

```bash
npm install
```

3. Install Chrome for Puppeteer:
```bash
npx puppeteer browsers install chrome
```

## Usage

1. **Edit Your Resume Data**:
   Update `src/data.js` with your personal information, experience, education, projects, and skills.

2. **Customize the Template**:
   Modify `src/index.hbs` to change the HTML structure and layout.

3. **Style Your Resume**:
   Edit `src/styles.scss` to customize colors, fonts, and spacing.

4. **Generate PDF**:

```bash
npm start
```

Or run directly:
```bash
node index.js
```

Your resume will be generated as `output/resume.pdf`.

## Project Structure

```
html-resume-generator/
├── index.js              # Main script - orchestrates PDF generation
├── package.json          # Project dependencies
├── src/
│   ├── data.js          # Your resume data (JSON format)
│   ├── index.hbs        # Handlebars HTML template
│   └── styles.scss      # SCSS stylesheet
└── output/
    └── resume.pdf       # Generated PDF (auto-created)
```

## 🔧 Configuration

### Update Resume Data

Edit `src/data.js`:

```javascript
module.exports = {
  personalInfo: {
    name: "Your Name",
    email: "your.email@example.com",
    github: "github.com/yourusername",
    linkedin: "linkedin.com/in/yourusername",
  },
  professionalSummary: {
    summary: "Your professional summary...",
  },
  // ... add more sections
};
```

### Customize PDF Settings

In `index.js`, modify the PDF options:

```javascript
await page.pdf({
  path: outputPath,
  format: "A4", // Paper size
  printBackground: true, // Include background colors
  margin: {
    top: "10mm",
    bottom: "10mm",
    left: "10mm",
    right: "10mm",
  },
});
```

## Dependencies

- **[Puppeteer](https://pptr.dev/)**: Headless Chrome for PDF generation
- **[Handlebars](https://handlebarsjs.com/)**: Templating engine
- **[Sass](https://sass-lang.com/)**: CSS preprocessor

## Customization Tips

1. **Fonts**: Add Google Fonts or custom fonts in `styles.scss`
2. **Colors**: Define color variables in SCSS for consistent theming
3. **Layout**: Modify the Handlebars template for different section arrangements
4. **Page Breaks**: Use CSS `page-break-after` or `page-break-inside` for multi-page resumes

## Troubleshooting

### Common Issues

#### Error: "Could not find Chrome"
- Run: `npx puppeteer browsers install chrome`
- This installs the Chrome binary needed by Puppeteer

**Error: "Failed to deserialize params.printBackground"**

- Ensure `printBackground` is set to `true` (boolean), not `'true'` (string) or `1` (number)

**Missing closing parenthesis error**

- Check all strings in `data.js` are properly closed with quotes

**PDF not generating**

- Ensure the `output/` directory exists (created automatically)
- Check that all dependencies are installed
- Verify Chrome is installed: `npx puppeteer browsers list`

## License

ISC

## Author

**Toheed Asghar**

- GitHub: [@ToheedAsghar](https://github.com/ToheedAsghar)
- LinkedIn: [Toheed Asghar](https://linkedin.com/in/toheed-asghar)

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Show Your Support

Give a ⭐️ if this project helped you!

---

Made with ❤️ by Toheed Asghar
