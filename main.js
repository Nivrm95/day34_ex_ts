//ex3
//1
function getValueType(arg) {
    return {
        type: typeof (arg),
        value: arg
    };
}
console.log(getValueType("hello"));
console.log(getValueType(123));
console.log(getValueType(true));
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.perimeter = function () {
        return this.length * 2 + this.width * 2;
    };
    Rectangle.prototype.area = function () {
        return this.length * this.width;
    };
    return Rectangle;
}());
var rectangle1 = new Rectangle(2, 4);
console.log(rectangle1.area());
console.log(rectangle1.perimeter());
function distance(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}
console.log(distance({ x: 3, y: 4 }, { x: 0, y: 0 }));
//4
var CardRank;
(function (CardRank) {
    CardRank[CardRank["Ace"] = 0] = "Ace";
    CardRank[CardRank["Two"] = 1] = "Two";
    CardRank[CardRank["Three"] = 2] = "Three";
    CardRank[CardRank["Four"] = 3] = "Four";
    CardRank[CardRank["Five"] = 4] = "Five";
    CardRank[CardRank["Six"] = 5] = "Six";
    CardRank[CardRank["Seven"] = 6] = "Seven";
    CardRank[CardRank["Eight"] = 7] = "Eight";
    CardRank[CardRank["Nine"] = 8] = "Nine";
    CardRank[CardRank["Ten"] = 9] = "Ten";
    CardRank[CardRank["Jack"] = 10] = "Jack";
    CardRank[CardRank["Queen"] = 11] = "Queen";
    CardRank[CardRank["King"] = 12] = "King";
})(CardRank || (CardRank = {}));
function higherCard(card1, card2) {
    return card1.rank > card2.rank ? card1 : card2;
}
console.log(higherCard(CardRank.Two, CardRank.Ten));
//5
var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    return Person;
}());
var person = new Person('John Doe', 30, 'john.doe@example.com');
console.log(person);
function area(shape) {
    var rectangleArea = shape.width * shape.height;
    var circleArea = Math.PI * Math.pow(shape.radius, 2);
    return rectangleArea + circleArea;
}
var myShape = { width: 2, height: 4, radius: 1 };
console.log(area(myShape));
