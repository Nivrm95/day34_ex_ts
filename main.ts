//ex3
//1
function getValueType<Type>(arg: Type): object {
    return {
      type: typeof(arg),
      value: arg,
    };
  }
  
  console.log(getValueType("hello")); 
  console.log(getValueType(123)); 
  console.log(getValueType(true)); 
  


//2
  interface IRectangle {
    length: number;
    width: number;
   }
   class Rectangle implements IRectangle{
    constructor (length: number, width: number){
        this.length = length;
        this.width = width
    }
    perimeter(){
        return this.length*2 + this.width*2
    }
    area(){
        return this.length * this.width
    }
   }

   const rectangle1 = new Rectangle(2,4);
   console.log(rectangle1.area());
   console.log(rectangle1.perimeter());

//3
interface IPoint {
    x: number;
    y: number;
}

function distance(p1: IPoint, p2: IPoint): number {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

console.log(distance({ x: 3, y: 4 }, { x: 0, y: 0 }));


//4
enum CardRank {
    Ace,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King
  }
  
  interface ICard {
    suit: string;
    rank: CardRank;
  }
  
  function higherCard(card1: Card, card2: Card): Card {
    return card1.rank > card2.rank ? card1 : card2;
  }

  console.log(higherCard(CardRank.Two , CardRank.Ten));
  

  //5
  class Person {
    name:string;
    age:number;
    email:string;
    
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
      }
}

const person = new Person('John Doe', 30, 'john.doe@example.com');
console.log(person);

//6
interface IRectangle {
    width: number;
    height: number;
  }
  
  interface ICircle {
    radius: number;
  }
  
  type Shape = IRectangle & ICircle;
  
 

  function area(shape: Shape) {
    const rectangleArea = shape.width * shape.height;
    const circleArea = Math.PI * shape.radius ** 2;
    return rectangleArea + circleArea;
  }
  
  const myShape: Shape = { width: 2, height: 4, radius: 1 };
  console.log(area(myShape)); 