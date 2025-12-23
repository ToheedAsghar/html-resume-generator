const puppeteer = require('puppeteer');
const sass = require('sass');
const fs = require('fs');
const path = require('path')
const hbs = require('handlebars')

// importing the data
const resumeData = require('./src/data.js');

(
    async () => {
        try{
            console.log("Starting the Resume Generator");

            // define paths
            const templatePath = path.join(__dirname, 'src', 'index.hbs');
            const scssPath = path.join(__dirname, 'src', 'styles.scss');
            const outputPath = path.join(__dirname, 'output', 'resume.pdf');

            // compiling scss to css
            console.log('compiling scss');
            const cssResult = sass.compile(scssPath);
            const cssContent = cssResult.css;

            // compile html template with data
            console.log('Compiling html template ....');
            const templateSource = fs.readFileSync(templatePath, 'utf-8');
            const template = hbs.compile(templateSource);
            const finalHtml = template(resumeData);

            // launcing puppeteer
            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            // set content
            await page.setContent(finalHtml, {waitUntil: 'networkidle0'});
            await page.addStyleTag({content: cssContent});

            // generate pdf
            console.log('generating pdf....');

            if(!fs.existsSync(path.dirname(outputPath))){
                fs.mkdirSync(path.dirname(outputPath));
            }

            await page.pdf({
                path: outputPath,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '10mm',
                    bottom: '10mm',
                    left: '10mm',
                    right: '10mm'
                }
            });

            await browser.close();
            console.log(`Success! resume saved at ${outputPath}`);
        } catch(error){
            console.error('error generating resume:', error);
        }
    })();