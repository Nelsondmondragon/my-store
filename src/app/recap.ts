const username: string | number = 'nelsonbytes';
const sum = (a:number,b:number) =>{
  return a+b;
}

sum(2,2);

class Person {
  age: number;
  lastName: string;

  constructor(age:number=20, lastName:string='Nelson'){
    this.age=age;
    this.lastName=lastName;
  }
}

const nelson = new Person(15,'Cortes');
console.log(nelson);
