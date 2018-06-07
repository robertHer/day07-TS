
export class Sedan{
    make:string;
    model:string;
    year:number;
    constructor(make:string, model:string, year:number){
    this.make = make;
    this.model = model;
    this.year = year;
    }
} 


let honda = new Sedan ('honda', 'serw', 1990);
let ford = new Sedan ('ford', 'fadw', 1990);

