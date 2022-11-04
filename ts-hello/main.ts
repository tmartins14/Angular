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

// Interfaces, Classes, Objects, Constructors, Access Modifiers, Properties
// class Point {

//     constructor(private _x?: number, private _y?: number) {
//     }

//     draw() {
//         console.log('X: ' + this._x + ', Y: ' +this._y );
        
//     }

//     get x() {
//         return this._x
//     }

//     get y() {
//         return this._y
//     }

//     set x(value) {
//         if(value < 0) {
//             throw new Error('Value cannot be less than 0.')
//         } else {
//             this._x = value
//         }

//     }
    
// }

import {Point} from './point'
let point = new Point(1, 2);
point.draw()





