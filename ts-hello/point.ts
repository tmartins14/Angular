export class Point {

    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' +this._y );
        
    }

    get x() {
        return this._x
    }

    get y() {
        return this._y
    }

    set x(value) {
        if(value < 0) {
            throw new Error('Value cannot be less than 0.')
        } else {
            this._x = value
        }

    }
    
}