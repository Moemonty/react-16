class Shape {
  constructor( color ) {
    this.color = color;
  }
  
  getColor() {
    return this.color;
  }
}

class Rectangle extends Shape {
  constructor( color, width, height ) {
    super( color );
    this.width = width;
    this.height = height;
  }
  
  getArea() {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle( 'red', 5, 8 );
console.log( "Area:\t\t" + rectangle.getArea() );
console.log( "Color:\t\t" + rectangle.getColor() );

for (const [key, value] of Object.entries(rectangle)) {
  console.log(`${key}: ${value}`);
}