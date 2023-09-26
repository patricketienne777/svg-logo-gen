function Letters() {}

Letters.prototype.render = function(text, color) {
    return `<text x="150" y="140" font-size="150" text-anchor="middle" fill="${color}">${text}</text>`;
};

module.exports = Letters;