// const Letters = require('./text.js');
// const should = require('chai').should(); 
// describe('renderText', () => { 
//     it('needs to output string that defines svg green text', () => {
//         const protoText = '<text x="170" y="160" font-size="120" text-anchor="middle" fill="red">DEW</text>'; // Fixed the fill attribute and removed extra comma
//         const outcome = new Letters(); 
//         const result = outcome.renderText("DEW", "red"); 
//         result.should.equal(protoText); 
//     });
// });

const Letters = require('./text.js');
const chai = require('chai');
const should = chai.should();

describe('renderText', () => {
    it('needs to output string that defines svg red text', () => {
        const protoText = '<text x="170" y="160" font-size="120" text-anchor="middle" fill="red">DEW</text>'; // Fixed the fill attribute
        const outcome = new Letters();
        const result = outcome.renderText("DEW", "red"); // Changed the color argument to "red"
        result.should.equal(protoText);
    });
});

