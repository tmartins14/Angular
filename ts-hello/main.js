// Types
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, 'a', false];
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
// enum Color {Red = 0, Green = 1, Blue = 2};
// let backgroundColor = Color.Red
// Type Assertions
// let message;
// message = 'abc'
// let endsWithC = (<string>message).endsWith('c')
// let alternativeWay = (message as string).endsWith('c')
// Arrow Functions
// let log = function(message) {
//     console.log(message);
// }
// let doLog = (message) => {
//     console.log(message);
// }
// Interfaces, Classes, and Objects
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function () {
        // ...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
