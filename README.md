# ToDoListAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Concepts
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

Example using separated files.
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
}
```

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
</div>
```
