class Rectangle{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width * this.height;
        return area;
    }

    paint(){
        console.log(`Painting with color ${this.color}`);
    }
}

const rect = new Rectangle(2, 5, 'red');
const area = rect.area();
const paint = rect.paint();
console.log(area);