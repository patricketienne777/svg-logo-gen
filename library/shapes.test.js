
const { Triangle, Circle, Square } = require('./shapes.js');


describe('Triangle', () => {
    test('should create a string defining a triangle', () => {

        const expectedTriangle = '<polygon points="150, 20 240, 180 60, 180" fill="red" />';


        const triangle = new Triangle("red", "triangle");


        const renderedTriangle = triangle.render();


        expect(renderedTriangle).toEqual(expectedTriangle);
    });
});

describe('Circle', () => {
    test('should create a string defining a circle', () => {
        const expectedCircle = '<circle cx="150" cy="100" r="80" fill="red" />';

        const circle = new Circle("red", "circle");

        const renderedCircle = circle.render();

        expect(renderedCircle).toEqual(expectedCircle);
    });
});

describe('Square', () => {
    test('should create a string defining a square', () => {
        const expectedSquare = '<rect x="60" y="20" width="160" height="160" fill="red" />';

        const square = new Square("red", "Square");

        const renderedSquare = square.render();

        expect(renderedSquare).toEqual(expectedSquare);
    });
});
