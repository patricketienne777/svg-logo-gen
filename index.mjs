import inquirer from 'inquirer';
import fileSystem from 'fs';
import shapesModule from './library/shapes.js';
import { Triangle, Circle, Square, Text } from './library/shapes.js';


// const { Triangle, Circle, Square, Text } = shapesModule;


// import { Triangle, Circle, Square, Text } from './library/shapes.js';

// const { Triangle, Circle, Square, Text } = require('./library/shapes.js');

const options = [
    {
        type: 'list',
        name: 'shape',
        message: 'Select your logo shape',
        choices: ['triangle', 'circle', 'square'], 
    },
    {
        type: 'input',
        name: 'text',
        message: 'Pick up to 3 letters to lay over your logo shape:',
    },
    {
        type: 'input',
        name: 'colorText',
        message: 'What color would you like for your text?',
    },
    {
        type: 'input',
        name: 'colorShape',
        message: 'What color would you like for your shape?',
    },
];

async function catchInput() {
    try {
        const solutions = await inquirer.prompt(options);

        const info = {
            text: solutions.text,
            colorText: solutions.colorText,
            colorShape: solutions.colorShape,
            shape: solutions.shape,
        };

        // Create an instance of the Text class with the provided text and colors
        const textElement = new Text(info.colorText, info.name, info.text);

        let shapeXml;
        // Determine the shape type and create the corresponding SVG shape
        if (info.shape === 'triangle') {
            shapeXml = new Triangle(info.colorShape, info.shape).render();
        } else if (info.shape === 'circle') {
            shapeXml = new Circle(info.colorShape, info.shape).render();
        } else if (info.shape === 'square') {
            shapeXml = new Square(info.colorShape, info.shape).render();
        } else {
            throw new Error('Incorrect input, please try again!');
        }

        // Incorporate the SVG representation of the text and shape into the final SVG logo
        const svgLogo = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            ${textElement.render()}
            ${shapeXml}
        </svg>`;

        // Save or process the generated SVG logo as needed
        fileFuse(svgLogo);
    } catch (err) { 
        console.error('Error:', err.message);
    }
}


// async function catchInput() {
//     try {
//         const solutions = await inquirer.prompt(options);

//         const info = {
//             text: solutions.text,
//             colorText: solutions.colorText, 
//             colorShape: solutions.colorShape,
//             shape: solutions.shape,
//         };

//         let textXml = new Text();
//         textXml = textXml.renderText(info.colorText, info.text);

//         let shapeXml;

//         if (info.shape === 'triangle') {
//             shapeXml = new Triangle(info.colorShape, info.shape).render();
//         } else if (info.shape === 'circle') {
//             shapeXml = new Circle(info.colorShape, info.shape).render();
//         } else if (info.shape === 'square') {
//             shapeXml = new Square(info.colorShape, info.shape).render();
//         } else {
//             throw new Error('Incorrect input, please try again!');
//         }

//         const svgLogo = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//         ${textXml}
//         ${shapeXml}
//         </svg>`;

//         fileFuse(svgLogo);
//     } catch (err) { 
//         console.error('Error:', err.message);
//     }
// }

function fileFuse(info) {
    fileSystem.writeFile('prototypes/logo.svg', info, (err) => { // Corrected the syntax here
        if (err) {
            console.error('Something went wrong creating this file:', err);
        } else {
            console.log('File created successfully!');
        }
    });
}

function getCatch() {
    catchInput();
}

getCatch();
