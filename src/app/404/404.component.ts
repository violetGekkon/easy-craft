import { Component } from '@angular/core';
import {EasyCraftAuthComponent} from "@easy-craft/auth";

@Component({
  selector: 'ec-404',
  standalone: true,
  imports: [EasyCraftAuthComponent],
  template: `
    Запрашиваемая страница не найдена
  `,
  styles: ``
})
export class NotFoundComponent {

}
