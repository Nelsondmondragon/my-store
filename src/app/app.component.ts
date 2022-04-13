import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  register = {
    name: '',
    email: '',
    password: ''
  }



  widthImg: number = 10;
  name = 'Nelson';
  age = 22;
  image = 'https://source.unsplash.com/random';

  buttonDisable = true;
  newName = '';
  person = {
    name: 'Nelson',
    age: 18,
    avatar: 'https://source.unsplash.com/random'
  }


  box = {
    width: 100,
    height: 100,
    background: 'red'
  }

  names: string[] = ['Nelson', 'Juan', 'Ricardo'];

  products: Product[] = [
    {
      name: 'Ryzen 5 5600g',
      price: 750000,
      image: './assets/images/1.png',
      category: 'all'
    },
    {
      name: 'Ryzen 7 5700g',
      price: 1000000,
      image: './assets/images/2.jpg'
    }, {
      name: 'Ryzen 3 5300g',
      price: 3453453,
      image: './assets/images/3.png'
    }, {
      name: 'Ryzen 5 3400g',
      price: 53454545,
      image: './assets/images/4.jpg'
    }, {
      name: 'Ryzen 5 2400g',
      price: 5345345,
      image: './assets/images/5.jpg'
    }, {
      name: 'Ryzen 7 4750g',
      price: 34534534,
      image: './assets/images/6.png'
    }, {
      name: 'Ryzen 5 4650g',
      price: 5345345,
      image: './assets/images/7.jpg'
    }, {
      name: 'Intel i3',
      price: 345345345,
      image: './assets/images/8.jpeg'
    }, {
      name: 'Intel i5',
      price: 345345,
      image: './assets/images/9.jpg'
    }, {
      name: 'Intel i7',
      price: 345345345,
      image: './assets/images/10.jpg'
    },
  ];



  toggleButton() {
    this.buttonDisable = !this.buttonDisable;
  }

  increaseAge() {
    this.person.age += 1;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(): void {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register);
  }
}
