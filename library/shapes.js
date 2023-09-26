// class Shape {
//     constructor(color) {
//         this.color = color;
//     }
// }

// class Triangle extends Shape {
//     constructor(color, name) {
//         super(color);
//         this.name = name;
//     }

//     render() {
//         return `<polygon points="150, 20 240, 180 60, 180" fill="${this.color}"/>`;
//     }
// }

// class Circle extends Shape {
//     constructor(color, name) {
//         super(color);
//         this.name = name;
//     }

//     render() {
//         return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
//     }
// }

// class Square extends Shape {
//     constructor(color, name) {
//         super(color);
//         this.name = name;
//     }

//     render() {
//         return `<rect x="60" y="20" width="160" height="160" fill="${this.color}" />`;
//     }
// }

// module.exports = { Triangle, Circle, Square };


function Shape(color) {
    this.color = color;
}

Shape.prototype.render = function () {
    throw new Error('render() method must be implemented in subclasses.');
};

function Triangle(color, name) {
    Shape.call(this, color);
    this.name = name;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.render = function () {
    return `<polygon points="150, 20 240, 180 60, 180" fill="${this.color}"/>`;
};

function Circle(color, name) {
    Shape.call(this, color);
    this.name = name;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.render = function () {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
};

function Square(color, name) {
    Shape.call(this, color);
    this.name = name;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.render = function () {
    return `<rect x="60" y="20" width="160" height="160" fill="${this.color}" />`;
};

class Text extends Shape {
    constructor(color, name, text) {
        super(color);
        this.name = name;
        this.text = text;
    }

    render() {
        // Customize the text rendering as needed
        return `<text x="50" y="50" fill="${this.color}">${this.text}</text>`;
    }
}

module.exports = { Triangle, Circle, Square, Text};
