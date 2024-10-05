# ToDoListAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Concepts
### Basic component anatomy
The following is the anatomy of the component. The props `template` and `styles` can be replaced by `templateUrl` and `styleUrl` to point to the related file. To import a component, it has to be imported to the top _AND_ using the `imports` properties, which is an array.
```js
import { Component1 } from './path-to-it'
import { Component2 } from './path-to-it'

@Component({
  standalone: true,
  selector: 'hello-item', /* HTML selector */
  template: `<button>Hello World</button>`,
  styles: `button { color: red; }`,
  imports: [Component1, Component2]
})
export class TodoListItem {
  /* Component behavior is defined in here, including methods */
}
```

### Using separate files
```js
@Component({
  standalone: true,
  selector: 'hello-item', /* HTML selector */
  templateUrl: './path-to-it',
  styleUrl: './path-to-it',
})
export class TodoListItem {
  /* Component behavior is defined in here, including methods */
  text = "Hello World";
  colors = [ "red", "blue", "green" ];
  sayHelloWorld() { console.log(this.text); }
}
```
In the button is added a small user interaction; other interactions can be something `keyup` or `keydown` etc. It is also possible to pass the event using `$event` variable.
```html
<div>
  @if (text.length() > 0) {
    <h1>{{ text }}</h1>
  } @else {
    <h1>No text to display</h1>
  }
  <ul>
    @for (color of colors; track color) {
      <li>{{ color }}</li>
    }
  </ul>
  <button (click)="sayHelloWorld()"></button>
</div>
```

## Dependency injection
1. Create an injectable service
```bash
ng generate service [folder-name]/[service-name]
```
```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  constructor(/* if HTTP client, need to be injected here */) {}
}
```
2. Inject the service by providing it in the constructor.
```js

```
